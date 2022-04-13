import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { Button } from '../components/Button';

const Contact: NextPage = () => {
  return (
    <div className="flex h-full flex-col">
      <div>
        <form name="newsletter" action="/" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="newsletter" />
          <div className="text-center text-lg font-medium">
            Subscribe to my newsletter or else! <sup className="text-xs">This is probably spam</sup>
          </div>
          <div>
            <label htmlFor="email">Give me your e-mail right here, right now: </label>
            <input type="text" name="email" id="email" className="ml-3 w-60 border-2 border-blue_grotto" />
          </div>
          <Button type="submit" className="mx-auto mt-8">
            <p className="text-lg font-bold uppercase">subscribe&trade;</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
