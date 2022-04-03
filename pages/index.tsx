import { NextPage } from 'next';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="my-0 mx-auto max-w-5xl">
        <div className=" text-2xl font-medium">
          Hi, my name is <span className="text-[#0476D0]">Mihajlo</span> and
        </div>
        <div className="fontPlayfair text-8xl font-bold">
          I can maybe barely make <span className="text-[#800000]">websites</span> lol.
        </div>
      </div>
    </div>
  );
};

export default Home;
