import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"

const Portfolio:React.FC = () => {
  const [slide, setSlide] = useState<number>(0);
  const projects:Array<{image:string, link:string, description:string, gitLink:string}> = [
    {
      image: "./images/e-commerce-app-1.png",
      link: "https://e-commerce-app-1-frontend.vercel.app/",
      description:
        "A MERN stack e-commerce project with a working admin panel and backend",
        gitLink: "https://github.com/malikrizwan177/E-Commerce-App-1",
    },
    {
      image: "./images/event-app.png",
      link: "https://event-booking-app-omega.vercel.app/",
      description:
        "A frontend typescript project integrated with a firebase backend",
        gitLink: "https://github.com/malikrizwan177/Event-app",
    },
    {
      image: "./images/resume_4.png",
      link: "https://resume-4-swart.vercel.app/",
      description:
        "The same resume made with Vite+React, TailwindCSS and Javascript instead of Typescript",
        gitLink: "https://github.com/malikrizwan177/Resume_4",
    },  
    {
      image: "./images/resume_3.png",
      link: "https://resume-3-six.vercel.app/",
      description:
        "A Resume made with Vite+React and TailwindCSS along with code optimizations such as lazy loading",
        gitLink: "https://github.com/malikrizwan177/Resume_3",
    },
    {
      image: "./images/harryphoto.png",
      link: "https://harry-photo-frontend.vercel.app/",
      description:
        "A client project made with MERN stack during my second internship using TailwindCSS",
        gitLink: "https://github.com/malikrizwan177/Harry_Photo",
    },
    {
      image: "./images/bluecomm.png",
      link: "https://blucomtechnologies.com/",
      description:
        "An official MERN stack website of the company where i did my second internship using TailwindCSS",
        gitLink: "blucomm",
    },
    {
      image: "./images/resume_antDesign.png",
      link: "https://resume-lovat-eta.vercel.app/",
      description:
        "My first ever Resume made with React, Custom CSS, AntDesign, and custom design of the website",
        gitLink: "https://github.com/malikrizwan177/Resume",
    },
    {
      image: "./images/brainwave.png",
      link: "https://brainwave-theta-ten.vercel.app/",
      description: "An AI Themed Frontend website made from a Youtube tutorial with React and Tailwind CSS",
      gitLink: "https://github.com/malikrizwan177/Brainwave",
    },
    {
      image: "./images/resume_2.png",
      link: "https://resume-2-two.vercel.app/",
      description: "A resume made from a Youtube tutorial using React, Threejs, Framer Motion, and Tailwind CSS",
      gitLink: "https://github.com/malikrizwan177/Resume2",
    },
  ];

  const nextSlide = ():any => setSlide(slide === projects.length - 1 ? 0 : slide + 1);

  const prevSlide = ():any => setSlide(slide === 0 ? projects.length - 1 : slide - 1);

  return (
    <section id="projects" className="px-8 lg:px-32 py-10 md:py-20 bg-primary-dark">
      <div className="max-w-[1440px] mx-auto">
      <p className="text-[20px] text-gradient font-medium text-center">Works & Portfolio</p>
      <p className="text-[40px] font-semibold text-center">My Projects</p>
      <ScrollAnimation animateIn="fadeIn">
      <div className="flex flex-row flex-wrap justify-center items-center mt-10 md:mt-16">
        <div className="relative ">
          {projects.map((items, index) => (
            <>
              <a
              target="_blank"
                key={index}
                href={items.link}
                className="flex flex-col justify-center items-center"
              >
                <img
                  loading="lazy"
                  src={items.image}
                  alt={items.image}
                  className={`${
                    slide === index ? "flex" : "hidden"
                  } w-[580px] h-[396px] hover:border-4 rounded-xl hover:border-secondary ease-in-out duration-300 object-contain`}
                />
              </a>
              <div className="flex flex-col justify-center items-center">
              <p
                className={`text-center text-[20px] mt-10 max-w-[580px] ${
                  slide === index ? "flex" : "hidden"
                }`}
              >
                {items.description}
              </p>
              <div>
                <a href={items.gitLink} className={`${items.gitLink === "blucomm" ? "text-red-500 pointer-events-none" : "text-white"} flex-row justify-center items-center gap-2 rounded-full px-8 py-2 mb-10 mt-5 background-gradient ${
                    slide === index ? "flex" : "hidden"
                  }`}>
                  {items.gitLink === "blucomm" ? "Code unavailable" : "Source Code"}
                  <img
                    loading="lazy"
                    src="./icons/github.png"
                    alt="github"
                    className="w-5 h-5 bg-white rounded-xl p-[0.1rem]"
                  />
                </a>
              </div>
              </div>
              <img
                loading="lazy"
                id="arrow_left"
                onClick={prevSlide}
                src="./icons/arrow-left.png"
                alt="arrow-left"
                className={`${
                  slide === index ? "flex" : "hidden"
                } absolute -left-6 md:-left-16 bottom-[65%] w-[50px] h-[50px] p-5 background-gradient outline outline-4 outline-white hover:outline-secondary cursor-pointer rounded-full ease-out duration-300 object-cover -mb-7`}
              />
              <img
                loading="lazy"
                id="arrow_right"
                onClick={nextSlide}
                src="./icons/arrow-right.png"
                alt="arrow-right"
                className={`${
                  slide === index ? "flex" : "hidden"
                } absolute -right-6 md:-right-16 bottom-[65%] w-[50px] h-[50px] p-5 background-gradient outline outline-4 outline-white hover:outline-secondary cursor-pointer rounded-full ease-in-out duration-300 object-cover -mb-7`}
              />
            </>
          ))}
        </div>
      </div>
      </ScrollAnimation>
      </div>
    </section>
  );
};

export default Portfolio;