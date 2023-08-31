import Image from 'next/image';
import { FiShare2 } from 'react-icons/fi';

export default function LatestBlogs() {
  return (
    <div className="bg-off-white dark:bg-opacity-5">
      <div className="max-w-[1316px] mx-auto px-5 pb-24 pt-24 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Latest From Our Blog
        </h1>

        {/*  Blogs */}
        <div className="grid grid-cols-5 grid-rows-2 gap-6 max-[889px]:flex flex-col mb-12">
          <div className="bg-white dark:bg-opacity-10 rounded-lg drop-shadow-md col-span-2 row-span-2 max-[889px]:flex">
            <div className="relative max-w-[496px] h-[264px] max-[889px]:w-[306px] max-[889px]:h-[240px]">
              <Image
                className="rounded-t-lg max-[889px]:rounded-l-lg max-[889px]:rounded-tr-none"
                src="/assets/images/project2.jpg"
                alt="Hero Globe"
                fill
                style={{ objectFit: 'cover' }}
              />
              <button className="bg-white p-2.5 rounded-full z-10 absolute top-3 right-3 flex justify-center items-center">
                <FiShare2 className="dark:text-black" />
              </button>
            </div>
            <div className="flex flex-col my-6 mx-6">
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded">
                  Digital
                </span>
                <span className="text-tagline font-thin">12 hours ago</span>
              </div>
              <h3 className="font-semibold dark:text-opacity-80">
                A study on smartwatch design qualities and people’s preferences
              </h3>
              <hr className="my-6 dark:opacity-70" />
              <div className="flex flex-start gap-4">
                <Image
                  className="rounded-full"
                  src="/assets/images/hero-logo.png"
                  alt="Hero Globe"
                  width={48}
                  height={48}
                  style={{ objectFit: 'cover' }}
                />

                <div className="flex flex-col text-sm gap-0.5">
                  <h5 className="font-semibold">Jerome Bell</h5>
                  <span className="text-tagline font-thin">
                    Marketing Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  Second Blog */}

          <div className="bg-white dark:bg-opacity-10  rounded-lg drop-shadow-md flex col-span-3">
            <div className="relative w-[306px] h-[240px]">
              <Image
                className="w-[306px] h-[240px] rounded-l-lg"
                src="/assets/images/project2.jpg"
                alt="Hero Globe"
                fill
                style={{ objectFit: 'cover' }}
              />
              <button className="bg-white p-2.5 rounded-full z-10 absolute top-3 right-3 flex justify-center items-center">
                <FiShare2 className="dark:text-black" />
              </button>
            </div>
            <div className="flex flex-col my-6 mx-6">
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded">
                  Digital
                </span>
                <span className="text-tagline font-thin">12 hours ago</span>
              </div>
              <h3 className="font-semibold dark:text-opacity-80">
                A study on smartwatch design qualities and people’s preferences
              </h3>
              <hr className="my-6 dark:opacity-70" />
              <div className="flex flex-start gap-4">
                <Image
                  className="rounded-full"
                  src="/assets/images/hero-logo.png"
                  alt="Hero Globe"
                  width={48}
                  height={48}
                  style={{ objectFit: 'cover' }}
                />

                <div className="flex flex-col text-sm gap-0.5">
                  <h5 className="font-semibold">Jerome Bell</h5>
                  <span className="text-tagline font-thin">
                    Marketing Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  Third Blog */}
          <div className="bg-white dark:bg-opacity-10 rounded-lg drop-shadow-md flex col-span-3">
            <div className="relative w-[306px] h-[240px]">
              <Image
                className="w-[306px] h-[240px] rounded-l-lg"
                src="/assets/images/project2.jpg"
                alt="Hero Globe"
                fill
                style={{ objectFit: 'cover' }}
              />
              <button className="bg-white p-2.5 rounded-full z-10 absolute top-3 right-3 flex justify-center items-center">
                <FiShare2 className="dark:text-black" />
              </button>
            </div>
            <div className="flex flex-col my-6 mx-6">
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded">
                  Digital
                </span>
                <span className="text-tagline font-thin">12 hours ago</span>
              </div>
              <h3 className="font-semibold dark:text-opacity-80">
                A study on smartwatch design qualities and people’s preferences
              </h3>
              <hr className="my-6 dark:opacity-70" />
              <div className="flex flex-start gap-4">
                <Image
                  className="rounded-full"
                  src="/assets/images/hero-logo.png"
                  alt="Hero Globe"
                  width={48}
                  height={48}
                  style={{ objectFit: 'cover' }}
                />

                <div className="flex flex-col text-sm gap-0.5">
                  <h5 className="font-semibold">Jerome Bell</h5>
                  <span className="text-tagline font-thin">
                    Marketing Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* End of Blogs */}
        </div>
        <button className="text-primary py-3 px-8 border border-primary border-opacity-30 hover:bg-primary hover:bg-opacity-5 dark:border-opacity-90 dark:hover:bg-off-black rounded-lg ">
          More blog posts
        </button>
      </div>
    </div>
  );
}
