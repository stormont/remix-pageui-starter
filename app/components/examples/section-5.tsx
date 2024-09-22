import { LandingSaleCtaSection } from '~/components/page-ui/landing/cta/landing-sale-cta';

export const Component = () => {
  return (
    <LandingSaleCtaSection
      title="No more complexity, just simplicity"
      description="Our AI-powered task prioritization feature automatically organizes your to-do list based on deadlines, importance, and your work patterns, ensuring you focus on the most critical tasks first."
      ctaHref="https://gum.co/product"
      ctaLabel="Sign up now"
      withBackgroundGlow
    />
  );
};
