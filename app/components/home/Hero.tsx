import Image from 'next/image';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className=" hero-gradient relative overflow-hidden">
      <div className="max-w-[1316px] mx-auto px-5">
        <div className="flex gap-6">
          {' '}
          <div className="pt-[204px] max-w-[636px] z-10">
            <h1 className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-7xl font-bold mt-[68px]">
              We{' '}
              <span className="bg-gradient-primary text-transparent bg-clip-text">
                Transform
              </span>{' '}
              Your Ideas into Reality
            </h1>
            <div className="flex gap-10 mt-16">
              <button className="px-8 py-3 w-[162px] h-[52px] bg-primary text-white rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap hover:bg-primary-dark">
                Work with us
              </button>
              <p className="text-gray-text dark:text-white">
                Silicon is a leading full-service digital agency based in New
                York. We make mobile apps,websites & brands, that people
                appreciate all around the world.
              </p>
            </div>
          </div>
          <div className="pt-[170px] h-[636px] max-[889px]:hidden -z-10">
            <Image
              src="/assets/images/hero-logo.png"
              alt="Hero Globe"
              width={636}
              height={636}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="min-[890px]:hidden opacity-40 dark:opacity-80 absolute -right-24 -top-24 -z-10">
            <Image
              src="/assets/images/hero-logo.png"
              alt="Hero Globe"
              width={636}
              height={636}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="mb-24">
          <Link
            href="#attributes"
            scroll={false}
            className="mt-40 flex items-center gap-4 z-20"
          >
            <button className="bg-white rounded-full p-2.5">
              <FaAngleDown className="dark:text-black" />
            </button>
            <span className="text-sm text-gray-text dark:text-white">
              Discover more
            </span>
          </Link>
        </div>
      </div>
      {/* Background images */}
      <div className="absolute bottom-0 left-0 -z-10">
        <Image
          src="/assets/images/hero-fan.png"
          alt="Hero Fan"
          width={992}
          height={990}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/*       <div className="absolute -bottom-[500px] -right-[500px]">
        <div className="relative">
          <Image
            src="/assets/images/Vector-1.png"
            alt="Hero Fan"
            width={1297}
            height={861}
            style={{ objectFit: "cover" }}
            className="absolute bottom-0 left-0"
          />
          <Image
            src="/assets/images/Vector-2.png"
            alt="Hero Fan"
            width={1201}
            height={781}
            style={{ objectFit: "cover" }}
            className="absolute -bottom-[96px] left-[96px]"
          />
          <Image
            src="/assets/images/Vector-3.png"
            alt="Hero Fan"
            width={1121}
            height={717}
            style={{ objectFit: "cover" }}
            className="absolute -bottom-[172px] left-[172px]"
          />
          <Image
            src="/assets/images/Vector-4.png"
            alt="Hero Fan"
            width={1041}
            height={660}
            style={{ objectFit: "cover" }}
            className="absolute -bottom-[239px] left-[239px]"
          />
          <Image
            src="/assets/images/Vector-5.png"
            alt="Hero Fan"
            width={977}
            height={613}
            style={{ objectFit: "cover" }}
            className="absolute -bottom-[300px] left-[300px]"
          />
        </div>
      </div> */}
    </div>
  );
}
