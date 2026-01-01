import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FranchiseSpotlight() {
  const franchiseImage = {
    imageUrl: '/chow-baby.jpg',
    description: 'A bustling restaurant interior with patrons dining.',
    imageHint: 'restaurant interior'
  };

  return (
    <section id="franchise" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl order-last md:order-first">
            <Image
              src={franchiseImage.imageUrl}
              alt={franchiseImage.description}
              width={800}
              height={600}
              className="object-cover w-full h-full"
              data-ai-hint={franchiseImage.imageHint}
            />
          </div>
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Grow With a Proven Model</h2>
            <p className="text-lg text-muted-foreground">
              Leverage our operational expertise and powerful brand recognition. RTG Resto Tech Group offers franchise opportunities for driven entrepreneurs ready to build a successful business on a solid foundation.
            </p>
            <p className="text-muted-foreground">
              We provide the playbook, technology, and support network you need to thrive in a competitive market.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="#contact">
                Explore Franchise Opportunities
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
