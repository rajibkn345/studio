import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
    {
      name: 'Chip Joyner',
      title: 'Managing Partner',
      id: 'team-member-4',
    },
    {
      name: 'Joseph H. Handy',
      title: 'Managing Director / Partner, Development & Fundraising',
      id: 'team-member-5',
    },
    {
      name: 'Derrick Johnson',
      title: 'Chief Technology & Operations Director',
      id: 'team-member-6',
    },
    {
      name: 'Michael Auzenne',
      title: 'Senior Advisor, Governance & Strategy',
      id: 'team-member-7',
    },
    {
      name: 'Rajiv Asnani',
      title: 'Principal',
      id: 'team-member-8',
    },
    {
        name: 'Rebecca Auzenne',
        title: 'Senior Software Engineer',
        id: 'team-member-9',
    },
    {
        name: 'Brock Bacon',
        title: 'Vice President',
        id: 'team-member-10',
    },
    {
        name: 'Ben Baranov',
        title: 'Senior Data Associate',
        id: 'team-member-11',
    },
    {
        name: 'Reed Bethune',
        title: 'Data Associate',
        id: 'team-member-12',
    },
    {
        name: 'Caitlin Cain',
        title: 'Executive Assistant',
        id: 'team-member-13',
    },
    {
        name: 'Connor Camunez',
        title: 'Analyst',
        id: 'team-member-14',
    },
    {
        name: 'Lindsay Carlson',
        title: 'Director - Investor Relations',
        id: 'team-member-15',
    },
  ];

export default function TeamPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Our Team</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Meet the experienced leaders driving our success.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
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
                <h3 className="text-md font-bold uppercase tracking-wide">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
            </div>
           );
        })}
      </div>
    </div>
  );
}
