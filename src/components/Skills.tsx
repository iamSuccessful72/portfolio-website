import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Skill from "./Skill";
function Skills() {
  return (
    <section className="lg:px-20 p-4" id="skill">
      <h2 className="font-bold text-green-700 text-xl">SKILLS</h2>
      <div className="gap-4 grid grid-cols-2">
        <Skill icon={<SiHtml5 />} level={90} skill="HTML5" />
        <Skill icon={<SiCss3 />} level={85} skill="CSS3" />
        <Skill icon={<SiJavascript />} level={80} skill="Javascript" />
        <Skill icon={<SiTailwindcss />} level={85} skill="Tailwind" />
        <Skill icon={<SiTypescript />} level={70} skill="Typescript" />
        <Skill icon={<SiGithub />} level={60} skill="Git and GitHub" />
        <Skill icon={<SiReact />} level={80} skill="React" />
        <Skill icon={<SiReactrouter />} level={80} skill="React Router" />
        <Skill icon={<SiPython />} level={60} skill="Python" />
      </div>
    </section>
  );
}

export default Skills;
