import type { NextPage } from 'next';
import { getSortedPostsData, PostData } from '../lib/posts';
import { GetStaticProps } from 'next';
import { BlogCard } from '../components/BlogCard';

type blogProps = {
  allPostsData: PostData[];
};
// flex flex-wrap justify-between gap-7
const Blog: NextPage<blogProps> = ({ allPostsData }) => {
  return (
    <div className="mt-20">
      <div className="mb-3 ml-1 text-xl font-light">{allPostsData.length} Posts</div>
      <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2">
        {allPostsData.map((postData: PostData) => {
          return <BlogCard key={postData.id} title={postData.title} summary={postData.summary} date={postData.date} />;
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

export default Blog;
