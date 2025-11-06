'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { teamMembers } from '@/lib/team';

const leadershipToShow = teamMembers.slice(0, 1);
const blankTiles = [1, 2, 3];

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
          {leadershipToShow.map((member) => (
            <Card key={member.id} className="flex flex-col text-center items-center p-6">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.imageUrl} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-primary text-sm">{member.title}</p>
            </Card>
          ))}
          {blankTiles.map((tile) => (
            <Card key={tile} className="flex flex-col text-center items-center p-6">
              <Skeleton className="h-24 w-24 mb-4 rounded-full" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
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
