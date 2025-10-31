import React from 'react';

const logos = [
  { name: 'Starbucks', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/7041a27a-8531-41ee-9640-125026e64c23.svg' },
  { name: 'Chick-fil-A', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/4181a749-450f-4886-9351-1719a4e3752e.svg' },
  { name: 'Wingstop', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/f1d7910e-0186-4557-8904-8973625f3819.svg' },
  { name: 'Outback Steakhouse', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/65915d31-4a7b-4171-872f-5b6510344d51.svg' },
  { name: 'Inspire Brands', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/4f4c9797-299f-4f24-9b16-5441a1bf9c11.svg' },
  { name: 'Cinnaholic', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/07548545-81b0-49a9-b3a6-8968988636e0.svg' },
  { name: 'Chili\'s', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/22c9535e-c22f-4a37-b4d2-f673a5a76985.svg' },
];

export function TrustBar() {
  return (
    <section className="bg-secondary py-8 md:py-12">
      <div className="container">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          A leadership team with experience from world-class brands
        </h3>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none">
          {logos.map((logo) => (
            <img
              key={logo.name}
              className="col-span-1 max-h-12 w-full object-contain object-center"
              src={logo.src}
              alt={logo.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
