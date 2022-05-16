import type { NextPage } from 'next';
import Link from 'next/link';
import { getSortedPostsData, PostData } from '../lib/posts';
import { GetStaticProps } from 'next';
import { BlogCard } from '../components/BlogCard';

type projectsProps = {
  allPostsData: PostData[];
};

const Projects: NextPage<projectsProps> = ({ allPostsData }) => {
  return (
    <div className="mt-14 mb-7">
      <div className="mb-6">
        <Link href={'/'}>
          <a className="font-medium">Back</a>
        </Link>
      </div>
      <div className="mb-3 ml-1 text-xl font-light">{allPostsData.length} Projects</div>
      <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2">
        {allPostsData.map((postData: PostData) => {
          return (
            <BlogCard
              key={postData.id}
              id={postData.id}
              title={postData.title}
              summary={postData.summary}
              date={postData.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Projects;
