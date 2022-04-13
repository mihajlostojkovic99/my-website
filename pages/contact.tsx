import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { Button } from '../components/Button';

const Contact: NextPage = () => {
  return (
    <div className="flex h-full flex-col">
      <form className="mt-12" name="newsletter" action="/" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="newsletter" />
        <div className="mb-8 text-center text-lg font-medium">
          Subscribe to my newsletter, or else! <sup className="text-xs">(This is probably spam 🚩🚩🚩)</sup>
        </div>
        <div className="flex flex-col items-center justify-start md:flex-row md:justify-between">
          <label htmlFor="email" className="mr-0 md:mr-5">
            Give me your e-mail right here, right now:{' '}
          </label>
          <input type="text" name="email" id="email" className="w-full border-2 border-blue_grotto md:w-80" />
        </div>
        <div className="mt-3 flex flex-col items-center justify-start md:flex-row md:justify-between">
          <label htmlFor="message" className="w-full shrink-0 text-center md:w-fit md:text-left">
            Your kind message for me:
          </label>
          <textarea
            name="message"
            id="message"
            className="h-20 w-full min-w-fit shrink-0 border-2 border-blue_grotto md:w-80"
          />
        </div>
        <div>
          <Button type="submit" className="mx-auto mt-8">
            <p className="text-lg font-bold uppercase">subscribe&trade;</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
