import { Hero } from '@/components/homepage/Hero';
import { TrustBar } from '@/components/homepage/TrustBar';
import { AboutPreview } from '@/components/homepage/AboutPreview';
import { Portfolio } from '@/components/homepage/Portfolio';
import { FranchiseSpotlight } from '@/components/homepage/FranchiseSpotlight';
import { CtaBanner } from '@/components/homepage/CtaBanner';
import { LeadershipPreview } from '@/components/homepage/LeadershipPreview';
import { InquiryForm } from '@/components/homepage/InquiryForm';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <Portfolio />
      <FranchiseSpotlight />
      <CtaBanner />
      <LeadershipPreview />
      <InquiryForm />
    </>
  );
}
