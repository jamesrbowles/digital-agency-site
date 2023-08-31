import Image from 'next/image';
import React from 'react';

export default function PortfolioCallToAction() {
  return (
    <div className="relative">
      <div className="flex flex-col max-w-[416px] py-24 ml-28 max-[660px]:ml-0">
        <h5 className="text-lg text-gray-text  dark:text-tagline">
          Ready to get started?
        </h5>
        <h1 className="text-4xl font-bold mt-4 mb-10">
          Take Your <span className="text-primary">Business</span> to the Next
          Level
        </h1>
        <button className="px-8 py-3 w-[162px] h-[52px] bg-primary text-white rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap hover:bg-primary-dark">
          Work with us
        </button>
      </div>
      <div className="absolute -bottom-[34px] -right-[20px]">
        <div className="h-[442px] w-[660px] max-[1030px]:hidden">
          <Image
            src="/assets/images/listings/cta.png"
            alt="Hero Globe"
            /*  width={442}
          height={442} */
            fill
            style={{ objectFit: 'cover' }}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
