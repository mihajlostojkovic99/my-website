import Link from 'next/link';
import Image from 'next/image';
import circle_profile from '../public/circle_profile.png';

export default function Navbar() {
  return (
    <div className="mx-auto flex w-[90%] max-w-[1200px] items-center justify-between py-12">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Image src={circle_profile} width="50px" height="50px" layout="fixed" unoptimized></Image> Mihajlo Stojkovic
      </div>
      <div className="flex gap-5 md:gap-11">
        <Link href={'/'} passHref>
          <div className="text-xl">
            <a className="hover:underline">
              <b aria-hidden="true">01.</b> Home
            </a>
          </div>
        </Link>
        <Link href={'/projects'} passHref>
          <div className="text-xl">
            <a className="hover:underline">
              <b aria-hidden="true">02.</b> Projects
            </a>
          </div>
        </Link>
        <Link href={'/blog'} passHref>
          <div className="text-xl">
            <a className="hover:underline">
              <b aria-hidden="true">03.</b> Blog
            </a>
          </div>
        </Link>
        <Link href={'/about'} passHref>
          <div className="text-xl">
            <a className="hover:underline">
              <b aria-hidden="true">04.</b> About
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}
