'use client';

import { teamMembers } from '@/lib/team';
import Image from 'next/image';
import { notFound } from 'next/navigation';
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

export default function TeamMemberPage({ params }: { params: { memberId: string } }) {
  const member = teamMembers.find((m) => m.id === params.memberId);
  const images = imageData as ImageData;

  if (!member) {
    notFound();
  }

  const memberImage = images[member.imageId as keyof typeof images];

  // Split bio into paragraphs
  const bioParagraphs = member.bio.split('\n\n');

  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 p-8 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-4">
                {memberImage && (
                  <Image
                    src={memberImage.imageUrl}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="rounded-full object-cover"
                    priority
                  />
                )}
              </div>
              <h1 className="text-3xl font-bold text-primary mt-4 text-center">{member.name}</h1>
              <p className="text-lg text-muted-foreground mt-1">{member.title}</p>
            </div>
            <div className="md:col-span-2 p-8">
              <h2 className="text-2xl font-bold text-primary mb-4 text-center">Biography</h2>
              <div className="space-y-4 text-foreground/80 prose prose-lg max-w-none">
                {bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
