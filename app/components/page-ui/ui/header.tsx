import { siteConfig } from '~/shared/site-settings';
import { headerNavLinks } from '~/shared/header-nav-links';
import { cn } from '~/shared/utils';
import { MobileNav } from '~/components/page-ui/ui/mobile-nav';
import { ThemeSwitch } from '~/components/page-ui/ui/theme-switch';

export const Header = ({
  className,
  logo,
  logoDark,
  hideMenuItems,
}: {
  className?: string;
  logo: React.ReactNode;
  logoDark: React.ReactNode;
  hideMenuItems?: boolean;
}) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between py-10 flex-wrap w-full pt-6 wide-container',
        className,
      )}
    >
      <div>
        <a href="/" aria-label={siteConfig.logoTitle}>
          <div className="dark:hidden">{logo} {siteConfig.logoTitle}</div>
          <div className="hidden dark:flex">{logoDark} {siteConfig.logoTitle}</div>
        </a>
      </div>
      <div className="flex items-center leading-5 gap-4 sm:gap-6">
        {!hideMenuItems
          ? headerNavLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="nav-link hidden sm:block"
              >
                <span>{link.title}</span>
              </a>
            ))
          : null}
        <ThemeSwitch />

        {!hideMenuItems ? <MobileNav /> : null}
      </div>
    </header>
  );
};
