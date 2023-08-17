import React from "react";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BsMedium, BsTwitter } from "react-icons/bs";

const Footer = ({ links }) => {
  return (
    <div className=" bg-gradient-to-r to-indigo-700/70 from-red-700/50 flex shadow-footer justify-center gap-4  mt-12 py-4  bottom-0 fixed w-screen text-3xl">
      <a href={links[3]} target="_blank">
        {" "}
        <AiFillLinkedin className="text-blue-600" />
      </a>
      <a href={links[2]} target="_blank">
        {" "}
        <BsMedium />
      </a>
      <a href={links[1]} target="_blank">
        {" "}
        <BsTwitter className="text-blue-500" />
      </a>
      <a href={links[0]} target="_blank">
        <AiFillFacebook className="text-blue-500" />
      </a>
    </div>
  );
};

export default Footer;
