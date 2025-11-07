import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Repeat, TrendingUp } from "lucide-react";

const exitOptions = [
    {
        icon: <Handshake className="w-8 h-8 text-primary" />,
        title: "Strategic Sale or Recapitalization",
    },
    {
        icon: <Repeat className="w-8 h-8 text-primary" />,
        title: "Master Franchise Agreements",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        title: "Platform IPO or Roll-up Exit",
    },
];

export function FranchiseExitStrategy() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Franchise & Exit Strategy</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                        RTG’s franchise platform creates a capital-light path to expansion and recurring revenue. Once stabilized, brands generate royalty income, technology subscriptions, and marketing fees — producing predictable cash flow and premium valuations.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Exit Options Include</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {exitOptions.map((option) => (
                            <Card key={option.title} className="text-center p-6">
                                <CardHeader className="flex justify-center items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                                        {option.icon}
                                    </div>
                                    <CardTitle className="text-xl text-center">{option.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
