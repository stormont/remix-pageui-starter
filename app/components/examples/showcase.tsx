import {
  FigmaIcon,
  TwitchIcon,
  ChromeIcon,
  InstagramIcon,
  TwitterIcon,
  FramerIcon,
  GithubIcon,
  SlackIcon,
} from 'lucide-react';
import { LandingShowcase } from '~/components/page-ui/landing/showcase/landing-showcase';
import { LandingShowcaseItem } from '~/components/page-ui/landing/showcase/landing-showcase-item';

export const Component = () => {
  return (
    <LandingShowcase
      title="Import with ease"
      description="All your video assets in one platform. Import your existing footage from any device with a click."
    >
      <LandingShowcaseItem>
        <FigmaIcon className="w-10 h-10" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <TwitchIcon className="w-10 h-10" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <ChromeIcon className="w-10 h-10" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <InstagramIcon className="w-10 h-10" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <TwitterIcon className="w-10 h-10" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <FramerIcon className="w-10 h-10" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <GithubIcon className="w-10 h-10" />
      </LandingShowcaseItem>

      <LandingShowcaseItem>
        <SlackIcon className="w-10 h-10" />
      </LandingShowcaseItem>
    </LandingShowcase>
  );
};
