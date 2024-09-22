import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  type?: 'narrow' | 'wide' | 'ultrawide';
}

export const Section = ({
  children,
  type = 'narrow',
  className,
}: Props) => {
  return (
    <section className={clsx(className, 'w-full', `container-${type}`)}>
      {children}
    </section>
  );
};
