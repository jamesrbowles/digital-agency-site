import team from '@/data/team';
import Image from 'next/image';
import TeamMember from '@/data/teamTypes';

const OurTeam = () => {
  return (
    <div className="max-w-[1316px] mx-auto px-5 mb-28">
      <div className="flex flex-col justify-center pb-14">
        <h2 className="text-center text-4xl font-bold mb-3">Our Team</h2>
        <p className="text-center text-lg text-tagline">
          Fully committed to making your dreams come true
        </p>
      </div>
      <div className="flex justify-around flex-wrap">
        {team.map((person: TeamMember) => (
          <div
            key={person.id}
            className="flex flex-col mb-5"
          >
            <Image
              className="rounded-md object-cover drop-shadow-lg mb-2"
              src={person.img}
              alt="team member"
              width={200}
              height={200}
              quality={50}
            />

            <span className="font-semibold">{person.name}</span>
            <span className="font-thin text-sm">{person.type}</span>
            <a
              href={`mailto:${person.email}`}
              className="text-sm text-primary hover:!text-tagline mb-2"
            >
              {person.email}
            </a>
            <div className="flex gap-3">
              {person.socialList.map((item, i) => (
                <a
                  key={i}
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-text hover:text-primary dark:text-white/80 dark:hover:text-primary"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
