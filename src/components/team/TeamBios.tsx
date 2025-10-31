'use client';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { getTeamBios } from '@/app/team/actions';
import { useState, useTransition } from 'react';
import { GenerateTeamBioBlurbsOutput } from '@/ai/flows/generate-team-bio-blurbs';
import { PlusCircle, Trash2, Wand2, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const teamMemberSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  title: z.string().min(2, 'Title is required.'),
  previousExperience: z.string().min(10, 'Experience details are required.'),
});

const formSchema = z.object({
  teamMemberDetails: z.array(teamMemberSchema).min(1, 'Please add at least one team member.'),
});

const initialTeamMembers = [
  { name: 'Chip Joyner', title: 'CEO & Founder', previousExperience: '15+ years in restaurant leadership, built and scaled portfolios over $60M, including at the world\'s busiest airport. Graduate of Harvard Business School\'s OPM program.' },
  { name: 'Sarah Chen', title: 'CEO & Founder', previousExperience: '20+ years in hospitality management, former COO at a Fortune 500 hotel chain.' },
  { name: 'David Lee', title: 'Chief Technology Officer', previousExperience: 'Lead architect for a major booking platform, specialist in AI-driven guest experiences.' },
  { name: 'Maria Rodriguez', title: 'Head of Operations', previousExperience: 'Scaled a boutique restaurant group from 2 to 50 locations nationwide.' },
];

export function TeamBios() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [generatedBios, setGeneratedBios] = useState<GenerateTeamBioBlurbsOutput['bioBlurbs']>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamMemberDetails: initialTeamMembers,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "teamMemberDetails",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setGeneratedBios([]);
    startTransition(async () => {
      const result = await getTeamBios(values);
      if (result.success && result.data) {
        setGeneratedBios(result.data);
        toast({
          title: 'Bios Generated!',
          description: 'Engaging bios created for your team.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'An error occurred.',
          description: result.error,
        });
      }
    });
  }

  const getImageUrlForTeamMember = (name: string) => {
    const staticImage = PlaceHolderImages.find(
      (img) => img.id === `team-member-${name.toLowerCase().replace(' ', '-')}` || img.description.includes(name)
    );
    if (staticImage) return staticImage.imageUrl;

    const memberIdMap: { [key: string]: string } = {
      'Sarah Chen': 'team-member-1',
      'David Lee': 'team-member-2',
      'Maria Rodriguez': 'team-member-3',
      'Chip Joyner': 'team-member-4',
    };
    const memberImage = PlaceHolderImages.find(img => img.id === memberIdMap[name]);
    return memberImage?.imageUrl || `https://picsum.photos/seed/${name.replace(/\s/g, '-')}/200/200`;
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {fields.map((field, index) => (
              <Card key={field.id} className="bg-secondary/50">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <FormField
                      control={form.control}
                      name={`teamMemberDetails.${index}.name`}
                      render={({ field }) => (
                        <FormItem><FormLabel>Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`teamMemberDetails.${index}.title`}
                      render={({ field }) => (
                        <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                      )}
                    />
                    <div className="flex items-start gap-2">
                       <FormField
                        control={form.control}
                        name={`teamMemberDetails.${index}.previousExperience`}
                        render={({ field }) => (
                          <FormItem className="flex-grow"><FormLabel>Previous Experience</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )}
                      />
                       <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)} className="mt-8 text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => append({ name: '', title: '', previousExperience: '' })}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Generate Bios
            </Button>
          </div>
           {form.formState.errors.teamMemberDetails?.message && <FormMessage>{form.formState.errors.teamMemberDetails.message}</FormMessage>}
        </form>
      </Form>

      {isPending && (
         <div className="text-center py-8">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Generating bios, please wait...</p>
        </div>
      )}

      {generatedBios.length > 0 && (
        <div className="space-y-8 pt-8 border-t">
            <h3 className="text-2xl font-bold text-center">Generated Biographies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {generatedBios.map((memberBio) => {
                    const memberDetails = form.getValues().teamMemberDetails.find(m => m.name === memberBio.name);
                    const imageUrl = getImageUrlForTeamMember(memberBio.name);
                    return (
                        <Card key={memberBio.name} className="flex flex-col text-center items-center">
                            <CardHeader>
                                <Avatar className="h-24 w-24 mb-4">
                                    <AvatarImage src={imageUrl} alt={memberBio.name} />
                                    <AvatarFallback>{memberBio.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <CardTitle>{memberBio.name}</CardTitle>
                                <CardDescription>{memberDetails?.title}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">{memberBio.bio}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
      )}
    </div>
  );
}
