import { ReactNode } from "react";
import SkillLevel from "./SkillLevel";

function Skill({
  icon,
  level,
  skill,
}: {
  icon: ReactNode;
  level: number;
  skill: string;
}) {
  return (
    <div>
      <SkillLevel icon={icon} level={level} skill={skill} />
      <progress className="w-full" max={100} value={level}>
        85
      </progress>
    </div>
  );
}

export default Skill;
