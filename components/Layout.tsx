import Navbar from './Navbar';
import { FC } from 'react';
import Head from 'next/head';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex w-full ">
      <Head>
        <title>Mishko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-col justify-center">
        <Navbar></Navbar>
        <main className="mx-auto h-[90vh] max-w-5xl">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
