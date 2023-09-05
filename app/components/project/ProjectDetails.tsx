import projectProps from '@/data/projectTypes';
import { AiOutlineQuestionCircle, AiOutlineBulb } from 'react-icons/ai';

export default function ProjectDetails({
  project,
}: {
  project?: projectProps;
}) {
  return (
    <div className="mt-8 mb-10 flex lg:gap-32 gap-16 flex-col-reverse lg:flex-row">
      <div className="flex flex-col gap-3 lg:basis-3/4">
        <h2 className="text-2xl font-bold">About</h2>
        {/*   <p className="text-gray-text leading-relaxed">
          {project.longDescription}
        </p> */}
        <div
          className="text-gray-text leading-relaxed mb-16 dark:text-white/70"
          dangerouslySetInnerHTML={{ __html: project?.longDescription || '' }}
        />
      </div>
      <div className="flex lg:basis-1/4">
        <div className="h-full w-[1px] bg-gray-text/20 mr-10 hidden lg:inline"></div>

        <div className="flex lg:flex-col gap-10 lg:w-[300px]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <AiOutlineQuestionCircle className="text-primary" />
              <h3 className="font-bold">Challenge</h3>
            </div>
            <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
              {project?.challenge}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <AiOutlineBulb className="text-primary" />
              <h3 className="font-bold">Solution</h3>
            </div>
            <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
              {project?.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
