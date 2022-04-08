import { NextPage } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="my-0 mx-auto max-w-5xl">
        <div className=" text-lg font-medium md:text-2xl">
          Hi, my name is <span className="text-blue_grotto">Mihajlo</span> and
        </div>
        <div className="font-serif text-6xl font-bold md:text-8xl">
          I can maybe barely make <span className="text-burgundy">websites</span> lol.
        </div>
      </div>
    </div>
  );
};

export default Home;
