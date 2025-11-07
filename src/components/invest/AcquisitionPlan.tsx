import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, MapPin, Scaling } from "lucide-react";

const focusAreas = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Founder-led or family-owned restaurant groups'
  },
  {
    icon: <Scaling className="h-6 w-6 text-primary" />,
    title: 'Strong regional presence with national scalability'
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Located in high-growth U.S. markets'
  }
];

export function AcquisitionPlan() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Acquisition Plan</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We acquire and integrate emerging restaurant brands (3–15 units) that are operationally strong but need strategic capital and systems to scale. Each brand enters RTG’s shared-service platform — receiving centralized support in operations, marketing, finance, and technology.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Our Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area) => (
              <Card key={area.title} className="text-center p-6">
                <CardHeader className="flex justify-center items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        {area.icon}
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl text-center">{area.title}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
