'use client';

import projectProps from '@/data/projectTypes';
import { useGeneralContext } from '@/hooks/Context';

export default function PortfolioHeading({
  selectedProjects,
  searchFilter,
}: {
  selectedProjects: projectProps[];
  searchFilter: string;
}) {
  //
  const context = useGeneralContext();
  let handleCategoryChange;
  // Check if context is defined and handleCategoryChange is available
  if (context) {
    handleCategoryChange = context.handleCategoryChange;
  }
  return (
    <div className="flex justify-between items-center mt-8 mb-10">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <div className="min-w-[190px] relative">
        <select
          name="category"
          id="category"
          className="px-4 py-[11px] text-tagline bg-transparent border rounded-md cursor-pointer dark:border-gray-text"
          onChange={handleCategoryChange}
          defaultValue={searchFilter}
        >
          <option value="All Categories">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Web Design">Web Design</option>
        </select>
        <span className="bg-primary h-5 w-5 flex justify-center items-center rounded-full text-white text-sm absolute -top-2 -right-2">
          {selectedProjects?.length}
        </span>
      </div>
    </div>
  );
}
