import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/vs2015.css';
import { getPostsIds, getPostData, PostData } from '../../lib/posts';
import Link from 'next/link';

hljs.registerLanguage('typescript', typescript);

type PostProps = {
  postData: PostData;
  source: MDXRemoteSerializeResult;
};

const Post: NextPage<PostProps> = ({ postData, source }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="postPage mt-6">
      <div className="mb-6">
        <Link href={'/blog'}>
          <a className="font-medium">Back</a>
        </Link>
      </div>
      <div className="my-2 text-3xl font-bold text-burgundy">{postData.title}</div>
      <hr className="mb-8 h-1 bg-burgundy" />
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
