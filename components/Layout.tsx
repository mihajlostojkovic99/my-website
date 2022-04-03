import Navbar from './navbar';
import { FC } from 'react';
import Head from 'next/head';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex h-screen w-full ">
      <Head>
        <title>Mishko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-full flex-col justify-center">
        <Navbar></Navbar>
        <main className="mx-auto h-full max-w-5xl">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
