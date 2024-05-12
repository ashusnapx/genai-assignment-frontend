import {
  Benchmarks,
  Brands,
  Faq,
  Footer,
  HeroSection,
  Navbar,
  Part,
  PricingPage,
  Products,
} from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <Brands />
      <Products />
      <Products />
      <Benchmarks />
      <PricingPage />
      <Faq />
      <Part />
      <Footer />
    </>
  );
}
