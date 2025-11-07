import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const competitiveEdge = [
    "Multi-brand diversification",
    "Institutional-level operations and oversight",
    "Proprietary tech and analytics platform",
    "Scalable franchise infrastructure",
    "Hands-on leadership team with operational success",
];

export function InvestmentOverview() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8 text-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Investment Overview</h2>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Investment Thesis</h3>
                        <p className="text-muted-foreground">
                            We focus on service-oriented restaurant brands with strong fundamentals, scalable operations, and loyal customer bases. By applying RTG’s proven systems, we unlock untapped profitability and expansion potential — creating above-market returns with reduced risk compared to traditional restaurant franchising.
                        </p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Our Competitive Edge</h3>
                        <ul className="space-y-3">
                            {competitiveEdge.map((edge) => (
                                <li key={edge} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                                    <span className="text-muted-foreground">{edge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Card className="bg-secondary">
                    <CardHeader className="text-center">
                        <CardTitle className="text-center">Fund Structure & Capital Strategy</CardTitle>
                        <CardDescription>Designed for Limited Partners seeking exposure to hospitality growth with professional management and aligned incentives.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                             <p className="font-semibold">Structure:</p>
                             <p className="text-muted-foreground">Closed-end private equity structure with GP/LP alignment where RTG leadership co-invests alongside partners.</p>
                        </div>
                         <div className="space-y-2">
                             <p className="font-semibold">Capital Deployment:</p>
                             <p className="text-muted-foreground">Capital is deployed toward acquisitions, system upgrades, and franchise development.</p>
                        </div>
                        <div className="space-y-2">
                             <p className="font-semibold">Returns:</p>
                             <p className="text-muted-foreground">Projected returns target premium IRR and equity multiples through disciplined value creation.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
