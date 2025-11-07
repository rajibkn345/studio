import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass, ShieldCheck, Cpu, Handshake, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const principles = [
  {
    icon: <Compass className="w-8 h-8 text-primary" />,
    title: 'Hospitality First',
    description: 'People and experience remain at the heart of every brand.',
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: 'Technology-Driven',
    description: 'Data and systems are catalysts for smarter, faster decisions.',
  },
  {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: 'Partnership Culture',
    description: 'We grow together — with operators, franchisees, and investors.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Operational Excellence',
    description: 'Excellence isn’t optional; it’s engineered through process and leadership.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Legacy and Growth',
    description: 'Protect the brand’s DNA while scaling its impact.',
  },
];

const brands = [
  { name: 'Chick-fil-A', logoUrl: 'https://cdn.worldvectorlogo.com/logos/chick-fil-a-1.svg' },
  { name: 'Starbucks', logoUrl: 'https://cdn.worldvectorlogo.com/logos/starbucks.svg' },
  { name: 'Inspire Brands', logoUrl: 'https://cdn.worldvectorlogo.com/logos/inspire-brands.svg' },
  { name: 'Wingstop', logoUrl: 'https://cdn.worldvectorlogo.com/logos/wingstop-logo.svg' },
  { name: 'Burger King', logoUrl: 'https://cdn.worldvectorlogo.com/logos/burger-king-2020.svg' },
  { name: 'US Foods', logoUrl: 'https://cdn.worldvectorlogo.com/logos/us-foods-1.svg' },
  { name: 'Sodexo', logoUrl: 'https://cdn.worldvectorlogo.com/logos/sodexo-2.svg' },
  { name: 'Boston Consulting Group', logoUrl: 'https://cdn.worldvectorlogo.com/logos/boston-consulting-group.svg' },
  { name: 'Bank of America', logoUrl: 'https://cdn.worldvectorlogo.com/logos/bank-of-america-2.svg' },
];


export function AboutPreview() {
  const aboutImage = {
    imageUrl: 'https://images.unsplash.com/photo-1688380692117-63178554d76d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzYxODM4MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Image for the about preview section, showing professionals in a discussion.',
    imageHint: 'business meeting'
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container space-y-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">A leadership team with experience from world-class brands</h2>
            </div>
             <div className="py-6">
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-6">
                {brands.map((brand) => (
                  <div key={brand.name} className="relative h-10 w-28" title={brand.name}>
                    <Image
                      src={brand.logoUrl}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain filter grayscale transition-all duration-300 hover:filter-none"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                RTG’s mission is to acquire and grow scalable restaurant and hospitality brands by blending human expertise with innovation. We empower operators with systems, insights, and leadership that drive profitability, consistency, and exceptional guest experiences.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                RTG envisions a future where operational excellence and digital innovation coexist — where every brand we touch becomes smarter, stronger, and more guest-focused. Our vision is to redefine hospitality investment by uniting legacy expertise with modern intelligence to create enduring value for our partners, teams, and communities.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={800}
              height={600}
              className="object-cover w-full h-full"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
        </div>

        <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Guiding Principles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our principles are the compass that guides every decision we make, ensuring we stay true to our mission and vision.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {principles.map((principle) => (
            <Card key={principle.title} className="text-center p-6">
              <CardHeader className="flex justify-center items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {principle.icon}
                </div>
                <CardTitle className="text-xl">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
