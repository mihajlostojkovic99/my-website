import { NextPage } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="mx-auto mt-16">
      <div className=" text-lg font-medium md:text-2xl">
        Hi, my name is <span className="text-blue_grotto">Mihajlo</span> and
      </div>
      <div className="font-serif text-6xl font-bold md:text-8xl">
        I guess I make <span className="text-burgundy">websites</span> lol.
      </div>
    </div>
  );
};

export default Home;
