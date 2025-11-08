'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '@/lib/team';
import imageData from '@/lib/placeholder-images.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type ImageData = {
  [key: string]: {
    imageUrl: string;
    description: string;
    imageHint: string;
    width: number;
    height: number;
  };
};

export function TeamShowcase() {
  const images = imageData as ImageData;

  // Limit to the first 4 team members for the showcase
  const showcasedMembers = teamMembers.slice(0, 4);

  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A team of industry veterans dedicated to your success.
          </p>
        </div>

        <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcasedMembers.map((member) => {
            const memberImage = images[member.imageId as keyof typeof images];
            const bioSnippet = member.bio.split('\n\n')[0].substring(0, 150) + '...';

            return (
              <AccordionItem value={member.id} key={member.id} className="border-none">
                 <div className="bg-background rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                    <AccordionTrigger className="text-xl font-bold text-primary p-6 text-center hover:no-underline flex flex-col items-center">
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 text-center flex-grow flex flex-col">
                        <div className="relative aspect-square w-full max-w-[200px] mx-auto mb-4 rounded-full overflow-hidden">
                            {memberImage && (
                                <Image
                                src={memberImage.imageUrl}
                                alt={`Portrait of ${member.name}`}
                                fill
                                className="object-cover"
                                sizes="200px"
                                />
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 text-left flex-grow">
                            {bioSnippet}
                        </p>
                        <Button asChild size="sm" variant="link" className="mt-auto">
                            <Link href={`/team/${member.id}`}>
                                View Full Bio <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </AccordionContent>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/team">
              Meet the Full Team
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
