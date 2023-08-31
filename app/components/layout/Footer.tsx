'use client';

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  const [email, setEmail] = useState<string>('');
  const [state, setState] = useState<string>('IDLE');

  const router = useRouter();
  const currentPathname = usePathname();

  const handleSubscribe = async () => {
    setState('LOADING');

    try {
      const response = await axios.post('/api/newsletter', { email });
      setState('SUCCESS');
      setEmail('');
      // Display a success message
      toast.success('Subscribed successfully');
    } catch (e: any) {
      console.error('Something went wrong with you subscribing:', e);
      toast.error(e.response.data);
      setState('ERROR');
      // Display an error message
    }
  };

  return (
    <>
      <div className="dark:bg-opacity-5">
        <footer className="max-w-[1316px] mx-auto px-5">
          <div className="py-[72px] flex flex-col gap-12 min-[790px]:flex-row min-[930px]:gap-44 justify-between items-center">
            <div className="max-w-[416px]">
              <div className="">
                <Image
                  src="/assets/images/hero-logo.png"
                  alt="Vanguard Logo"
                  width={122}
                  height={44}
                  className="mb-6"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="text-sm mb-10 text-gray-text font-thin dark:text-white dark:text-opacity-70">
                Proin ipsum pharetra, senectus eget scelerisque varius pretium
                platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi
                sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget
                elementum dolor ullamcorper sodales ultrices eros.{' '}
              </p>

              <div>
                <div className="flex items-center text-sm">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="subscribe">
                      Subscribe to our newsletter
                    </label>
                    <div className="relative flex items-center">
                      <HiOutlineMail className="absolute left-3 text-lg text-input-color" />
                      <input
                        id="subscribe"
                        className="pl-10 pr-12 block w-full border border-input-color disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary placeholder-input-color focus:ring-primary dark:border-gray-600 dark:text-white dark:placeholder-input-color dark:focus:border-primary dark:focus:ring-primary rounded-lg p-2.5 text-sm dark:bg-black dark:bg-opacity-5"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoCorrect="off"
                      />

                      <button
                        type="button"
                        onClick={handleSubscribe}
                        className="absolute right-0 top-0 bottom-0 bg-primary hover:bg-primary-dark rounded-r-lg px-7 text-white text-sm"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Links Column */}
            <div className="grid grid-cols-2 gap-x-[90px] gap-y-10 text-gray-nav-text min-[1110px]:grid-cols-3  dark:text-off-white">
              <div>
                <ul className=" flex flex-col gap-2">
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    About
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Services
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Blog
                  </Link>
                </ul>
              </div>
              <div>
                <ul className=" flex flex-col gap-2">
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Facebook
                  </Link>
                  <Link href="/">Linkedin</Link>
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Instagram
                  </Link>
                </ul>
              </div>

              <div>
                <ul className=" flex flex-col gap-2">
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </ul>
              </div>
              {/*         <div>
              <ul className=" flex flex-col gap-2">
                <h3>Contact Us</h3>
                <a
                  href="mailto:example@gmail.com"
                  className="text-primary underline underline-offset-2 decoration-1 hover:text-primary-dark break-all"
                >
                  example@gmail.com
                </a>
              </ul>
            </div> */}
            </div>
          </div>

          <div className="text-tagline pb-16 font-thin text-xs">
            {new Date().getFullYear()} All rights reserved. Company name
          </div>
        </footer>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
