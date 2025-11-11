import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const brands = [
  {
    name: 'Starbucks',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/starbucks.svg',
  },
  {
    name: 'Chick-fil-A',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/chick-fil-a-1.svg',
  },
  {
    name: 'Wingstop',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/wingstop.svg',
  },
  {
    name: 'Taco Bell',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/taco-bell-5.svg',
  },
  {
    name: 'HMSHost',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/hmshost.svg',
  },
  {
    name: 'Burger King',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
  },
  {
    name: 'Red Robin',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/red-robin-gourmet-burgers-1.svg',
  },
  {
    name: "Chili's",
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/chilis-1.svg',
  },
  {
    name: 'Sbarro',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/sbarro-1.svg',
  },
  {
    name: 'Cinnabon',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/cinnabon-3.svg',
  },
  {
    name: 'Au Bon Pain',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/au-bon-pain.svg',
  },
  {
    name: 'Cinnaholic',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/cinnaholic-1.svg',
  },
];

export default function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Experience Meets Innovation
            </h2>
            <p className="text-lg text-muted-foreground">
              RTG Resto Tech Group was founded on a simple premise: great hospitality businesses deserve to become enduring enterprises. We bridge the gap between operational excellence and technological innovation, turning promising restaurants into scalable, resilient brands.
            </p>
            <p className="text-muted-foreground">
              Our team brings over 100 years of combined experience from the world’s most recognized restaurant brands. We don't just invest; we partner, rolling up our sleeves to implement the systems, processes, and strategies that drive sustainable growth and profitability.
            </p>
            <Button asChild size="lg">
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-primary">A Legacy of Leadership with World-Class Brands</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <div key={brand.name} className="flex justify-center items-center p-4 bg-background rounded-lg shadow-sm">
                  <div className="relative h-16 w-32">
                    <Image
                      src={brand.logoUrl}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
