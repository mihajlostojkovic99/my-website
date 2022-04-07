import { FC } from 'react';
import { Card } from './Card';
import { Button } from './Button';

type blogCardProps = {
  title: string;
  summary: string;
  date: string;
};

export const BlogCard: FC<blogCardProps> = ({ title, summary, date }) => {
  return (
    <Card
      renderCard={() => {
        return (
          <div className="flex h-full flex-col">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="text-lg font-medium">{title}</h3>
              <div className="text-sm">{new Date(date).toLocaleDateString('de-DE')}</div>
            </div>

            <p>{summary}</p>
            <div className="min-h-[16px]"></div>
            <Button className="w-fit font-medium">Read more</Button>
          </div>
        );
      }}
    />
  );
};
