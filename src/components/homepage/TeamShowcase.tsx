'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { teamMembers } from '@/lib/team';
import imageData from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';

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
            A team of industry veterans dedicated to your success. Click on a team member to learn more.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
          {showcasedMembers.map((member) => {
            const memberImage = images[member.imageId as keyof typeof images];
            const bioSnippet = member.bio.split('\n\n')[0]; // Get the first paragraph

            return (
              <AccordionItem value={member.id} key={member.id} className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="p-6 text-left hover:no-underline">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-primary">{member.name}</span>
                    <span className="text-sm text-muted-foreground">{member.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0 sm:w-1/4">
                       {memberImage && (
                        <Image
                          src={memberImage.imageUrl}
                          alt={`Portrait of ${member.name}`}
                          width={memberImage.width}
                          height={memberImage.height}
                          className="rounded-lg object-cover w-full h-auto"
                          data-ai-hint={memberImage.imageHint}
                        />
                      )}
                    </div>
                    <div className="flex-grow space-y-4">
                      <p className="text-foreground/80">{bioSnippet}</p>
                       <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={`/team/${member.id}`}>
                          View Full Bio <ArrowRight className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
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
