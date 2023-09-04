import projects from '@/data/projects';

type paramsSlug = {
  slug: string;
};

export default function Project({ params }: { params: paramsSlug }) {
  const slug = params.slug;

  const project = projects.find(
    (project) => slug === project.title.replace(/ /g, '-').toLowerCase()
  );

  return <div>{project?.title}</div>;
}
