import type { MetaFunction } from "@remix-run/node";
import { Header } from '~/components/page-ui/ui/header';
import { Footer } from '~/components/page-ui/ui/footer';
import { Component as Hero } from '~/components/examples/hero';
import { Component as Section1 } from '~/components/examples/section-1';
import { Component as Section2 } from '~/components/examples/section-2';
import { Component as Section3 } from '~/components/examples/section-3';
import { Component as Ratings } from '~/components/examples/ratings';
import { Component as Section4 } from '~/components/examples/section-4';
import { Component as Section5 } from '~/components/examples/section-5';
import { Component as Marquee } from '~/components/examples/marquee';
import { Component as TestimonialsInline } from '~/components/examples/testimonials-inline';
import { Component as Testimonials } from '~/components/examples/testimonials';
import { Component as Section6 } from '~/components/examples/section-6';
import { Component as Showcase } from '~/components/examples/showcase';
import { Component as Feature } from '~/components/examples/feature';
import { Component as FeatureGrid } from '~/components/examples/feature-grid';
import { Component as ProductTour } from '~/components/examples/product-tour';
import { Component as FAQ } from '~/components/examples/faq';
import { Component as SocialProof } from '~/components/examples/social-proof';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const logo = <img src="/static/images/logo.webp" alt="Site Logo" height={40} width={40} />;
  return (
    <>
      <Header hideMenuItems={false} logo={logo} logoDark={logo} />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Ratings />
      <Section4 />
      <Section5 />
      <Marquee />
      <TestimonialsInline />
      <Testimonials />
      <Section6 />
      <Showcase />
      <Feature />
      <FeatureGrid />
      <ProductTour />
      <FAQ />
      <SocialProof />
      <Footer />
    </>
  );
}
