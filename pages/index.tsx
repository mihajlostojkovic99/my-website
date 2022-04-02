import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mishko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-3xl font-bold underline">Hi world, my name is Mihajlo Stojkovic!</div>
      <div>
        <Link href={'about'}>
          <a className="hover:underline">About</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
