import Image from 'next/image';

export default function AboutHeader() {
  return (
    <div className="max-w-[1316px] mx-auto px-5 h-[550px] flex justify-between gap-[134px] max-[889px]:gap-16">
      <div className="mb-36 max-w-[526px]">
        <h1 className="text-4xl font-bold mt-[72px] mb-6">About Company</h1>
        <p className="text-gray-text mb-10 leading-relaxed dark:text-white/70">
          We are a dedicated team of passionate product managers, full stack
          developers, UX/UI designers, QA engineers and marketing experts
          helping businesses of every size — from new startups to public
          companies — launch their projects using our software.
        </p>
      </div>

      <div className="z-10 min-w-[350px] max-[700px]:hidden">
        <Image
          src="/assets/images/about/team.png"
          alt="Hero Fan"
          width={500}
          height={770}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
