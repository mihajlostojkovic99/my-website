import styles from './navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex h-24 w-full items-center">
      <div className="mx-auto flex w-fit max-w-5xl gap-11">
        <Link href={'about'} passHref>
          <div className={styles.navButton}>
            <a className="hover:underline">About</a>
          </div>
        </Link>
        <Link href={'projects'} passHref>
          <div className={styles.navButton}>
            <a className="hover:underline">Projects</a>
          </div>
        </Link>
        <Link href={'blog'} passHref>
          <div className={styles.navButton}>
            <a className="hover:underline">Blog</a>
          </div>
        </Link>
        <Link href={'contact'} passHref>
          <div className={styles.navButton}>
            <a className="hover:underline">Contact</a>
          </div>
        </Link>
      </div>
    </div>
  );
}
