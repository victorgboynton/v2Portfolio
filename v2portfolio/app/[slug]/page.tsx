"use client";
import { stringify } from "querystring";
import {
  ProjectDescriptionArray,
  ProjectDescriptionProps,
} from "../ProjectDescriptionArray";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const project = ProjectDescriptionArray.find((e: ProjectDescriptionProps) => {
    e.slug === params.slug;
    return e;
  });
  if (!project) {
    return <div>Project Not Found</div>;
  }
  return (
    <div>
      <div>{project.projectName}</div>
      <div>{project.slug}</div>
      <div className="relative w-72 h-60">
        <Image
          src={project.picture}
          alt="The Landing page of the website"
          fill
        />
      </div>
      <p>{project.description}</p>
    </div>
  );
}
