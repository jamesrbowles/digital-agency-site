import Image from 'next/image';
import AboutHeader from '../components/about/AboutHeader';
import BreadCrumb from '../components/global/BreadCrumb';
import Attributes from '../components/home/Attributes';
import HomeTestimonials from '../components/home/HomeTestimonials';
import OurTeam from '../components/about/OurTeam';
import CallToAction from '../components/home/CallToAction';

export default function About() {
  return (
    <div>
      <div className="hero-gradient relative">
        <div className="max-w-[1316px] mx-auto px-5">
          <BreadCrumb title="About" />
        </div>
        <AboutHeader />
        <div className="absolute bottom-0 left-0 -z-10">
          <Image
            src="/assets/images/hero-fan.png"
            alt="Hero Fan"
            width={992}
            height={990}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      {/*  <div className="h-[300px] w-full max-w-[1316px] mx-auto px-5">
        blah blah 2nd component
      </div> */}
      <div className="py-8">
        <Attributes />
      </div>
      <div className="-mt-[96px]">
        <HomeTestimonials />
      </div>
      <OurTeam />
      <CallToAction />
    </div>
  );
}
