'use client';

import { useGeneralContext } from '@/hooks/Context';

export default function PortfolioHeading() {
  const context = useGeneralContext();
  let handleCategoryChange;
  // Check if context is defined and handleCategoryChange is available
  if (context) {
    handleCategoryChange = context.handleCategoryChange;
  }
  return (
    <div className="flex justify-between items-center mt-8 mb-10">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      {/*  <form
           onSubmit={handleSearch}
        className=""
      > */}
      <div className="min-w-[190px] ">
        <select
          name="category"
          id="category"
          /*      value={heroSearch.location}
            onChange={(e) =>
              setHeroSearch({
                ...heroSearch,
                location: e.target.value,
              })
            } */
          className="px-4 py-[11px] text-tagline bg-transparent border rounded-md cursor-pointer dark:border-gray-text"
          onChange={handleCategoryChange}
        >
          <option value="All Categories">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Web Design">Web Design</option>
        </select>
      </div>
      {/*  </form> */}
    </div>
  );
}
