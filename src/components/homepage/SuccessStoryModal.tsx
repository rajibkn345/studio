import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Users, BarChart } from 'lucide-react';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';


const results = [
  {
    category: 'Same-Store Sales (Q1)',
    performance: '+13.4%',
    benchmark: 'National: +9.9% • Franchise Avg: +7.0%',
  },
  {
    category: 'Overall Satisfaction (OSAT)',
    performance: '+13.6 pts YoY',
    benchmark: 'Above both regional and national averages',
  },
  {
    category: 'Driver Order Satisfaction (DOSAT)',
    performance: '+34.3 pts YoY',
    benchmark: 'Leading all franchise peers',
  },
  {
    category: 'Accurate Orders',
    performance: 'Top 1% in Region',
    benchmark: 'Consistently above franchise mean',
  },
  {
    category: 'Staff Turnover Reduction',
    performance: '50% lower YoY',
    benchmark: 'Stability achieved despite COVID-19',
  },
  {
    category: 'Operational Consistency',
    performance: 'Improved across all SMG metrics',
    benchmark: 'this Southeastern franchisee led BW region by 6+ percentage points in every category',
  },
];

const turnaroundDrivers = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Leadership Reset',
    description: 'New management and training structure introduced within 30 days.',
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Operational Playbooks',
    description: 'Standardized systems for labor, order accuracy, and speed.',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: 'People-Focused Culture',
    description: 'Staff retention and morale surged, fueling service quality.',
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: 'Performance Analytics',
    description: 'Continuous review of customer metrics and financial results to sustain gains.',
  },
];

export function SuccessStoryModal() {
  return (
      <ScrollArea className="max-h-[80vh]">
        <div className="p-6">
            <DialogHeader className="mb-6 text-center">
                <Badge className="mx-auto mb-2">RTG Success Story</Badge>
                <DialogTitle className="text-3xl md:text-4xl font-bold text-primary mt-2 text-center">Record-Setting Performance in the Wingstop Portfolio</DialogTitle>
                 <DialogDescription className="text-lg md:text-xl font-semibold mt-2">Turning Performance Into Profit</DialogDescription>
                <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                    When RTG’s CEO Chip Joyner was brought in to lead operational turnaround for a multi-unit Wingstop franchise portfolio, the results quickly exceeded expectations. Under his leadership, the portfolio not only reversed performance declines but outperformed national, regional, and franchise benchmarks across every key metric.
                </p>
            </DialogHeader>

            <Card className="mb-8">
                <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4 text-center">📈 Results at a Glance</h3>
                    <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="font-semibold">Category</TableHead>
                        <TableHead className="font-semibold text-center">Performance</TableHead>
                        <TableHead className="font-semibold text-right">Benchmark Comparison</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {results.map((result) => (
                        <TableRow key={result.category}>
                            <TableCell className="font-medium">{result.category}</TableCell>
                            <TableCell className="text-center">
                            <Badge variant="secondary" className="text-base text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50">{result.performance}</Badge>
                            </TableCell>
                            <TableCell className="text-right text-muted-foreground">{result.benchmark}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </CardContent>
            </Card>
            
            <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">💡 What Drove the Turnaround</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {turnaroundDrivers.map((driver) => (
                        <Card key={driver.title} className="text-center p-6 bg-secondary">
                            <div className="flex justify-center items-center mb-4">
                                <div className="p-4 bg-primary/10 rounded-full">
                                    {driver.icon}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-center">{driver.title}</h4>
                            <p className="text-muted-foreground mt-2">{driver.description}</p>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">📊 The Impact</h3>
                    <p className="text-muted-foreground">
                        In the face of pandemic headwinds, a multi-state Southeastern franchisee delivered record operational improvement in less than two quarters—a testament to RTG’s hands-on investment model. The outcome showcased how disciplined execution, data intelligence, and unified leadership can convert struggling assets into high-performing market leaders.
                    </p>
                </div>
                <Card className="bg-secondary">
                    <CardContent className="p-6">
                        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                            “We don’t just invest in brands — we invest in people, process, and performance. Client results prove that with the right systems and culture, operational excellence becomes a competitive advantage.”
                        </blockquote>
                        <p className="text-right mt-4 font-semibold">— Chip Joyner, Managing Partner and Founder, RTG Resto Tech Group</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </ScrollArea>
  );
}
