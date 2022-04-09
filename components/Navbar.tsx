import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="mx-auto flex h-[10vh] w-fit items-center">
      <div className="mx-auto flex w-fit gap-5 md:gap-11">
        <Link href={'/about'} passHref>
          <div className="navButton">
            <a className="hover:underline">About</a>
          </div>
        </Link>
        <Link href={'/projects'} passHref>
          <div className="navButton">
            <a className="hover:underline">Projects</a>
          </div>
        </Link>
        <Link href={'/blog'} passHref>
          <div className="navButton">
            <a className="hover:underline">Blog</a>
          </div>
        </Link>
        <Link href={'/contact'} passHref>
          <div className="navButton">
            <a className="hover:underline">Contact</a>
          </div>
        </Link>
      </div>
    </div>
  );
}
