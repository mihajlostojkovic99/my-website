import { FC, ReactNode } from 'react';
import cx from 'classnames';

type CardProps = {
  className?: string;
  renderCard: () => ReactNode;
};
// rounded-2xl border border-white p-4 shadow-lg
export const Card: FC<CardProps> = ({ className, renderCard }) => {
  return <div className={cx('card p-4', className)}>{renderCard()}</div>;
};
