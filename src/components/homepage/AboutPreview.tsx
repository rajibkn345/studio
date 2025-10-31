import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function AboutPreview() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-preview');

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">A Partnership Built on Trust and Expertise</h2>
            <p className="text-lg text-muted-foreground">
              RTG Navigator is more than an investment firm; we are operators at our core. We partner with promising businesses, infusing them with capital, cutting-edge technology, and a century of combined operational experience to foster sustainable growth and protect legacies.
            </p>
            <p className="text-muted-foreground">
              Our people-first approach ensures that we honor the foundations you've built while navigating the path to future success together.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/team">
                Learn More About Our Philosophy
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
