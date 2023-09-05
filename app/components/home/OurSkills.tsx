'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface AccordionProps {
  children: React.ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  return <div className="max-w-[856px] w-full mx-auto">{children}</div>;
};

const AccordionPanel = ({ children }: AccordionProps) => {
  return (
    <div className="bg-white dark:bg-opacity-10 px-4 py-6 mb-4 rounded-lg">
      {children}
    </div>
  );
};

interface AccordionTitleProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const AccordionTitle: React.FC<AccordionTitleProps> = ({
  children,
  onClick,
  isActive,
}) => {
  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={onClick}
    >
      <h1 className="text-lg font-semibold">{children}</h1>
      <button
        className={`${
          isActive
            ? 'bg-primary drop-shadow-md'
            : 'bg-off-white dark:bg-white dark:bg-opacity-5'
        }  rounded-full p-2.5`}
      >
        {isActive ? (
          <FaAngleUp className="text-white" />
        ) : (
          <FaAngleDown className="dark:text-white" />
        )}
      </button>
    </div>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  isActive: boolean;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isActive,
}) => {
  return (
    <div
      className={`${
        isActive ? 'block' : 'hidden'
      } text-gray-text dark:text-white dark:text-opacity-70 flex gap-10 m-6 items-center justify-center transition duration-700 ease-in-out`}
    >
      <Image
        src="/assets/images/hero-logo.png"
        alt="Hero Fan"
        width={200}
        height={200}
        style={{ objectFit: 'cover' }}
      />

      {children}
    </div>
  );
};

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isDefaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isDefaultOpen,
}) => {
  const [isActive, setIsActive] = useState(isDefaultOpen || false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <AccordionPanel>
      <AccordionTitle
        onClick={toggleAccordion}
        isActive={isActive}
      >
        {title}
      </AccordionTitle>
      {isActive && (
        <AccordionContent isActive={isActive}>{content}</AccordionContent>
      )}
    </AccordionPanel>
  );
};

const OurSkills = () => {
  return (
    <div className="bg-off-white dark:bg-opacity-5">
      <div className="max-w-[1316px] mx-auto px-5 flex flex-col justify-center items-center pb-24">
        <div className="text-center max-w-[636px] mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-6 mt-[72px]">Our Skills</h1>
          <p className="text-tagline">
            We fully understand your business. If you need to update something,
            we are more than happy to help you with the services we are
            providing.
          </p>
        </div>

        <Accordion>
          <AccordionItem
            title="Web Development"
            content={
              <p className="mb-2 text-secondary">
                In the realm of web development, we excel in building powerful,
                dynamic websites and web applications. Our team of skilled
                developers harnesses the latest technologies to create fast,
                secure, and scalable digital solutions. From custom web
                platforms to e-commerce sites, we turn your ideas into
                functional, user-friendly realities that stand out in the
                digital landscape.
              </p>
            }
            isDefaultOpen={true}
          />
          <AccordionItem
            title="Web Design"
            content={
              <p className="mb-2 text-secondary">
                Our web design expertise lies in crafting visually stunning,
                user-centric digital experiences. We believe that great design
                goes beyond aesthetics; it&apos;s about enhancing usability and
                engagement. Our talented designers create responsive, intuitive
                interfaces that leave a lasting impression. Whether it&apos;s a
                website, app, or branding, we ensure your online presence
                captivates and converts.
              </p>
            }
          />

          <AccordionItem
            title="Strategy"
            content={
              <p className="mb-2 text-secondary">
                Strategy is at the core of our digital agency. We don&apos;t
                just build; we plan meticulously. Our strategists dive deep into
                understanding your goals, audience, and competition. With
                data-driven insights and innovative thinking, we map out a
                roadmap for your success. From SEO and content strategies to
                marketing campaigns, we execute strategies that drive growth.
              </p>
            }
          />
        </Accordion>
      </div>
    </div>
  );
};

export default OurSkills;
