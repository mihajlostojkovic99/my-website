import Link from 'next/link';
import Image from 'next/image';
import circle_profile from '../public/circle_profile.png';
import { MenuIcon, MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import { useEffect, useRef } from 'react';

export default function Navbar() {
  const refMenuButton = useRef<SVGSVGElement>(null);
  const refCloseButton = useRef<SVGSVGElement>(null);
  const refNav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refMenuButton && refCloseButton && refNav) {
      refMenuButton.current?.addEventListener('click', () => {
        refNav.current?.setAttribute('data-visibility', 'true');
        refCloseButton.current?.setAttribute('data-visibility', 'true');
        refMenuButton.current?.setAttribute('data-visibility', 'false');
      });

      refCloseButton.current?.addEventListener('click', () => {
        refNav.current?.setAttribute('data-visibility', 'false');
        refCloseButton.current?.setAttribute('data-visibility', 'false');
        refMenuButton.current?.setAttribute('data-visibility', 'true');
      });

      refNav.current?.addEventListener('click', () => {
        refNav.current?.setAttribute('data-visibility', 'false');
        refCloseButton.current?.setAttribute('data-visibility', 'false');
        refMenuButton.current?.setAttribute('data-visibility', 'true');
      });
    }
  }, []);

  return (
    <div className="relative mx-auto flex w-[90%] max-w-[1200px] items-center justify-between py-6 md:py-12">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Image src={circle_profile} width="50px" height="50px" layout="fixed" unoptimized></Image> Mihajlo Stojkovic
      </div>

      <MenuAlt3Icon ref={refCloseButton} data-visibility={false} className="menu-button"></MenuAlt3Icon>
      <MenuIcon ref={refMenuButton} data-visibility={true} className="menu-button"></MenuIcon>

      <div ref={refNav} data-visibility={false} className="nav-primary">
        <Link href={'/'} passHref>
          <a className="nav-button">
            <b aria-hidden="true" className="mr-4  lg:mr-4 lg:inline">
              01.
            </b>
            Home
          </a>
        </Link>
        <Link href={'/projects'} passHref>
          <a className="nav-button">
            <b aria-hidden="true" className="mr-4  lg:mr-4 lg:inline">
              02.
            </b>
            Projects
          </a>
        </Link>
        <Link href={'/blog'} passHref>
          <a className="nav-button">
            <b aria-hidden="true" className="mr-4  lg:mr-4 lg:inline">
              03.
            </b>
            Blog
          </a>
        </Link>
        <Link href={'/about'} passHref>
          <a className="nav-button">
            <b aria-hidden="true" className="mr-4  lg:mr-4 lg:inline">
              04.
            </b>
            About
          </a>
        </Link>
      </div>
    </div>
  );
}
