'use client';

import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import { useGeneralContext } from '@/hooks/Context';
import { Caramel } from 'next/font/google';
import { useState } from 'react';

interface projectProps {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  challenge: string;
  solution: string;
  shortDescription: string;
  longDescription: string;
  moreImages: string[];
}

export default function PortfolioListings() {
  const { category } = useGeneralContext() || { category: 'All Categories' };
  const [filteredProjects, setFilteredProjects] =
    useState<projectProps[]>(projects);

  const filterProjects = () => {
    if (category !== 'All Categories') {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    } else {
      setFilteredProjects(projects);
    }
  };

  console.log(filteredProjects);

  return (
    <div>
      <div className="flex flex-col gap-24 mb-28">
        {filteredProjects.map((project: projectProps, index) => (
          <div
            key={index}
            className={`flex gap-24 w-full h-[400px] max-[750px]:relative bg-white dark:bg-off-black drop-shadow-md rounded-lg hover:drop-shadow-lg ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="relative basis-1/2 max-[750px]:basis-full">
              <Link
                href={`/project/${project.title
                  .replace(/ /g, '-')
                  .toLowerCase()}`}
              >
                <Image
                  src={`/assets/images/listings/${project.id}/main.jpg`}
                  alt="project image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </Link>
            </div>

            <div className="h-full flex flex-col basis-1/2 max-[750px]:absolute max-[750px]:w-full max-[750px]:h-full max-[750px]:opacity-0 max-[750px]:hover:opacity-90 z-30 max-[750px]:bg-off-white max-[750px]:p-10 max-[750px]:justify-center max-[750px]:items-center max-[750px]:transition max-[750px]:duration-500 max-[750px]:rounded-lg p-2">
              <span className="text-tagline text-sm mb-1 pt-2">
                {project.date}
              </span>
              <h2 className="text-2xl font-bold max-[750px]:dark:text-black">
                {project.title}
              </h2>
              <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded text-sm my-4 w-fit">
                {project.category}
              </span>
              <p className="text-gray-text text-sm leading-relaxed dark:text-white dark:text-opacity-60 max-[750px]:text-center max-[750px]:dark:text-black">
                {project.shortDescription}
              </p>
              <Link
                href={`/project/${project.title
                  .replace(/ /g, '-')
                  .toLowerCase()}`}
              >
                <button className="text-primary py-3 px-8 border w-fit text-sm border-primary border-opacity-30 hover:bg-primary hover:bg-opacity-5 dark:border-opacity-90 dark:hover:bg-off-black rounded-lg mt-8">
                  View more
                </button>
              </Link>
            </div>
          </div>
        ))}
        {/*        <div className="flex gap-24 w-full h-[400px] max-[750px]:relative bg-white dark:bg-off-black drop-shadow-md rounded-lg">
          <div className="relative basis-1/2 max-[750px]:basis-full">
            <Link href={`/project`}>
              <Image
                src="/assets/images/listings/listing1.jpg"
                alt="listing1"
      
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </Link>
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

              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex gap-24 w-full h-[400px] max-[750px]:relative bg-white dark:bg-off-black drop-shadow-md rounded-lg">
          <div className="relative basis-1/2 max-[750px]:basis-full">
            <Image
              src="/assets/images/listings/listing3.jpg"
              alt="Hero Globe"
    
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
   
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
