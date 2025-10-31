import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Investing in great hospitality businesses — and elevating them through technology, experience, and operational excellence.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
          100+ years of operational excellence meets innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#contact">Sell Your Business</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#franchise">Franchise With Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="#contact">Partner With RTG</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
