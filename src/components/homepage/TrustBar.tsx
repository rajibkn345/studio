import React from 'react';

const logos = [
  { name: 'Starbucks', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/7041a27a-8531-41ee-9640-125026e64c23.svg' },
  { name: 'Chick-fil-A', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/4181a749-450f-4886-9351-1719a4e3752e.svg' },
  { name: 'Wingstop', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/f1d7910e-0186-4557-8904-8973625f3819.svg' },
  { name: 'Outback Steakhouse', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/65915d31-4a7b-4171-872f-5b6510344d51.svg' },
  { name: 'Inspire Brands', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/4f4c9797-299f-4f24-9b16-5441a1bf9c11.svg' },
  { name: 'Cinnabon', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/e55883a8-b66a-46b8-9363-5473775b4104.svg' },
  { name: 'Cinnaholic', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/9a75225c-6744-480f-bce6-3112c3f55091.svg' },
  { name: 'Chili\'s', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/22c9535e-c22f-4a37-b4d2-f673a5a76985.svg' },
  { name: 'Sbarro', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/8f0d5111-1373-4553-9f20-f5979f40398f.svg' },
  { name: 'Taco Bell', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/33827456-e910-482e-9189-253a6d71b315.svg' },
  { name: 'Burger King', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/3b018b32-9887-433b-a28a-784033092283.svg' },
  { name: 'Au Bon Pain', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/61b36a14-41e9-4e78-958a-3603417726f5.svg' },
  { name: 'HMS Host', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/6590f7d5-d020-431f-b565-5b4d758f5c49.svg' },
  { name: 'The Real Chow Baby', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/19f01509-3853-417d-81e0-b6edc6c64264.png'},
  { name: 'Georgia Aquarium', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/a8947672-03f4-43b3-851c-8067a31518f8.svg' },
  { name: 'Sodexo', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/a689f743-3b32-487a-8533-33434680d2f8.svg' },
  { name: 'Levy Restaurants', src: 'https://storage.googleapis.com/project-spark-b2481-avatars/b442145c-2d57-4148-84e0-a337e6512391.svg' },
];

export function TrustBar() {
  return (
    <section className="bg-secondary py-8 md:py-12">
      <div className="container">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          A leadership team with experience from world-class brands
        </h3>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-7 lg:mx-0 lg:max-w-none">
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
