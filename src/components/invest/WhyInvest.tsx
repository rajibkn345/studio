import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function WhyInvest() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Why Invest with RTG</h2>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-1/2 font-semibold text-lg">Traditional Franchise</TableHead>
                    <TableHead className="w-1/2 font-semibold text-lg">RTG Franchisor Platform</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Single-brand risk</TableCell>
                    <TableCell>
                        <Badge variant="secondary" className="text-base">Diversified brand portfolio</Badge>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Limited control</TableCell>
                    <TableCell>
                        <Badge variant="secondary" className="text-base">Active operational oversight</Badge>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Slow scaling</TableCell>
                    <TableCell>
                        <Badge variant="secondary" className="text-base">Technology-driven franchise growth</Badge>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Royalties only</TableCell>
                    <TableCell>
                        <Badge variant="secondary" className="text-base">Multiple revenue streams (royalties + systems + IP)</Badge>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Operator-dependent</TableCell>
                    <TableCell>
                        <Badge variant="secondary" className="text-base">Platform-driven performance</Badge>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </div>
    </section>
  );
}
