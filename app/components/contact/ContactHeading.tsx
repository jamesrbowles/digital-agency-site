import { HiOutlineMail } from 'react-icons/hi';
import { BsArrowRightShort, BsPeople } from 'react-icons/bs';
import ContactForm from './ContactForm';

export default function ContactHeading() {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-8 mb-[72px]">Contact Us</h1>
      <div className="flex justify-around gap-[134px] max-[1220px]:gap-16 pb-[127px] max-[880px]:flex-col">
        <div className="flex flex-col">
          <div className="flex gap-6 mb-8">
            <div className="bg-white max-h-[60px] max-w-[60px] w-full flex justify-center items-center rounded-full dark:bg-black">
              <HiOutlineMail className="text-3xl text-primary" />
            </div>
            <div className="flex flex-col max-w-[390px]">
              <h2 className=" font-bold text-2xl mb-2">Email us</h2>
              <p className=" text-gray-text leading-relaxed mb-4 font-light dark:text-white/70">
                Please feel free to drop us a line. We will respond as soon as
                possible.
              </p>
              <div className="flex gap-2 items-center">
                <span className="text-primary font-semibold">
                  Leave a message
                </span>
                <BsArrowRightShort className="text-primary text-2xl" />
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="bg-white max-h-[60px] max-w-[60px] w-full flex justify-center items-center rounded-full dark:bg-black">
              <BsPeople className="text-3xl text-primary" />
            </div>
            <div className="flex flex-col max-w-[390px]">
              <h2 className=" font-bold text-2xl mb-2">Careers</h2>
              <p className=" text-gray-text leading-relaxed mb-4 font-light dark:text-white/70">
                Sit ac ipsum leo lorem magna nunc mattis maecenas non
                vestibulum.
              </p>
              <div className="flex gap-2 items-center">
                <span className="text-primary font-semibold">
                  Send an application
                </span>
                <BsArrowRightShort className="text-primary text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-[132px] max-[880px]:mx-auto max-[880px]:mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
