import Link from 'next/link';

export default function CallToAction() {
  return (
    <div className="max-w-[1316px] rounded-lg rounded-t-none mx-auto px-5 flex flex-col justify-center items-center h-[406px] bg-gradient-primary">
      <h1 className="mb-4 text-white opacity-70 drop-shadow-lg text-xl tracking-wide">
        Want to work with us? Let&apos;s talk
      </h1>
      <a
        href="mailto:careers@pexeldigitals"
        className="text-white text-4xl font-bold drop-shadow-lg tracking-wide underline underline-offset-2 decoration-1"
      >
        careers@pexeldigitals
      </a>
      <Link href="/contact">
        <button className="bg-white hover:bg-off-white px-8 py-3 mt-12 rounded drop-shadow-lg dark:text-black">
          Contact us
        </button>
      </Link>
    </div>
  );
}
