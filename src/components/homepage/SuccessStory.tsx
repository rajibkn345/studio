import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Users, BarChart } from 'lucide-react';

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
    benchmark: 'GAAL led BW region by 6+ percentage points in every category',
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

export function SuccessStory() {
  return (
    <section id="success-story" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge>RTG Success Story</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Record-Setting Performance in the Wingstop Portfolio</h2>
          <p className="text-lg md:text-xl font-semibold mt-2">Turning Performance Into Profit</p>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            When RTG’s CEO Chip Joyner was brought in to lead operational turnaround for a multi-unit Wingstop franchise portfolio, the results quickly exceeded expectations. Under his leadership, the portfolio not only reversed performance declines but outperformed national, regional, and franchise benchmarks across every key metric.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>📈 Results at a Glance</CardTitle>
          </CardHeader>
          <CardContent>
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
        
        <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">💡 What Drove the Turnaround</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {turnaroundDrivers.map((driver) => (
                    <Card key={driver.title} className="text-center p-6">
                        <CardHeader className="flex justify-center items-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                {driver.icon}
                            </div>
                            <CardTitle className="text-xl">{driver.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{driver.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">📊 The Impact</h3>
                <p className="text-muted-foreground mb-6">
                    Despite pandemic disruptions, GAAL achieved record-breaking operational improvement in less than two quarters. The turnaround validated RTG’s hands-on investment and operational excellence model, demonstrating how disciplined systems, data-driven decisions, and leadership alignment can transform underperforming assets into market-leading performers.
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
    </section>
  );
}
