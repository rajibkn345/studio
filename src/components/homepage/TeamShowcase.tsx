'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Chip Joyner',
    title: 'Managing Partner',
    bio: 'Chip is an accomplished restaurant and QSR executive with 15+ years of leadership in multi-unit operations and growth strategy. He leads the firm’s mission to acquire and elevate great hospitality brands through technology and operational excellence. A graduate of Harvard Business School\'s OPM program, Chip previously gained deep operational DNA with brands like Chick-fil-A and Starbucks, scaling portfolios exceeding $60 million in annual revenue.',
    id: 'team-member-4',
  },
  {
    name: 'Joseph H. Handy',
    title: 'Managing Director / Partner, Development & Fundraising',
    bio: 'Joe is an accomplished executive with over two decades of experience driving growth and fundraising across high-profile organizations. As Chief Development Officer, he leads strategic development, brand expansion, and partner relations, guiding the company’s growth through innovation and a deep commitment to community impact.',
    id: 'team-member-5',
  },
  {
    name: 'Derrick Johnson',
    title: 'Chief Technology & Operations Director',
    bio: 'Derrick drives the integration of advanced technology and scalable systems across RTG’s portfolio. With 15+ years in franchise operations for brands like Cinnaholic and Levy Restaurants, he specializes in operational optimization and leveraging data to enhance efficiency and customer experience. He is a graduate of The University of Tennessee at Chattanooga.',
    id: 'team-member-6',
  },
  {
    name: 'Michael Auzenne',
    title: 'Senior Advisor, Governance & Strategy',
    bio: "Mike brings a powerful combination of analytical rigor, investment expertise, and brand experience to RTG Investments. With 15+ years across investment banking and global restaurant leadership, he guides RTG’s approach to identifying and elevating high-potential hospitality brands. He holds an MBA from Harvard Business School.",
    id: 'team-member-7',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Meet the Full Team
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
