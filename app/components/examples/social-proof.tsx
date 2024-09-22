import { LandingSocialProofBand } from '~/components/page-ui/landing/social-proof/landing-social-proof-band';
import { LandingSocialProofBandItem } from '~/components/page-ui/landing/social-proof/landing-social-proof-band-item';

export const Component = () => {
  return (
    <LandingSocialProofBand>
      <LandingSocialProofBandItem>
        100% encrypted and secure
      </LandingSocialProofBandItem>

      <LandingSocialProofBandItem>24/7 customer support</LandingSocialProofBandItem>

      <LandingSocialProofBandItem>
        99% customer satisfaction
      </LandingSocialProofBandItem>
    </LandingSocialProofBand>
  );
};
