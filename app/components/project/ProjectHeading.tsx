import projectProps from '@/data/projectTypes';
import Image from 'next/image';
import React from 'react';

export default function ProjectHeading({
  project,
}: {
  project?: projectProps;
}) {
  return (
    <div className="flex flex-col gap-3 mt-8 mb-10">
      <h1 className="text-4xl font-bold">{project?.title}</h1>
      <span className="text-primary px-2 py-0.5 bg-primary bg-opacity-10 rounded text-sm my-4 w-fit">
        {project?.category}
      </span>
      {project && (
        <div className="relative w-full h-[500px]">
          <Image
            src={project?.image}
            alt="project image"
            style={{ objectFit: 'cover' }}
            fill
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
