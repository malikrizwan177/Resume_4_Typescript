import { ReactTyped } from "react-typed";

const Hero:React.FC = () => {

  const textChange:Array<string> = ["Software Engineer", "React Developer"]

  return (
    <section className=" px-8 lg:px-32 py-20 bg-primary-dark">
      <div className="flex flex-col md:flex-row-reverse gap-10 justify-between items-center max-w-[1440px] mx-auto">
      <img
      loading="lazy"
        src="./images/hero.png"
        alt="hero_image"
        className="xl:max-h-[500px] lg:max-h-[350px] md:max-h-[320px] max-h-[300px]"
      />
      <div className="flex flex-col justify-center items-start gap-3 md:gap-5 max-w-[620px]">
        <p className="text-[24px] md:text-[32px] lg:text-[36px] font-medium hero_name">
          Hello, I'm Rizwan Malik
        </p>
        <p className="text-[42px] md:text-[50px] lg:text-[64px] font-bold text-gradient">
          <ReactTyped strings={textChange} typeSpeed={70} backSpeed={80} loop/>
        </p>
        <p className="mr-0 md:mr-20">
        I'm a React Web application developer with experience in building responsive and optimized web application using
        the latest technologies and practices in a remote environment for a year and a half. I've worked on different kind
        of projects such as SPA's, landing pages, e-commerce while keeping the design as per provided by the UI/UX team.
        </p>
        <a href="#contact">
          <button className="rounded-full px-8 py-2 mt-10 background-gradient">
            Hire me
          </button>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Hero;
