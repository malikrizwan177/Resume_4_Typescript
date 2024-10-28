const Experience:React.FC = () => {
    return (
      <section id="experience" className="px-8 lg:px-32 py-10 md:py-20 bg-primary">
        <div className="max-w-[1440px] mx-auto">
        <p className="text-[40px] font-semibold text-center">
          My Work Experience
        </p>
        <div className="flex flex-row justify-between gap-10 lg:gap-20">
          <div className="flex flex-row md:flex-row-reverse justify-start md:justify-between items-center w-full md:w-1/2">
            <div className="flex flex-col justify-center items-center mt-16">
              <div className="p-5 outline-2 outline-dashed outline-offset-2 background-gradient rounded-full"/>
              <hr className="border-2 border-dashed rotate-90 my-12 w-24" />
              <div className="p-5 outline-2 outline-dashed outline-offset-2 bg-black rounded-full"/>
              <hr className="border-2 border-dashed rotate-90 my-12 w-24" />
              <div className="p-5 outline-2 outline-dashed outline-offset-2 background-gradient rounded-full"/>
            </div>
            <div className="flex flex-col gap-20 mt-20">
              <div>
                <p className="text-[20px] md:text-[26px] font-semibold">Poiesis Technologies</p>
                <p className="text-[12] md:text-[16px] font-medium">Oct 2022 - Oct 2023</p>
              </div>
              <div>
                <p className="text-[20px] md:text-[26px] font-semibold">BluComm Technologies</p>
                <p className="text-[12] md:text-[16px] font-medium">May 2024 - Aug 2024</p>
              </div>
              <div>
                <p className="text-[20px] md:text-[26px] font-semibold">Poiesis Technologies</p>
                <p className="text-[12] md:text-[16px] font-medium">Oct 2024 - Present</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-12 w-1/2 mt-24">
            <div>
              <p className="text-gradient text-[26px]">Frontend React Intern</p>
              <p className="text-[18px]">
                Made SPA landing pages using simple React, Custom CSS provided by the UI/UX team through figma files{" "}
              </p>
            </div>
            <div>
              <p className="text-gradient text-[26px]">MERN Stack Intern</p>
              <p className="text-[18px]">
                Made 2 MERN Stack projects using Vite+React, TailwindCSS, Custom Hooks, Context API, Node, Express, and MongoDB{" "}
              </p>
            </div>
            <div>
              <p className="text-gradient text-[26px]">React Web Developer</p>
              <p className="text-[18px]">
                Making Frontend React projects using Vite+React and TailwindCSS provided by UI/UX team though figma files{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default Experience;