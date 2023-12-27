import React from "react";
import { Navbar } from "./Navbar";
import me from "/public/picOfMe.jpg";
import Image from "next/image";
const b = `pb-5 pt-10`;
const hardSkills = [
  { id: 1, name: "HTML/CSS" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "React" },
  { id: 4, name: "Python" },
  { id: 5, name: "C#" },
  { id: 6, name: "C++" },
  { id: 7, name: "MongoDB" },
  { id: 8, name: "SQL" },
];
const softSkills = [
  { id: 1, name: "Communication" },
  { id: 2, name: "Teamwork" },
  { id: 3, name: "Problem-solving" },
  { id: 4, name: "Leadership" },
  { id: 5, name: "Adaptability" },
  { id: 6, name: "Creativity" },
  { id: 7, name: "Work Ethic" },
  { id: 8, name: "Interpersonal Skills" },
  { id: 9, name: "Time Management" },
  { id: 10, name: "EQ" },
];
type skill = {
  id: number;
  name: string;
};
export default function Home() {
  return (
    <main className="flex flex-col font-robotoSlab">
      <h1 className="h-[94vh] mt-[2vh] sm:mt-[5vh] bg-gradient-to-b from-purple-950 to-fuchsia-950 text-white text-[50px] break-words flex items-center ">
        Full-Stack Web Development, Done Right
      </h1>
      <div className=" bg-[#f7f7f7] text-black pt-[10vh] block sm:flex sm:flex-row text-xl">
        <div className="text-center underline text-2xl mb-1">
          Why I made this:
        </div>
        <div className="items-center">
          I am a new developer, trying to show off my skills. I hope that this
          website will give you a little taste of what I know how to do!
        </div>
        <Image
          src={me}
          alt="Picture of Me"
          height={300}
          width={600}
          className="sm:h-[800px] border-2 border-black my-5"
        />
      </div>
      <div className="h-[100vh] bg-[#dfdfdf]">
        <div className="text-3xl text-center underline my-[5vh]">
          What I know
        </div>
        <div className="flex flex-col">
          <div>Hard Skills: </div>
          <div className="flex flex-row flex-wrap">
            {hardSkills.map((hardSkill: skill) => (
              <p
                key={hardSkill.id}
                className="border-2 font-robotoMono border-purple-950 p-1 m-1 bg-purple-300 rounded-[2.5em]"
              >
                {hardSkill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div>Soft Skills: </div>
          <div className="flex flex-row flex-wrap">
            {softSkills.map((softSkill: skill) => (
              <p
                key={softSkill.id}
                className="border-2 border-purple-950 p-1 m-1 bg-purple-300 rounded-[2.5em]"
              >
                {softSkill.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100vh] bg-[#f7f7f7]">
        <div className={`text-center text-3xl underline ${b}`}>Who am I?</div>
        <div className="flex flex-col text-xl">
          <div className="text-xl">
            My name is Victor Boynton, a recent graduate from Front Range
            Community College. I recieved an Associates of Applied Science in
            Programming in January of 2024. I have a love for all things
            software, with a special interest in web development.
          </div>
          <QuoteBlock borderColor="border-red-500">
            Boy-howdy, I do love web development!
          </QuoteBlock>
          <div>
            My greatest strength is my ability to learn very quickly; my
            greatest weakness is a lack of an artistic eye.
          </div>
        </div>
      </div>
    </main>
  );
}
type quote = {
  children: string;
  borderColor: string;
};
function QuoteBlock({ children, borderColor }: quote) {
  return (
    <div className={`block border-l-2 ${borderColor} p-3 ml-5 my-5`}>
      <q className=" italic">{children}</q>
      <p className="text-[15px] font-robotoSlab float-right">-Victor Boynton</p>
    </div>
  );
}
