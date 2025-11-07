import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ShieldCheck, TrendingUp, UserCheck } from "lucide-react";

const keyLevers = [
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: "Technology-driven efficiency",
        description: "POS, labor, analytics"
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Enhanced brand consistency",
        description: "Improved customer experience"
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        title: "Cost optimization",
        description: "Improved margins"
    },
    {
        icon: <UserCheck className="h-6 w-6 text-primary" />,
        title: "Leadership and franchisee development",
        description: "Building future leaders"
    }
];

export function OperationsValueCreation() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Operations & Value Creation</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                        RTG’s operating playbook is built around efficiency, data, and leadership. Our approach transforms local success stories into sustainable, multi-market franchise platforms.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Key Levers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {keyLevers.map((lever) => (
                             <Card key={lever.title} className="text-center p-6">
                                <CardHeader className="flex justify-center items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                                        {lever.icon}
                                    </div>
                                    <CardTitle className="text-xl text-center">{lever.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{lever.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
