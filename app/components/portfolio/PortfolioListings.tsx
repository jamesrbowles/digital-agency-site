import Image from 'next/image';

export default function PortfolioListings() {
  return (
    <div>
      <div className="flex flex-col gap-24 mb-28">
        <div className="flex gap-24 w-full h-[400px] max-[750px]:relative bg-white dark:bg-off-black drop-shadow-md rounded-lg">
          <div className="relative basis-1/2 max-[750px]:basis-full">
            <Image
              src="/assets/images/listings/listing1.jpg"
              alt="listing1"
              /*   width={600}
            height={400} */
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="h-full flex flex-col basis-1/2 max-[750px]:absolute max-[750px]:w-full max-[750px]:h-full max-[750px]:opacity-0 max-[750px]:hover:opacity-90 z-30 max-[750px]:bg-off-white max-[750px]:p-10 max-[750px]:justify-center max-[750px]:items-center max-[750px]:transition max-[750px]:duration-500 max-[750px]:rounded-lg p-2">
            <span className="text-tagline text-sm mb-1 pt-2">Oct 18, 2021</span>
            <h2 className="text-2xl font-bold max-[750px]:dark:text-black">
              SaaS Project Management Tool
            </h2>
            <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded text-sm my-4 w-fit">
              Web Development
            </span>
            <p className="text-gray-text text-sm leading-relaxed dark:text-white dark:text-opacity-60 max-[750px]:text-center max-[750px]:dark:text-black">
              Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus.
              Maecenas viverra pellentesque at ultrices purus vitae quis erat
              volutpat. Turpis auctor neque bibendum id pellentesque ut egestas.
              Donec ut faucibus nisl nec at purus.
            </p>
            <button className="text-primary py-3 px-8 border w-fit text-sm border-primary border-opacity-30 hover:bg-primary hover:bg-opacity-5 dark:border-opacity-90 dark:hover:bg-off-black rounded-lg mt-8">
              View more
            </button>
          </div>
        </div>
        {/* Second Project */}
        <div className="flex gap-24 w-full h-[400px] max-[750px]:relative bg-white dark:bg-off-black drop-shadow-md rounded-lg">
          <div className="h-full flex flex-col basis-1/2 max-[750px]:absolute max-[750px]:w-full max-[750px]:h-full max-[750px]:opacity-0 max-[750px]:hover:opacity-90 z-30 max-[750px]:bg-off-white max-[750px]:p-10 max-[750px]:justify-center max-[750px]:items-center max-[750px]:transition max-[750px]:duration-500 max-[750px]:rounded-lg p-2">
            <span className="text-tagline text-sm mb-1 pt-2">Oct 18, 2021</span>
            <h2 className="text-2xl font-bold max-[750px]:dark:text-black">
              SaaS Project Management Tool
            </h2>
            <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded text-sm my-4 w-fit">
              Web Development
            </span>
            <p className="text-gray-text text-sm leading-relaxed dark:text-white dark:text-opacity-60 max-[750px]:text-center max-[750px]:dark:text-black">
              Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus.
              Maecenas viverra pellentesque at ultrices purus vitae quis erat
              volutpat. Turpis auctor neque bibendum id pellentesque ut egestas.
              Donec ut faucibus nisl nec at purus.
            </p>
            <button className="text-primary py-3 px-8 border w-fit text-sm border-primary border-opacity-30 hover:bg-primary hover:bg-opacity-5 dark:border-opacity-90 dark:hover:bg-off-black rounded-lg mt-8">
              View more
            </button>
          </div>
          <div className="relative basis-1/2 max-[750px]:basis-full">
            <Image
              src="/assets/images/listings/listing2.jpg"
              alt="Hero Globe"
              /*   width={600}
            height={400} */
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Third Project */}
        <div className="flex gap-24 w-full h-[400px] max-[750px]:relative bg-white dark:bg-off-black drop-shadow-md rounded-lg">
          <div className="relative basis-1/2 max-[750px]:basis-full">
            <Image
              src="/assets/images/listings/listing3.jpg"
              alt="Hero Globe"
              /*   width={600}
            height={400} */
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="h-full flex flex-col basis-1/2 max-[750px]:absolute max-[750px]:w-full max-[750px]:h-full max-[750px]:opacity-0 max-[750px]:hover:opacity-90 z-30 max-[750px]:bg-off-white max-[750px]:p-10 max-[750px]:justify-center max-[750px]:items-center max-[750px]:transition max-[750px]:duration-500 max-[750px]:rounded-lg p-2">
            <span className="text-tagline text-sm mb-1 pt-2">Oct 18, 2021</span>
            <h2 className="text-2xl font-bold max-[750px]:dark:text-black">
              SaaS Project Management Tool
            </h2>
            <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded text-sm my-4 w-fit">
              Web Development
            </span>
            <p className="text-gray-text text-sm leading-relaxed dark:text-white dark:text-opacity-60 max-[750px]:text-center max-[750px]:dark:text-black">
              Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus.
              Maecenas viverra pellentesque at ultrices purus vitae quis erat
              volutpat. Turpis auctor neque bibendum id pellentesque ut egestas.
              Donec ut faucibus nisl nec at purus.
            </p>
            <button className="text-primary py-3 px-8 border w-fit text-sm border-primary border-opacity-30 hover:bg-primary hover:bg-opacity-5 dark:border-opacity-90 dark:hover:bg-off-black rounded-lg mt-8">
              View more
            </button>
          </div>
        </div>
        {/* Fourth Project */}
        <div className="flex gap-24 w-full h-[400px] max-[750px]:relative bg-white dark:bg-off-black drop-shadow-md rounded-lg">
          <div className="h-full flex flex-col basis-1/2 max-[750px]:absolute max-[750px]:w-full max-[750px]:h-full max-[750px]:opacity-0 max-[750px]:hover:opacity-90 z-30 max-[750px]:bg-off-white max-[750px]:p-10 max-[750px]:justify-center max-[750px]:items-center max-[750px]:transition max-[750px]:duration-500 max-[750px]:rounded-lg p-2">
            <span className="text-tagline text-sm mb-1 pt-2">Oct 18, 2021</span>
            <h2 className="text-2xl font-bold max-[750px]:dark:text-black">
              SaaS Project Management Tool
            </h2>
            <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded text-sm my-4 w-fit">
              Web Development
            </span>
            <p className="text-gray-text text-sm leading-relaxed dark:text-white dark:text-opacity-60 max-[750px]:text-center max-[750px]:dark:text-black">
              Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus.
              Maecenas viverra pellentesque at ultrices purus vitae quis erat
              volutpat. Turpis auctor neque bibendum id pellentesque ut egestas.
              Donec ut faucibus nisl nec at purus.
            </p>
            <button className="text-primary py-3 px-8 border w-fit text-sm border-primary border-opacity-30 hover:bg-primary hover:bg-opacity-5 dark:border-opacity-90 dark:hover:bg-off-black rounded-lg mt-8">
              View more
            </button>
          </div>
          <div className="relative basis-1/2 max-[750px]:basis-full">
            <Image
              src="/assets/images/listings/listing4.jpg"
              alt="Hero Globe"
              /*   width={600}
            height={400} */
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
