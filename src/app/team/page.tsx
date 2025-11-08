'use client';

import { teamMembers } from '@/lib/team';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import imageData from '@/lib/placeholder-images.json';

type ImageData = {
  [key: string]: {
    imageUrl: string;
    description: string;
    imageHint: string;
    width: number;
    height: number;
  };
};

export default function TeamPage() {
  const images = imageData as ImageData;

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
          {teamMembers.map((member) => {
            const memberImage = images[member.imageId as keyof typeof images];
            return (
              <Link href={`/team/${member.id}`} key={member.id} className="group">
                <Card className="text-center flex flex-col items-center p-6 border shadow-sm h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <div className="relative w-36 h-36 mb-4">
                    {memberImage && (
                      <Image
                        src={memberImage.imageUrl}
                        alt={member.name}
                        width={144}
                        height={144}
                        className="rounded-full object-cover"
                      />
                    )}
                  </div>
                  <CardContent className="mt-4">
                    <h3 className="text-lg font-bold text-foreground text-center">{member.name}</h3>
                    <p className="text-md text-primary text-center">{member.title}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
