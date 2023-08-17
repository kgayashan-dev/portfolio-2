import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import React from "react";
import { data } from "autoprefixer";

const ProjectCard = ({ title, link, img, body1, body2, text, links }) => {
  return (
    <div className="relative shadow-md capitalize bg-white rounded-lg  hover:scale-105 duration-300 hover:shadow-xl">
      <Image
        aria-label={link}
        src={img}
        width={500}
        height={248}
        className="rounded-t-lg object-cover"
      />
      <div className="absolute bg-black/30 top-0 w-full h-[208px] rounded-t-lg "></div>

      <p className="absolute top-0 text-white p-4 text-lg">{title}</p>
      <div className="text-sm mb-12 min-h-50">
        <h3 className=" top-0 text-black p-2">{body1}</h3>
        <p className=" top-0 text-black p-2">{body2}</p>
        {/* <p className=" top-0 text-black p-2">{text}</p> */}
      </div>

      <div className="absolute mt-4  p-2 text-sm bottom-0  right-0">
        <a
          href={links[1].url}
          target="_blank"
          className="flex  items-center gap-2"
        >
          <BsGithub size={20} />
          <span className="text-xs right-0 hidden sm:block">Source code</span>
        </a>
      </div>

      <div className="absolute mt-4  p-2 text-sm bottom-0  left-0">
        <a
          href={links[0].url}
          target="_blank"
          className="flex  items-center gap-2 "
        >
          <BsLinkedin size={20} />
          <span className="sm:text-xs right-0 hidden sm:block">
            Source code
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
