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
        <main className="mx-3 min-h-[90vh] w-[90%] max-w-[1200px] md:mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
