'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

export function TeamShowcase() {
  const { "team-showcase": teamImage } = placeholderImages;

  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A team of industry veterans dedicated to your success.
          </p>
        </div>

        <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] mx-auto rounded-lg overflow-hidden shadow-2xl mb-12">
          <Image
            src={teamImage.imageUrl}
            alt={teamImage.description}
            fill
            className="object-cover"
            data-ai-hint={teamImage.imageHint}
          />
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
