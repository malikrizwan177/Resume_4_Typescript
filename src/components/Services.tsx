import { memo, useMemo } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

interface Service {
  img: string;
  img_white: string;
  heading: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = useMemo(
    () => [
      {
        img: "./icons/Graphic_Design.png",
        img_white: "./icons/Graphic_Design_White.png",
        heading: "Web Development",
        description: "I can make any website using React and TailwindCSS",
      },
      {
        img: "./icons/Graphic_Design.png",
        img_white: "./icons/Graphic_Design_White.png",
        heading: "Website Customization",
        description:
          "I can customize the contents of any website if it uses React",
      },
      {
        img: "./icons/Graphic_Design.png",
        img_white: "./icons/Graphic_Design_White.png",
        heading: "Maintenance & Deployment",
        description:
          "I can maintain and deploy React or Next project on Vercel",
      },
      {
        img: "./icons/Graphic_Design.png",
        img_white: "./icons/Graphic_Design_White.png",
        heading: "UI/UX Designing",
        description: "I can do a bit of UI/UX designing of a website on figma",
      },
    ],
    []
  );

  return (
    <section id="services" className="px-8 lg:px-32 py-10 md:py-20 bg-primary">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[20px] text-gradient font-medium">
          Services I Provide
        </p>
        <p className="text-[40px] font-semibold">My Services</p>
        <ScrollAnimation animateIn="fadeIn">
          <div className="flex flex-row justify-center flex-wrap gap-5 mt-10 text-center">
            {services.map((item) => (
              <div
                key={item.heading}
                className="flex flex-col items-center gap-10 rounded-lg border-secondary hover:border-none border-[1px] px-5 py-10 max-w-[280px] cursor-pointer ease-in-out duration-500 services_hover"
              >
                <img
                  src={item.img}
                  alt={`${item.heading}-icon`}
                  loading="lazy"
                  className="w-[64px] h-[64px] mt-5 services_image"
                />
                <img
                  src={item.img_white}
                  alt={`${item.heading}-icon-white`}
                  loading="lazy"
                  className="w-[64px] h-[64px] mt-5 invisible opacity-0 hidden services_image_white"
                />
                <p className="font-semibold">{item.heading}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default memo(Services);
