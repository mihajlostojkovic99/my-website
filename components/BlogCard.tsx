import { FC } from 'react';
import { Card } from './Card';
import { Button, LinkButton } from './Button';
import Link from 'next/link';

type blogCardProps = {
  id: string;
  title: string;
  summary: string;
  date: string;
};

export const BlogCard: FC<blogCardProps> = ({ id, title, summary, date }) => {
  return (
    <Card
      renderCard={() => {
        return (
          <div className="flex h-full flex-col">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="text-lg font-medium text-burgundy md:text-xl">{title}</h3>
              <div className="shrink-0 text-sm italic">| {new Date(date).toLocaleDateString('de-DE')}</div>
            </div>

            <p className="text-sm font-light">{summary}</p>
            <div className="min-h-[16px]"></div>
            <Link href={`/posts/${id}`} passHref>
              <LinkButton className="w-fit font-medium">Read more</LinkButton>
            </Link>
          </div>
        );
      }}
    />
  );
};
