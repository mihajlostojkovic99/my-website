import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Mishko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>This is about page!</div>{' '}
    </>
  );
};

export default About;
