import Image from 'next/image';

export function Hero() {
  const heroImage = {
    imageUrl: 'https://images.unsplash.com/photo-1623177623442-979c1e42c255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzYxNzg0NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Background image for the hero section showing a modern office meeting.',
    imageHint: 'modern office'
  };

  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Invest in the Future of Hospitality
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
          Join us in building a platform that turns great restaurant brands into national franchises.
        </p>
      </div>
    </section>
  );
}
