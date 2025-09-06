import { memo, useMemo, useCallback } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

interface Skill {
  name: string;
  percentage: number;
}

const SkillRow: React.FC<Skill> = memo(({ name, percentage }) => {
  const width = `${percentage}%`;

  return (
    <div>
      <div className="flex flex-row justify-between mb-3">
        <p>{name}</p>
        <p className="text-[16px] font-light">{percentage}%</p>
      </div>
      <div className="mb-7 h-1 rounded-full bg-white">
        <div className="h-1 background-gradient" style={{ width }} />
      </div>
    </div>
  );
});

const Skills: React.FC = () => {
  const skills = useMemo<Skill[]>(
    () => [
      { name: "HTML / CSS / JavaScript / React", percentage: 75 },
      { name: "Typescript", percentage: 50 },
      { name: "Tailwind CSS", percentage: 80 },
      { name: "Github", percentage: 50 },
      { name: "Nodejs", percentage: 35 },
    ],
    []
  );

  // memoized renderer to avoid re-creating the JSX factory on each render
  const renderSkill = useCallback(
    (skill: Skill) => <SkillRow key={skill.name} {...skill} />,
    []
  );

  return (
    <section className="px-8 lg:px-32 py-10 md:py-20 bg-primary-dark">
      {/* duration & animateOnce help make the fadeIn feel smooth instead of instant */}
      <ScrollAnimation animateIn="fadeIn" duration={0.8}>
        <div className="flex flex-col md:flex-row gap-10 justify-between items-start max-w-[1440px] mx-auto">
          <div className="flex flex-col justify-center items-start gap-5 max-w-[580px]">
            <p className="text-[20px] text-gradient font-medium">
              See All My Skills
            </p>
            <p className="text-[40px] font-semibold">My Working Skills</p>
            <p className="mr-0 md:mr-20">
              My working skills are mainly related to web development that I've
              practiced over the course of almost 2 years in React. During my
              practice with web development, I also got to know some UI/UX
              designing on Figma. Some other skills include working with MERN
              Stack, Vue.js, maintenance and deployment of a website using
              Github and Vercel.
            </p>
          </div>

          <div className="text-[20px] w-full md:min-w-[350px] md:max-w-[1000px]">
            {skills.map(renderSkill)}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default memo(Skills);
