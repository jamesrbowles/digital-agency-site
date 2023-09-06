import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FeaturedProjects() {
  return (
    <div className="max-w-[1316px] mx-auto px-5 flex flex-col justify-center items-center">
      <div className="text-center max-w-[636px] mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-6">Featured Projects</h1>
        <p className="text-tagline">
          We create websites and mobile apps, marketing materials, branding, web
          design, UX/UI design and illustrations.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center">
        <Image
          className="row-span-2 rounded-lg"
          src="/assets/images/project1.jpg"
          alt="Hero Globe"
          width={416}
          height={856}
          style={{ objectFit: 'cover' }}
        />
        <Image
          className="rounded-lg"
          src="/assets/images/project2.jpg"
          alt="Hero Globe"
          width={416}
          height={416}
          style={{ objectFit: 'cover' }}
        />
        <Image
          className="rounded-lg"
          src="/assets/images/project3.jpg"
          alt="Hero Globe"
          width={416}
          height={416}
          style={{ objectFit: 'cover' }}
        />
        <Image
          className="col-span-2 rounded-lg"
          src="/assets/images/project4.jpg"
          alt="Hero Globe"
          width={856}
          height={416}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Link href="/portfolio">
        <button className="mt-14 mb-24 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded">
          Explore all
        </button>
      </Link>
    </div>
  );
}
