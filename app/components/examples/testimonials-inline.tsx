import { LandingTestimonialInline } from '~/components/page-ui/landing/testimonial/landing-testimonial-inline';
import { LandingTestimonialInlineItem } from '~/components/page-ui/landing/testimonial/landing-testimonial-inline-item';

export const Component = () => {
  return (
    <LandingTestimonialInline>
      <LandingTestimonialInlineItem
        imageSrc="https://picsum.photos/id/64/100/100"
        name="John Doe"
        text="I love this app"
      />

      <LandingTestimonialInlineItem
        imageSrc="https://picsum.photos/id/65/100/100"
        name="Jane Doe"
        text="Best app ever"
      />

      <LandingTestimonialInlineItem
        imageSrc="https://picsum.photos/id/669/100/100"
        name="Alice Doe"
        text="Fantastic"
        suffix="CEO of Instagram"
      />

      <LandingTestimonialInlineItem
        imageSrc="https://picsum.photos/id/829/100/100"
        name="Guido Ross"
        text="Recommended"
        suffix="DevOps at Meta"
      />
    </LandingTestimonialInline>
  );
};
