import { ReactNode } from "react";

function SkillLevel({
  icon,
  level,
  skill,
}: {
  icon: ReactNode;
  level: number;
  skill: string;
}) {
  return (
    <p className="flex justify-between">
      <span className="flex inline-block items-center">
        <span className="text-green-700">{icon}</span>
        <span className="ml-2">{skill}</span>
      </span>
      <span>{level}%</span>
    </p>
  );
}

export default SkillLevel;
