'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { teamMembers } from '@/lib/team';
import imageData from '@/lib/placeholder-images.json';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcasedMembers.map((member) => {
            const memberImage = images[member.imageId as keyof typeof images];
            const bioSnippet = member.bio.split('\n\n')[0].substring(0, 150) + '...';

            return (
              <Collapsible key={member.id} asChild>
                <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <CollapsibleTrigger asChild>
                      <div
                        className="p-6 cursor-pointer group"
                      >
                        <div className="flex justify-between items-center">
                          <div className="w-full">
                            <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
                          </div>
                          <div className="group-data-[state=open]:hidden"><Plus className="h-5 w-5" /></div>
                          <div className="group-data-[state=closed]:hidden"><Minus className="h-5 w-5" /></div>
                        </div>
                      </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="transition-all duration-500 ease-in-out overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    <div className="px-6 pb-6 pt-0 text-center">
                      <div className="flex flex-col items-center gap-4">
                        {memberImage && (
                          <div className="relative">
                            <Image
                              src={memberImage.imageUrl}
                              alt={`Portrait of ${member.name}`}
                              width={120}
                              height={120}
                              className="object-cover rounded-full"
                            />
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground text-left">
                          {bioSnippet}
                        </p>
                        <Button asChild size="sm" variant="link" className="mt-auto">
                          <Link href={`/team/${member.id}`}>
                            View Full Bio <ArrowRight className="ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
        </div>
        
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
