'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  generateTeamBioBlurbs,
  type GenerateTeamBioBlurbsInput,
  type GenerateTeamBioBlurbsOutput,
} from '@/ai/flows/generate-team-bio-blurbs';
import { Loader } from 'lucide-react';

const teamMembers = [
  {
    name: 'Chip Joyner',
    title: 'Managing Partner',
    id: 'team-member-4',
    previousExperience: '15+ years in restaurant operations (Chick-fil-A, Starbucks), scaled portfolios >$60M.',
    education: 'Harvard Business School OPM Program',
  },
  {
    name: 'Joseph H. Handy',
    title: 'Co-Founder and Managing Director of Development',
    id: 'team-member-5',
    previousExperience: '20+ years in executive leadership, fundraising, and brand expansion.',
    education: 'Georgia State University',
  },
  {
    name: 'Derrick Johnson',
    title: 'Chief Technology & Operations Director',
    id: 'team-member-6',
    previousExperience: '15+ years in franchise operations (Cinnaholic, Levy Restaurants), tech integration.',
    education: 'University of Tennessee at Chattanooga',
  },
  {
    name: 'Michael Auzenne',
    title: 'Senior Advisor, Governance & Strategy',
    id: 'team-member-7',
    previousExperience: '15+ years in investment banking and global restaurant leadership.',
    education: 'Harvard Business School MBA',
  },
  {
    name: 'Rajiv Asnani',
    title: 'Principal',
    id: 'team-member-8',
    previousExperience: 'Extensive background in private equity and hospitality investment.',
    education: 'NYU Stern School of Business',
  },
  {
      name: 'Rebecca Auzenne',
      title: 'Senior Software Engineer',
      id: 'team-member-9',
      previousExperience: 'Lead developer at tech startups, specialized in consumer-facing platforms.',
      education: 'Stanford University, M.S. Computer Science',
  },
  {
      name: 'Brock Bacon',
      title: 'Vice President',
      id: 'team-member-10',
      previousExperience: 'Mergers & Acquisitions for a leading food & beverage focused investment bank.',
      education: 'University of Chicago Booth School of Business',
  },
  {
      name: 'Ben Baranov',
      title: 'Senior Data Associate',
      id: 'team-member-11',
      previousExperience: 'Data science lead at a major QSR analytics firm.',
      education: 'Carnegie Mellon University',
  },
  {
      name: 'Reed Bethune',
      title: 'Data Associate',
      id: 'team-member-12',
      previousExperience: 'Analytics and business intelligence for a national restaurant chain.',
      education: 'Georgia Institute of Technology',
  },
  {
      name: 'Caitlin Cain',
      title: 'Executive Assistant',
      id: 'team-member-13',
      previousExperience: 'Executive support for C-suite leaders in the hospitality industry.',
      education: 'University of Southern California',
  },
  {
      name: 'Connor Camunez',
      title: 'Analyst',
      id: 'team-member-14',
      previousExperience: 'Financial modeling and due diligence at a boutique investment firm.',
      education: 'University of Texas at Austin',
  },
  {
      name: 'Lindsay Carlson',
      title: 'Director - Investor Relations',
      id: 'team-member-15',
      previousExperience: 'Managed investor communications for a publicly traded hospitality REIT.',
      education: 'Georgetown University',
  },
];

export default function TeamPage() {
  const [bios, setBios] = useState<GenerateTeamBioBlurbsOutput['bioBlurbs']>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateBios = async () => {
    setIsLoading(true);
    setBios([]);
    try {
      const input: GenerateTeamBioBlurbsInput = {
        teamMemberDetails: teamMembers.map(({ name, title, previousExperience, education }) => ({ name, title, previousExperience, education })),
      };
      const result = await generateTeamBioBlurbs(input);
      setBios(result.bioBlurbs);
    } catch (error) {
      console.error('Error generating bios:', error);
      // Handle error state in UI if necessary
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Our Team</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Meet the experienced leaders driving our success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
         {teamMembers.map((member) => {
           const memberImage = PlaceHolderImages.find((img) => img.id === member.id);
           return (
            <div key={member.name} className="text-center">
                {memberImage && (
                    <div className="mb-4 relative aspect-square overflow-hidden rounded-md shadow-lg">
                        <Image
                            src={memberImage.imageUrl}
                            alt={`Portrait of ${member.name}`}
                            fill
                            className="object-cover"
                            data-ai-hint={memberImage.imageHint}
                        />
                    </div>
                )}
                <h3 className="text-lg font-bold uppercase tracking-wide">{member.name}</h3>
                <p className="text-muted-foreground">{member.title}</p>
            </div>
           );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Team Bio Generator</CardTitle>
          <CardDescription>
            Instantly craft professional, people-first bios for our team members. Click the button to see our Genkit AI in action.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleGenerateBios} disabled={isLoading}>
            {isLoading ? <><Loader className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : 'Generate All Bios'}
          </Button>
          {bios.length > 0 && (
            <div className="space-y-4 pt-4">
              {bios.map((bio) => (
                <div key={bio.name}>
                  <h3 className="font-semibold">{bio.name}</h3>
                  <p className="text-muted-foreground">{bio.bio}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
