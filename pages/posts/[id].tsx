import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPostsIds, getPostData, PostData } from '../../lib/posts';

type PostProps = {
  postData: PostData;
  source: MDXRemoteSerializeResult;
};

const Post: NextPage<PostProps> = ({ postData, source }) => {
  return (
    <div className="postPage mt-8">
      <div className="my-2 text-3xl font-bold">{postData.title}</div>
      <hr className="mb-8 h-1 bg-black" />
      <MDXRemote {...source} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, ...postData } = getPostData(params!.id as string);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    parseFrontmatter: false,
  });

  return {
    props: {
      postData,
      source: mdxSource,
    },
  };
};

export default Post;
