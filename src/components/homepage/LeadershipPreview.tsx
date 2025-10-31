import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function LeadershipPreview() {
  const leadershipImage = PlaceHolderImages.find(img => img.id === 'leadership-preview');

  return (
    <section id="leadership" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Leadership That Inspires</h2>
            <blockquote className="border-l-4 border-accent pl-6 italic text-lg md:text-xl text-foreground">
              "Great companies are built by great people. Our role is to empower them with the resources, experience, and trust they need to do their best work."
            </blockquote>
            <p className="text-muted-foreground">
              Our leadership team combines decades of hands-on operational experience with a forward-thinking, people-first approach. We're not just investors; we're partners dedicated to building enduring value.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/team">
                Meet Our Team
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            {leadershipImage && (
              <Image
                src={leadershipImage.imageUrl}
                alt={leadershipImage.description}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={leadershipImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
