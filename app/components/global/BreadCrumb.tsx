import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const BreadCrumb = ({ title = '' }: { title: string }) => {
  return (
    <>
      <ol className="flex justify-start items-center pt-[116px]">
        <li className="text-secondary">
          <div className="flex items-center gap-1 text-tagline">
            <FiHome />
            <Link href="/">Home</Link>
          </div>
        </li>
        <MdKeyboardDoubleArrowRight className="mx-3.5 text-tagline" />
        <li
          className="text-primary"
          aria-current="page"
        >
          {title}
        </li>
      </ol>
    </>
  );
};

export default BreadCrumb;
