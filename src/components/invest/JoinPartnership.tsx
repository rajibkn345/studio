import { Button } from "@/components/ui/button";
import Link from "next/link";

export function JoinPartnership() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Join Our Partnership</h2>
        <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
          RTG stands at the intersection of hospitality, technology, and investment. We’re building a platform that turns great restaurant brands into national franchises — and we invite you to grow with us. Let’s create long-term value through operational excellence and scalable growth.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8">
          <Link href="/#contact">Request Investor Information</Link>
        </Button>
      </div>
    </section>
  );
}
