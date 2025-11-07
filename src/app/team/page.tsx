'use client';

import { teamMembers } from '@/lib/team';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function TeamPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary text-center">
            Our Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            A collection of motivated and experienced individuals driving our mission forward.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          {teamMembers.map((member) => (
             <Link href={`/team/${member.id}`} key={member.id} className="group">
              <Card className="text-center flex flex-col items-center p-6 border shadow-sm h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="relative w-36 h-36 mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="144px"
                    className="rounded-full object-cover"
                  />
                </div>
                <CardContent className="mt-4">
                  <h3 className="text-lg font-bold text-foreground text-center">{member.name}</h3>
                  <p className="text-md text-primary text-center">{member.title}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
