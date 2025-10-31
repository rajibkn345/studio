import { TeamBios } from "@/components/team/TeamBios";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeamPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Meet the Architects of Success</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Our team's strength lies in our people-first philosophy. Use the tool below to see how we craft professional, warm, and engaging bios that reflect our culture.
        </p>
      </div>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Team Bio Generator</CardTitle>
          <CardDescription>
            Add team members and generate professional, people-first bio blurbs using AI. This showcases our approach to communication.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TeamBios />
        </CardContent>
      </Card>
    </div>
  );
}
