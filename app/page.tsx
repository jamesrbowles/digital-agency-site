import Attributes from './components/home/Attributes';
import CallToAction from './components/home/CallToAction';
import FeaturedProjects from './components/home/FeaturedProjects';
import Hero from './components/home/Hero';
import HomeTestimonials from './components/home/HomeTestimonials';
import LatestBlogs from './components/home/LatestBlogs';
import OurSkills from './components/home/OurSkills';

export default function Home() {
  return (
    <main>
      <Hero />
      <Attributes />
      <FeaturedProjects />
      <OurSkills />
      <HomeTestimonials />
      <LatestBlogs />
      <CallToAction />
    </main>
  );
}

/* Class for text gradient
className = 'bg-gradient-primary text-transparent bg-clip-text'; */
