'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/lib/team';

const leadershipTeam = [
  teamMembers[0], // Chip Joyner
  teamMembers[1], // Joseph H. Handy
  teamMembers[2], // Derrick Johnson
  teamMembers[4]  // Michael Auzenne
];

export function TeamShowcase() {
  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A team of industry veterans dedicated to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((member) => (
            <Card key={member.id} className="text-center flex flex-col items-center">
              <CardContent className="pt-6">
                <div className="relative w-[150px] h-[150px] mx-auto mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="150px"
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-md text-primary">{member.title}</p>
              </CardContent>
            </Card>
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
