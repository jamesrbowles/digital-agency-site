'use client';

import React from 'react';
import { RiLightbulbFlashLine, RiTeamLine, RiAwardLine } from 'react-icons/ri';

export default function Attributes() {
  return (
    <div
      id="attributes"
      className="max-w-[1316px] mx-auto px-5 flex justify-between items-center max-[889px]:gap-36 mt-28 mb-32 max-[889px]:flex-col"
    >
      <div className="flex flex-col justify-center items-center first">
        <svg
          width="0"
          height="0"
        >
          <linearGradient
            id="gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop
              stopColor="#6366F1"
              offset="0%"
            />
            <stop
              stopColor="#8b5cf6"
              offset="50%"
            />
            <stop
              stopColor="#d946ef"
              offset="100%"
            />
          </linearGradient>
        </svg>
        <RiLightbulbFlashLine
          className="mb-6 w-12 h-12 "
          style={{ fill: 'url(#gradient)' }}
        />

        <h2 className="font-semibold mb-3 text-xl text-center">
          Creative Solutions
        </h2>
        <p className="text-gray-text dark:text-white text-sm text-center">
          Where innovation meets design, crafting unique digital experiences for
          your brand.
        </p>
      </div>
      <div className="w-[1px] h-[170px] bg-tagline bg-opacity-30 mx-[72px] max-[889px]:hidden"></div>
      <div className="flex flex-col justify-center items-center second">
        <RiAwardLine
          className="mb-6 w-12 h-12"
          style={{ fill: 'url(#gradient)' }}
        />
        <h2 className="font-semibold mb-3 text-xl text-center">
          Award Winning
        </h2>
        <p className="text-gray-text dark:text-white text-sm text-center">
          Recognized excellence - we bring award-winning creativity to your
          digital projects.
        </p>
      </div>
      <div className="w-[1px] h-[170px] bg-tagline bg-opacity-30 mx-[72px] max-[889px]:hidden"></div>
      <div className="flex flex-col justify-center items-center third">
        <RiTeamLine
          className="mb-6 w-12 h-12 text-primary"
          style={{ fill: 'url(#gradient)' }}
        />
        <h2 className="font-semibold mb-3 text-xl text-center">
          Team of Professionals
        </h2>
        <p className="text-gray-text dark:text-white text-sm text-center">
          An expert team dedicated to driving your digital success forward.
        </p>
      </div>
    </div>
  );
}
