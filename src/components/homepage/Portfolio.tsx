import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { SuccessStoryModal } from '@/components/homepage/SuccessStoryModal';

const portfolioItems = [
  {
    id: 'portfolio-wingstop',
    title: 'Wingstop Portfolio Turnaround',
    category: 'QSR Franchise',
    stats: ['+13.4% Same-Store Sales', '50% Lower Staff Turnover', 'Top 1% in Order Accuracy'],
    caseStudy: <SuccessStoryModal />,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Our Success Stories</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            We partner with exceptional companies and empower them to reach new heights.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {portfolioItems.map((item) => {
              return (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2">
                   <Dialog>
                    <DialogTrigger asChild>
                      <div className="p-1 h-full">
                          <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                            <CardHeader className="p-6 relative">
                              <CardTitle className="text-xl mb-2 text-center">{item.title}</CardTitle>
                              <div className="absolute top-4 right-4">
                                <Badge variant="secondary">{item.category}</Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow pt-0">
                              <CardDescription>Key outcomes from our partnership:</CardDescription>
                              <ul className="mt-4 space-y-2 text-sm text-foreground">
                                {item.stats.map(stat => (
                                  <li key={stat} className="flex items-center">
                                    <ArrowUpRight className="h-4 w-4 mr-2 text-primary" />
                                    {stat}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                              <span className="text-sm text-accent-foreground font-semibold flex items-center">
                                View Case Study <ArrowRight className="h-4 w-4 ml-1" />
                              </span>
                            </CardFooter>
                          </Card>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      {item.caseStudy}
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-14" />
          <CarouselNext className="mr-14" />
        </Carousel>
      </div>
    </section>
  );
}
