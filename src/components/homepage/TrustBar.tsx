import Image from 'next/image';

const logos = [
    {
        name: 'Starbucks',
        url: 'https://storage.googleapis.com/project-spark-b2481-avatars/a6a12b23-263a-46e3-95f7-3620f4b63897.svg',
        width: 100,
        height: 100,
    },
];

export function TrustBar() {
  return (
    <div className="py-8">
      <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
        {logos.map((logo) => (
          <div key={logo.name} className="relative" style={{ width: logo.width, height: logo.height }}>
            <Image
              src={logo.url}
              alt={`${logo.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
