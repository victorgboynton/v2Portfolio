"use client";
import React from "react";

export const hardSkills = [
  { id: 1, name: "HTML/CSS" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "React" },
  { id: 4, name: "Python" },
  { id: 5, name: "C#" },
  { id: 6, name: "C++" },
  { id: 7, name: "MongoDB" },
  { id: 8, name: "SQL" },
  { id: 9, name: "Technical Writing" },
];
export const softSkills = [
  { id: 1, name: "Communication" },
  { id: 2, name: "Teamwork" },
  { id: 3, name: "Problem-solving" },
  { id: 4, name: "Leadership" },
  { id: 5, name: "Adaptability" },
  { id: 6, name: "Creativity" },
  { id: 7, name: "Work Ethic" },
  { id: 8, name: "Interpersonal Skills" },
  { id: 9, name: "Time Management" },
];
type Skill = {
  id: number;
  name: string;
};
type SkillCardProps = {
  MapName: string;
  SkillsMap: Skill[];
};
export function SkillsCard({ SkillsMap, MapName }: SkillCardProps) {
  return (
    <div className="sm:w-[35vw] bg-gray-400/25 p-4 rounded-md mb-10 sm:mb-0">
      <h2 className="text-center text-2xl border-b-2">{MapName}:</h2>
      <div className="flex flex-row flex-wrap justify-center">
        {SkillsMap.map((Skill: Skill) => (
          <p
            key={Skill.id}
            className="border-2 font-robotoMono border-purple-950 p-1 m-1 bg-purple-700 rounded-[2.5em]"
          >
            {Skill.name}
          </p>
        ))}
      </div>
    </div>
  );
}
