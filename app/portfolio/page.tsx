import BreadCrumb from '../components/global/BreadCrumb';
import PortfolioHeading from '../components/portfolio/PortfolioHeading';
import PortfolioListings from '../components/portfolio/PortfolioListings';
import PortfolioCallToAction from '../components/portfolio/PortfolioCallToAction';
import projects from '@/data/projects';

export const metadata = {
  title: 'Portfolio | Pexel Digital Agency',
  description:
    'Pexel is a leading full-service digital agency based in London. We make mobile apps, websites & brands, that people appreciate all around the world.',
};

type searchProps = {
  filter: string;
};

export default async function Portfolio({
  searchParams,
}: {
  searchParams: searchProps;
}) {
  let searchFilter = searchParams.filter || '';

  let selectedProjects = [];
  if (searchFilter !== 'All Categories' && searchFilter !== '') {
    selectedProjects = projects.filter(
      (project) => project.category === searchParams.filter
    );
  } else {
    selectedProjects = projects;
  }

  return (
    <div>
      <div className="max-w-[1316px] mx-auto px-5">
        <BreadCrumb title="Portfolio" />
        <PortfolioHeading
          selectedProjects={selectedProjects}
          searchFilter={searchFilter}
        />
        <PortfolioListings selectedProjects={selectedProjects} />
      </div>
      <div className="bg-off-white dark:bg-opacity-5 px-5 h-[442px]">
        <PortfolioCallToAction />
      </div>
    </div>
  );
}
