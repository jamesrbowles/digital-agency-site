const HowWeWork = () => {
  return (
    <div className="max-w-[1316px] px-5 mb-28 mx-auto mt-20">
      <h2 className="text-4xl font-bold mb-14">How We Work?</h2>
      {/*  Numbers */}
      <div className="grid grid-cols-1 xs:grid-cols-2 min-[900px]:flex min-[900px]:flex-row gap-8 ">
        <div className="flex flex-col gap-4">
          <span className="text-xl border-4 border-gradient-middle/20 dark:border-gradient-middle rounded-full w-12 h-12 flex justify-center items-center font-bold mb-3">
            1
          </span>

          <h3 className="font-bold">Identifying the problem</h3>
          <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
            Identifying the problem: We dig deep to uncover the root issues
            hindering your digital success.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xl border-4 border-gradient-middle/20 dark:border-gradient-middle rounded-full w-12 h-12 flex justify-center items-center font-bold mb-3">
            2
          </span>

          <h3 className="font-bold">Conducting a research</h3>
          <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
            Conducting research: Extensive data analysis and market research
            shape our strategy for your project.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xl border-4 border-gradient-middle/20 dark:border-gradient-middle rounded-full w-12 h-12 flex justify-center items-center font-bold mb-3">
            3
          </span>

          <h3 className="font-bold">Creating low-fidelity prototypes</h3>
          <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
            Creating low-fidelity prototypes: Visualizing concepts before
            development, ensuring efficient and effective solutions.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xl border-4 border-gradient-middle/20 dark:border-gradient-middle rounded-full w-12 h-12 flex justify-center items-center font-bold mb-3">
            4
          </span>

          <h3 className="font-bold">Building an MVP version</h3>
          <p className="text-gray-text dark:text-white/70 text-sm leading-relaxed">
            Building an MVP version: We craft a minimum viable product, a solid
            foundation for future development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
