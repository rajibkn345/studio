import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Exit? Let's Protect Your Legacy.</h2>
        <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
          Selling your business is a monumental decision. We specialize in seamless transitions that honor your hard work and ensure your company's future is in capable hands.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8">
          <Link href="#contact">Start the Conversation</Link>
        </Button>
      </div>
    </section>
  );
}
