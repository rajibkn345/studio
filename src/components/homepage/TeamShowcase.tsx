'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { teamMembers } from '@/lib/team';

const blankTiles = [1, 2, 3];
const firstMemberImage = {
  imageUrl: 'https://storage.googleapis.com/project-spark-b2481-avatars/sweater.jpeg',
  alt: 'A colorful patched sweater',
  imageHint: 'colorful sweater',
};

export function TeamShowcase() {
  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A team of industry veterans dedicated to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="flex flex-col text-center items-center p-6 justify-center">
            <Image
              src={firstMemberImage.imageUrl}
              alt={firstMemberImage.alt}
              width={150}
              height={150}
              className="rounded-full object-cover"
              data-ai-hint={firstMemberImage.imageHint}
            />
          </Card>

          {blankTiles.map((tile) => (
            <Card key={tile} className="flex flex-col text-center items-center p-6">
              <Skeleton className="h-[150px] w-[150px] rounded-full" />
              <div className="mt-4 space-y-2">
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </div>
            </Card>
          ))}
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
