import BreadCrumb from '@/app/components/global/BreadCrumb';
import CallToAction from '@/app/components/home/CallToAction';
import PortfolioCallToAction from '@/app/components/portfolio/PortfolioCallToAction';
import ProjectDetails from '@/app/components/project/ProjectDetails';
import ProjectHeading from '@/app/components/project/ProjectHeading';
import ProjectImages from '@/app/components/project/ProjectImages';
import ProjectResults from '@/app/components/project/ProjectResults';
import projects from '@/data/projects';

const findProjectBySlug = (slug: string) => {
  return projects.find(
    (project) => slug === project.title.replace(/ /g, '-').toLowerCase()
  );
};

export async function generateMetadata({ params }: { params: paramsSlug }) {
  const slug = params.slug;

  const project = findProjectBySlug(slug);

  return {
    title: `${project?.title} | Pexel Digital Agency`,
    description:
      'Pexel is a leading full-service digital agency based in London. We make mobile apps, websites & brands, that people appreciate all around the world.',
  };
}

type paramsSlug = {
  slug: string;
};

export default function Project({ params }: { params: paramsSlug }) {
  const slug = params.slug;

  const project = findProjectBySlug(slug);

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
