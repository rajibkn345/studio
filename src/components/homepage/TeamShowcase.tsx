'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import imageData from '@/lib/placeholder-images.json';

export function TeamShowcase() {
  const teamImage = (imageData as any)['team-showcase'];

  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A team of industry veterans dedicated to your success.
          </p>
        </div>
        
        {teamImage && (
          <div className="mb-12 flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={teamImage.imageUrl}
                alt={teamImage.description}
                width={teamImage.width}
                height={teamImage.height}
                className="object-cover"
                data-ai-hint={teamImage.imageHint}
              />
            </div>
          </div>
        )}

        <div className="text-center">
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
