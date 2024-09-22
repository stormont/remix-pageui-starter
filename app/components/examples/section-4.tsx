import { Button } from '~/components/page-ui/ui/button';
import { LandingProductFeature } from '~/components/page-ui/landing/landing-product-feature';

export const Component = () => {
  return (
    <LandingProductFeature
      title="One-click API Integration"
      descriptionComponent={
        <>
          With our API integration capability, seamlessly connect our app with
          all popular providers.
          <Button variant="outlineSecondary" asChild>
            <a href="#">Check out our SDK</a>
          </Button>
        </>
      }
      withBackground
      variant="secondary"
      imageSrc="/static/images/product-sample.webp"
      imageAlt="Screenshot of the product"
      imagePosition="center"
      textPosition="center"
    />
  );
};
