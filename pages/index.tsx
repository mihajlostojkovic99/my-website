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
      <div className="flex h-screen flex-col justify-center bg-[#F5F5F5]">
        <div className="my-0 mx-auto max-w-5xl">
          <div className="text-3xl font-medium">
            HI, MY NAME IS <span className="text-[#0476D0]">MIHAJLO</span>
          </div>
          <div className="text-8xl font-bold">
            I build <span className="text-[#800000]">websites</span> lol.
          </div>
          <div>
            <Link href={'about'}>
              <a className="hover:underline">About me</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
