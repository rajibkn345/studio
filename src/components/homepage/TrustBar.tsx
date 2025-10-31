import { Briefcase } from 'lucide-react';

const partners = [
  'Innovate Corp',
  'QuantumLeap',
  'Stellar Solutions',
  'Apex Industries',
  'Zenith Group',
  'FusionWorks',
];

export function TrustBar() {
  return (
    <section className="bg-secondary py-8 md:py-12">
      <div className="container">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
          Trusted by and partnered with industry leaders
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((partner) => (
            <div key={partner} className="flex items-center gap-2 text-muted-foreground grayscale hover:grayscale-0 transition-all duration-300">
              <Briefcase className="h-6 w-6" />
              <span className="text-lg font-medium">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
