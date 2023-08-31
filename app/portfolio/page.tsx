import BreadCrumb from '../components/global/BreadCrumb';
import PortfolioHeading from '../components/portfolio/PortfolioHeading';
import PortfolioListings from '../components/portfolio/PortfolioListings';
import PortfolioCallToAction from '../components/portfolio/PortfolioCallToAction';

export default function Portfolio() {
  return (
    <div>
      <div className="max-w-[1316px] mx-auto px-5">
        <BreadCrumb title="Portfolio" />
        <PortfolioHeading />
        <PortfolioListings />
      </div>
      <div className="bg-off-white dark:bg-opacity-5 px-5 h-[442px]">
        <PortfolioCallToAction />
      </div>
    </div>
  );
}
