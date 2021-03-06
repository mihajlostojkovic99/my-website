// import 'antd/dist/antd.css';
import '../styles/globals.scss';
import '../styles/navbar.scss';
import '../styles/blog.scss';
import '../styles/post.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
