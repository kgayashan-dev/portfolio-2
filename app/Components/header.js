import React from "react";
import Link from "next/link";

const Header = ({ pages, aboutMeData }) => {
  return (
    <div className="w-full relative bg-gradient-to-r to-indigo-700 from-red-600 h-20  flex sm:flex-row flex-col sm:justify-between  justify-center items-center  px-4 shadow-lg ms:g-2  ">
      <h1 className="font-bold lg:text-3xl text-xl pl-0 sm:pl-12 sm:text-center text-right gap-2  sm:gap-6  mt-6 ms:m-2 bg-clip-text bg-gradient-to-r to-indigo-700 from-indigo-700 uppercase">
        Kaviya,
      </h1>
      <nav className="my-4 ">
        {pages.map((page, key) => (
          <Link
            aria-label={page.label}
            key={page.id}
            href={page.link}
            className="sm:px-3  min-w-100  m-1 sm:m-2 md:text-lg text-sm text-white hover:underline"
          >
            {" "}
            {page.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
