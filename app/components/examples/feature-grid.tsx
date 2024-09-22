import { LandingProductFeaturesGrid } from '~/components/page-ui/landing/landing-product-features-grid';
import { LandingProductFeature } from '~/components/page-ui/landing/landing-product-feature';

export const Component = () => {
  return (
    <LandingProductFeaturesGrid
      title="Get the job done in no time"
      description="You'll save days of work and the only question you'll have is 'What do I do with all this free time?'"
    >
      <LandingProductFeature
        title="The wait is over"
        description="Give your project the home it deserves."
        imageSrc="/static/images/thumbnail-14.webp"
        imageAlt="Sample image"
      />

      <LandingProductFeature
        title="Branding"
        description="No configuration needed. We take care of it."
        imageSrc="/static/images/thumbnail-4.webp"
        imageAlt="Sample image"
      />

      <LandingProductFeature
        title="39+ themes"
        description="Choose from more than 30+ themes or create your own."
        imageSrc="/static/images/thumbnail-2.webp"
        imageAlt="Sample image"
      />
    </LandingProductFeaturesGrid>
  );
};
