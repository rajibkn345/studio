import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-headline font-bold text-xl">
              RTG Resto Tech Group
            </Link>
            <p className="text-sm text-muted-foreground">Investing in Great Businesses. Elevating Them with Technology and Experience.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/#portfolio" className="text-muted-foreground hover:text-primary">Our Portfolio</Link></li>
                <li><Link href="/team" className="text-muted-foreground hover:text-primary">Our Team</Link></li>
                <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Opportunities</h4>
              <ul className="space-y-2">
                <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Sell Your Business</Link></li>
                <li><Link href="/#franchise" className="text-muted-foreground hover:text-primary">Franchise With Us</Link></li>
                <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Partner With RTG</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">Get the latest news and insights from RTG.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RTG Resto Tech Group. All rights reserved. A Delaware Company.</p>
        </div>
      </div>
    </footer>
  );
}
