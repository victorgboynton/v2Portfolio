"use client";
import React, { useRef, useState, useEffect, ReactNode } from "react";
import { Navbar } from "./Navbar";
import me from "/public/picOfMe.jpg";
import Image from "next/image";
import Link from "next/link";
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
    <main className="flex flex-col w-[100vw] font-robotoSlab">
      <div className="h-[94vh] mt-[2vh] sm:mt-[5vh] bg-gradient-to-b px-[5vw] sm:px-10 from-purple-950 to-fuchsia-950 flex flex-col  justify-center md:items-center">
        <h1 className=" text-white text-[40px] md:text-[45px] lg:text-[50px] xl:text-[70px] break-words flex flex-col animate-[slide-in_2s,fade-in_2s]">
          Software Development:{" "}
          <span className=" md:w-[400px] animate-[fade-in_.1s_2.5s_forwards] italic opacity-0">
            Done Right
          </span>
        </h1>
        <div className="flex flex-col md:flex-row w-[90vw] md:w-[70vw] justify-between md:items-center space-y-4 mx-auto mt-20">
          <Link
            href="/ProjectsPage"
            className="text-white bg-purple-800 border-2 opacity-0 border-white p-5 text-3xl rounded-full animate-[slide-in_1s_3s,fade-in_1.5s_3s_forwards]"
          >
            My Projects
          </Link>
          <Link
            href="/About"
            className="text-white bg-purple-800 border-2 opacity-0 border-white p-5 text-3xl rounded-full animate-[slide-in-right_1s_3.5s,fade-in_1.5s_3.5s_forwards]"
          >
            Learn About Me
          </Link>
          <Link
            href="/Contact"
            className="text-white bg-purple-800 border-2 opacity-0 border-white p-5 text-3xl rounded-full animate-[slide-in_1s_4s,fade-in_1.5s_4s_forwards]"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className=" px-[5vw] bg-[#f7f7f7] text-black pt-[10vh] block sm:flex sm:flex-col md:flex-row text-xl">
        <div className="text-center underline text-2xl mb-1">
          Why I made this:
        </div>
        <div className="items-center">
          As a budding developer, I&apos;m eager to demonstrate my abilities.
          Through this website, I aim to provide a glimpse into my skill set and
          what I am capable of achieving.
        </div>
        <div className="relative w-[250px] h-[362px]">
          <ScrollAnimation
            inAnimation="animate-[fade-in_1s_forwards]"
            outAnimation="animate-[fade-out_2s]"
          >
            <Image
              src={me}
              alt="Picture of Me"
              fill
              className="sm:h-[800px] border-2 border-black my-5"
            />
          </ScrollAnimation>
        </div>
      </div>
      <div className="h-[100vh] px-[5vw] sm:h-auto bg-[#dfdfdf]">
        <div className="text-3xl text-center underline my-[5vh]">
          What I know
        </div>
        <div className={`flex flex-col`}>
          <h2 className="text-xl font-bold">Hard Skills: </h2>
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
          <h2 className="text-xl font-bold">Soft Skills: </h2>
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
      <div className="h-[100vh] px-[5vw] bg-[#f7f7f7]">
        <div className={`text-center text-3xl underline ${b}`}>Who am I?</div>
        <div className="flex flex-col text-xl">
          <div className="text-xl">
            I am Victor Boynton, a recent graduate from Front Range Community
            College. I recieved an Associates of Applied Science in Programming
            in January of 2024. I have a love for all things software, with a
            special interest in web development.
          </div>
          <QuoteBlock borderColor="border-red-500" author="Victor Boynton">
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
  author: string;
};
type ScrollAnimationProps = {
  children: ReactNode;
  inAnimation: string;
  outAnimation: string;
};
function QuoteBlock({ children, borderColor, author }: quote) {
  return (
    <div className={`block border-l-2 ${borderColor} p-3 ml-5 my-5`}>
      <q className=" italic">{children}</q>
      <p className="text-[15px] font-robotoSlab float-right">-{author}</p>
    </div>
  );
}

function ScrollAnimation({
  children,
  inAnimation,
  outAnimation,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const callBackFunction = (entries: any) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 0.7,
    };
    const observer = new IntersectionObserver(callBackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className={`opacity-0 ${isVisible ? inAnimation : outAnimation}`}
    >
      {children}
    </div>
  );
}
