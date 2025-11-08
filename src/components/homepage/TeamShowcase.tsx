'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '@/lib/team';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function TeamShowcase() {
  // Show a few key members, e.g., the first 3
  const featuredMembers = teamMembers.slice(0, 3);

  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A team of industry veterans dedicated to your success.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {featuredMembers.map((member) => (
             <Link href={`/team/${member.id}`} key={member.id} className="group">
              <Card className="text-center flex flex-col items-center p-6 border shadow-sm h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="relative w-36 h-36 mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="144px"
                    className="rounded-full object-cover"
                  />
                </div>
                <CardContent className="mt-4">
                  <h3 className="text-lg font-bold text-foreground text-center">{member.name}</h3>
                  <p className="text-md text-primary text-center">{member.title}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/team">
              Meet the Full Team
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
