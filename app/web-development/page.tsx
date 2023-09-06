import BreadCrumb from '../components/global/BreadCrumb';
import CallToAction from '../components/home/CallToAction';
import WebDevHeader from '../components/web-development/WebDevHeader';
import WhatWeOffer from '../components/web-development/WhatWeOffer';
import HowWeWork from '../components/web-development/HowWeWork';

export const metadata = {
  title: 'Web Development | Pexel Digital Agency',
  description:
    'Pexel is a leading full-service digital agency based in London. We make mobile apps, websites & brands, that people appreciate all around the world.',
};

export default function WebDev() {
  return (
    <div>
      <div className="hero-gradient relative">
        <div className="max-w-[1316px] mx-auto px-5">
          <BreadCrumb title="Web Development" />
        </div>
        <WebDevHeader />
      </div>
      {/*  <div className="h-[300px] w-full max-w-[1316px] mx-auto px-5">
        blah blah 2nd component
      </div> */}
      <div className="py-8">
        <WhatWeOffer />
      </div>
      <div className="w-full h-10">
        <svg
          viewBox="0 -20 700 110"
          width="100%"
          height="30"
          preserveAspectRatio="none"
        >
          <path
            transform="translate(0, -20)"
            d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
            fill="#6366F1"
          />
        </svg>
      </div>
      <div>
        <HowWeWork />
      </div>
      <CallToAction />
    </div>
  );
}
