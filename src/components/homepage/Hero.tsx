import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroImage = {
    imageUrl: 'https://images.unsplash.com/photo-1623177623442-979c1e42c255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzYxNzg0NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Background image for the hero section showing a modern office meeting.',
    imageHint: 'modern office'
  };

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-center">
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
