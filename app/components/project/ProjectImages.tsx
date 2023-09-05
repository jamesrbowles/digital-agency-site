import projectProps from '@/data/projectTypes';
import Image from 'next/image';
import React from 'react';

export default function ProjectImages({ project }: { project?: projectProps }) {
  return (
    <div className="mt-8 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full">
      {project?.moreImages.map((image, index) => (
        <div
          key={index}
          className="mx-auto"
        >
          <Image
            src={image}
            alt="project image"
            style={{ objectFit: 'cover' }}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
