import BreadCrumb from '@/app/components/global/BreadCrumb';
import CallToAction from '@/app/components/home/CallToAction';
import PortfolioCallToAction from '@/app/components/portfolio/PortfolioCallToAction';
import ProjectDetails from '@/app/components/project/ProjectDetails';
import ProjectHeading from '@/app/components/project/ProjectHeading';
import ProjectImages from '@/app/components/project/ProjectImages';
import ProjectResults from '@/app/components/project/ProjectResults';
import projects from '@/data/projects';

type paramsSlug = {
  slug: string;
};

export default function Project({ params }: { params: paramsSlug }) {
  const slug = params.slug;

  const project = projects.find(
    (project) => slug === project.title.replace(/ /g, '-').toLowerCase()
  );

  return (
    <div>
      <div className="max-w-[1316px] mx-auto px-5">
        <BreadCrumb
          prevPage={{ title: 'Portfolio', url: '/portfolio' }}
          title={project?.title}
        />
        <ProjectHeading project={project} />
        <ProjectDetails project={project} />
        <ProjectImages project={project} />
        <ProjectResults project={project} />
      </div>

      <CallToAction />
    </div>
  );
}
