import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Gem, BarChart } from "lucide-react";

const strategyPoints = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Movement',
    description: 'Acquire brands that can grow fast through digital systems and operational efficiency.'
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Balance',
    description: 'Build disciplined infrastructure that protects brand integrity and profitability.'
  },
  {
    icon: <Gem className="w-8 h-8 text-primary" />,
    title: 'Leverage',
    description: 'Turn inefficiencies into opportunity through technology and shared services.'
  }
];

export function Strategy() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Our Strategy: The Roll-Up & Franchise Growth Model</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            RTG’s platform unites technology, operations, and franchising to unlock value across multiple brands. We don’t just own restaurants — we elevate them into scalable, high-performing franchise systems that generate recurring cash flow and strong exit potential.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategyPoints.map((point) => (
            <Card key={point.title} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {point.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-center">{point.title}</CardTitle>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
