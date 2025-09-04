import Link from "next/link";
import React from "react";
import { navLinks } from "../../data/nav-links";

export const SideBar = () => {
  return (
    <div className="min-w-[232px] w-[232px] hidden min-[812px]:block  rounded-[30px] bg-white p-[10px] overflow-y-auto">
      {" "}
      <div className="flex flex-col">
        {navLinks?.map((nav, index) => (
          <Link
            key={index}
            href={nav.path}
            className={`flex gap-3 items-center h-[50px]  transition-all duration-200 ease-in-out hover:translate-x-2 
  ${
    index !== navLinks.length - 1
      ? "border-b-[1px] border-transparent [border-image:linear-gradient(270deg,rgba(66,133,244,0.1),rgba(210,9,163,0.1))_1] [border-image-slice:1]"
      : ""
  }`}
          >
            <nav.icon />
            <p className="font-[400] text-[13px]">{nav.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
