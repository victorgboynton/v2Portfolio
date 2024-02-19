"use client";
import React from "react";
import { Navbar } from "./Navbar";
import me from "/public/picOfMe.jpg";
import Image from "next/image";
import Link from "next/link";
import { BlinkDescriptor } from "./BlinkDescriptor";
import { SkillsCard, softSkills, hardSkills } from "./SkillsCard";
const b = `pb-5 pt-10`;

export default function Home() {
  return (
    <main className="flex flex-col font-robotoSlab">
      <div className="h-[98vh] mt-[2vh] sm:mt-[5vh] bg-gradient-to-b px-[5vw] sm:px-10 from-[#1a032b] to-[#330336] flex flex-col  justify-center md:items-center">
        <h1 className=" text-white text-[40px] md:text-[45px] lg:text-[50px] lg:leading-[90px] xl:text-[70px] break-words flex flex-col animate-[slide-in_1s,fade-in_1s]">
          Software Development,{" "}
          <span className="animate-[fade-in_1s_1s_forwards] text-[#5dc213] opacity-0">
            <BlinkDescriptor />
          </span>{" "}
          <span className="relative animate-[fade-in_1s_1.5s_forwards] text-[30px] right-0 italic opacity-0">
            by Victor Boynton
          </span>
        </h1>
        <nav className="flex flex-col md:flex-row w-[90vw] md:w-[70vw] justify-between md:items-center space-y-4 mx-auto mt-20">
          <Link
            href="/ProjectsPage"
            className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 mt-4  p-5 text-3xl w-[300px] md:w-auto rounded-full animate-[slide-in_1s_1.5s,fade-in_1.5s_1.5s_forwards]"
          >
            My Projects
          </Link>
          <Link
            href="/#aboutMeSection"
            className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 p-5 text-3xl w-[300px] md:w-auto rounded-full animate-[slide-in-right_1s_2s,fade-in_1.5s_2s_forwards]"
          >
            Learn About Me
          </Link>
          <Link
            href="/Contact"
            className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 p-5 text-3xl w-[300px] md:w-auto rounded-full animate-[slide-in_1s_2.5s,fade-in_1.5s_2.5s_forwards]"
          >
            Contact Me
          </Link>
        </nav>
      </div>
      <div className="h-[30vh] bg-gradient-to-b from-[#330336] to-gray-700"></div>
      <div id="aboutMeSection" className="bg-gray-700">
        <div className="text-white text-xl py-20 md:py-32 w-[90vw] mx-auto flex flex-col md:flex-row justify-between">
          <div className="md:w-[60vw] mx-auto">
            <h1 className="text-center text-2xl font-bold pb-5">
              Welcome! I'm Victor Boynton
            </h1>
            <p>
              As a recent graduate in the field of development, my professional
              journey is just beginning. While I may not yet have extensive
              industry experience, I bring a portfolio rich with diverse
              projects and freelance ventures.
            </p>
            <br />
            <p>
              Consider this website your personal gateway to my world of work,
              all neatly organized and beautifully displayed for your viewing
              pleasure.
            </p>
          </div>
          <div className="min-h-80 min-w-80 rounded-full relative border-2">
            <Image
              src="/picOfMe.jpg"
              alt="Picture of Victor Boynton in a suit and tie"
              fill
              className="rounded-full object-cover object-left-top relative border-1"
            />
          </div>
        </div>
      </div>
      <div className="h-[20vh] bg-gradient-to-b to-[#330336] from-gray-700"></div>
      <div className="bg-[#330336] text-white text-xl py-20">
        <div className="flex flex-col w-[90vw] mx-auto">
          <h1 className="text-center text-3xl font-bold mb-10">
            What do I know?
          </h1>
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-20 mx-auto">
            <SkillsCard SkillsMap={softSkills} MapName="My Soft Skills" />
            <SkillsCard SkillsMap={hardSkills} MapName="My Hard Skills" />
          </div>
        </div>
      </div>
      {/* <div className=" px-[5vw] bg-[#f7f7f7] text-black pt-[10vh] block sm:flex sm:flex-col md:flex-row text-xl">
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
      </div> */}
    </main>
  );
}
