'use client';

import { BiRocket, BiTimeFive } from 'react-icons/bi';
import { FiThumbsUp } from 'react-icons/fi';
import { AiOutlineTeam } from 'react-icons/ai';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const WhatWeOffer = () => {
  const isAboveLargeScreens = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="max-w-[1316px] px-5 mb-28 mx-auto mt-14">
      <div className="flex flex-col gap-24 lg:flex-row relative">
        <div className="basis-1/2">
          <h2 className="text-4xl font-bold mb-14">What We Offer</h2>
          {/*  Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="text-primary text-2xl">
                <BiRocket />
              </div>
              <h3 className="font-bold">Innovative Solutions</h3>
              <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
                Innovative solutions driving your business forward with
                cutting-edge technology and creative thinking.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-primary text-2xl">
                <FiThumbsUp />
              </div>
              <h3 className="font-bold">Success Guarantee</h3>
              <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
                Guaranteeing your success through personalized strategies and
                results-driven solutions.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-primary text-2xl">
                <AiOutlineTeam />
              </div>
              <h3 className="font-bold">Professional Team</h3>
              <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
                A professional team committed to delivering excellence and
                exceeding your expectations.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-primary text-2xl">
                <BiTimeFive />
              </div>
              <h3 className="font-bold">On Time Service</h3>
              <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
                Experience on-time service that ensures your project stays on
                track and on schedule.
              </p>
            </div>
          </div>
        </div>
        {/* Image */}
        {isAboveLargeScreens && (
          <>
            <div className="basis-1/2 relative">
              <Image
                src="/assets/images/webdesign/computers.png"
                alt="dashboard"
                width={634}
                height={414}
                style={{ objectFit: 'cover' }}
                className="absolute top-14 -right-8 z-20"
              />
            </div>
            <Image
              src="/assets/images/webdesign/splash.png"
              alt="dashboard card"
              width={800}
              height={690}
              style={{ objectFit: 'cover' }}
              className="absolute -right-36 bottom-0 -z-20 opacity-20"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WhatWeOffer;
