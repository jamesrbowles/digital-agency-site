import projectProps from '@/data/projectTypes';
import React from 'react';

export default function ProjectResults({
  project,
}: {
  project?: projectProps;
}) {
  return (
    <div className="my-16">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0">
        <h2 className="text-2xl font-bold mr-52">Results</h2>
        <p className="text-gray-text leading-relaxed dark:text-white/70">
          {project?.results}
        </p>
      </div>
      <div className="flex flex-col items-center min-[500px]:flex-row gap-10 justify-around my-10">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-bold">+{project?.hits}</span>
          <span className="text-sm text-gray-text dark:text-white/70">
            <strong>Requests</strong> per Week
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-bold">+{project?.newClients}</span>
          <span className="text-sm text-gray-text dark:text-white/70">
            <strong>New Clients</strong> per Month
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-bold">+{project?.session}s</span>
          <span className="text-sm text-gray-text dark:text-white/70">
            <strong>Average</strong> Session Duration
          </span>
        </div>
      </div>
    </div>
  );
}
