'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { teamMembers } from '@/lib/team';

const leadershipTeam = teamMembers.slice(0, 4);

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
            <Card key={member.id} className="flex flex-col text-center items-center p-6">
              <Image
                src={member.imageUrl}
                alt={`Portrait of ${member.name}`}
                width={150}
                height={150}
                className="rounded-full object-cover aspect-square"
              />
              <CardHeader>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              </CardHeader>
              <CardContent>
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
