import Link from 'next/link';

export default function WebDevHeader() {
  return (
    <div className="max-w-[1316px] mx-auto px-5 flex justify-between gap-[134px] max-[889px]:gap-16">
      <div className="mb-36 flex flex-col mt-[72px] md:flex-row">
        <h1 className="text-5xl font-bold basis-1/2 leading-relaxed mr-[134px] mb-10">
          Bespoke Web Design
        </h1>
        <div className="flex flex-col basis-1/2">
          <p className="text-gray-text mb-10 leading-relaxed dark:text-white/70">
            Elevate your brand with bespoke web design. Our custom web design
            services fuse creativity and functionality to deliver captivating
            online experiences that resonate with your audience.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 w-[200px] h-[52px] bg-primary text-white rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap hover:bg-primary-dark">
              Start your project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
