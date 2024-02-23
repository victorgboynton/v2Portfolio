"use client";
import { ElementRef } from "react";

export const ProjectDescriptionArray: ProjectDescriptionProps[] = [
  {
    id: 1,
    projectName: "CookSuccess",
    slug: "cooksuccess",
    githubLink: "https://github.com/victorgboynton/cook_success",
    picture: "/CookSuccess.webp",
    alt: "Picture of the CookSuccess landing page",
    status: "In Progress",
    skills: ["React", "TailwindCSS", "Nextjs", "MongoDB"],
    description: (
      <div>
        <p>
          &apos;CookSuccess&apos; is where I honed my backend skills. The
          inspiration for &apos;CookSuccess&apos; came from having a lot of
          ingredients in my kitchen, and no idea what to do with them.
        </p>
        <br />
        <p>
          The challange from this website came from my relative new-ness to the
          techstack used. If I were to remake it today, it would take me far
          less time.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    projectName: "Whack-a-Food",
    slug: "whack-a-food",
    githubLink: "https://github.com/victorgboynton",
    picture: "/WhackAFood.webp",
    alt: "Picture of the Whack-a-Food menu",
    status: "Completed",
    skills: ["C#", "Unity"],
    description: (
      <div>
        <p>
          &apos;Whack-a-Food&apos; is unique to this portfolio because it is not
          a website, and it was from a tutorial. It is the capstone project for
          the Junior Programmer Course for game development from Unity.{" "}
        </p>
        <br />
        <p>
          All of the assests were provided by Unity. While I love game
          development, I do not have a dedicated artist, and thus the tutorial
          is as far as I will go with game development for now.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    projectName: "Game Force",
    slug: "game-force",
    githubLink: "https://github.com/ProjectGameForce/ProjectGameForceFE",
    picture: "/gameForceOne.webp",
    alt: "Picture of the Game Force landing page",
    status: "Completed",
    skills: ["React", "TailwindCSS", "Nextjs", "Git"],
    description: (
      <div>
        <p>
          This project taught me a whole different lesson than the other
          projects on this site. Two whole different lessons, to be exact.{" "}
        </p>
        <br />
        <p>
          <strong className="text-2xl">Lesson One: Working with a team</strong>
          <br /> Working with a team is a whole different beast compared to
          working solo. I was the lead on this, and the demands of responsiblity
          were high with a very new programmer working with me. Combining that
          with learning the intricasies of Git, this project really opened my
          eyes to the software development process.
        </p>
        <br />
        <p>
          <strong className="text-2xl">
            Lesson Two: Communicate with project owner
          </strong>
          <br /> This lesson is why the website is not hosted anywhere. After
          working with my partner and completing the site, we approched the
          business owner about replacing his old, no CSS HTML website with this.
          He politly declined, and sent us on our way.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    projectName: "Hopeful Humans",
    slug: "hopeful-humans",
    picture: "/hopefulHumans.webp",
    alt: "Picture of the Hopeful Humans landing page",
    status: "Completed",
    skills: ["React", "TailwindCSS", "Nextjs", "Git"],
    description: (
      <div>
        <p className="text-white ">
          {" "}
          This project involved creating a website for a charity named{" "}
          <strong>&apos;Hopeful Humans&apos;</strong>. The goal was to design a
          platform that not only serves the charity&apos;s needs but also stands
          as a testament to my skills and dedication.
        </p>
        <br />
        <p>
          My aspiration for this project is for it to be recognized as the
          magnum opus of my portfolio, showing my technical acumin and strength
          as a team-lead.
        </p>
        <br />
        <p>
          This is by far my most complicated project. Everything you see on this
          website was had crafted by me. I used no libraries external to
          Next.js. The one crutch I used was for the contact page, where I used
          an outside mail server and API to send the contact information.
        </p>
      </div>
    ),
  },
];
export type ProjectDescriptionProps = {
  id: number;
  picture: string;
  alt: string;
  slug: string;
  projectName: string;
  skills: string[];
  description: JSX.Element;
  status: string;
  githubLink?: string;
};
