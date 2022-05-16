import Navbar from './Navbar';
import { FC } from 'react';
import Head from 'next/head';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mishko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-full flex-col">
        <Navbar></Navbar>
        <main className="mx-3 w-[90%] max-w-[1200px] md:mx-auto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
