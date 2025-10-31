'use client';

import Image from 'next/image';
import { teamMembers } from '@/lib/team';

export default function TeamPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Our Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            A collection of motivated and experienced individuals driving our mission forward.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative h-64 w-64 mx-auto">
                <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    width={256}
                    height={256}
                    className="rounded-full object-cover shadow-lg"
                    data-ai-hint={member.imageHint}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-md text-primary">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
