import { FC } from 'react';
import cx from 'classnames';

type ButtonProps = {
  className?: string;
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
