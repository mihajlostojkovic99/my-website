import { FC, LegacyRef } from 'react';
import cx from 'classnames';
import React from 'react';
import { Url } from 'url';

type ButtonProps = {
  className?: string;
};

type LinkButtonProps = {
  className?: string;
  href?: string;
};

export const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <div
      className={cx(
        'cursor-pointer rounded-md border-2 border-blue_grotto bg-offWhite p-1 text-blue_grotto',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const LinkButton: FC<LinkButtonProps> = React.forwardRef(function LinkButton(
  { href, className, children },
  ref,
) {
  return (
    <a href={href} ref={ref as LegacyRef<HTMLAnchorElement>}>
      <Button className={className}>{children}</Button>
    </a>
  );
});
