import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: 'Chip Joyner',
    title: 'CEO & Founder',
    bio: 'Chip is an accomplished restaurant and QSR executive with 15+ years of leadership in multi-unit operations and growth strategy. As Founder and CEO, he leads the firm’s mission to acquire and elevate great hospitality brands through technology and operational excellence. Before RTG, Chip gained deep operational DNA with brands like Chick-fil-A and Starbucks, scaling portfolios exceeding $60 million in annual revenue.',
    id: 'team-member-4',
  },
  {
    name: 'Joseph H. Handy',
    title: 'Chief Development Officer',
    bio: 'Joe is an accomplished executive with over two decades of experience driving growth and fundraising across high-profile organizations. As Chief Development Officer, he leads strategic development, brand expansion, and partner relations, guiding the company’s growth through innovation and a deep commitment to community impact.',
    id: 'team-member-5',
  },
  {
    name: 'Sarah Chen',
    title: 'CEO & Founder',
    bio: 'With over two decades in hospitality, Sarah is a visionary leader dedicated to innovation and guest satisfaction. Her experience at a Fortune 500 hotel chain honed her skills in scaling operations while maintaining a people-first culture, a philosophy she embeds in every RTG venture.',
    id: 'team-member-1',
  },
  {
    name: 'David Lee',
    title: 'Chief Technology Officer',
    bio: "David is the architectural mind behind RTG's technological edge. As the former lead architect for a major booking platform, he excels in creating AI-driven solutions that enhance guest experiences and streamline operations, ensuring our partners stay ahead of the curve.",
    id: 'team-member-2',
  },
  {
    name: 'Maria Rodriguez',
    title: 'Head of Operations',
    bio: "Maria's operational acumen is unmatched. She masterfully scaled a boutique restaurant group from a handful of locations to a nationwide presence. Her expertise in process optimization and team development is crucial to the successful growth of our portfolio companies.",
    id: 'team-member-3',
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find((img) => img.id === member.id);
            return (
              <Card key={member.name} className="flex flex-col text-center items-center p-6">
                <Avatar className="h-24 w-24 mb-4">
                  {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} />}
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="mb-4">{member.title}</CardDescription>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/team">
              Use Our Bio Generator
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
