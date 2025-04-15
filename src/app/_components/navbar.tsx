"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

export function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Rerources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="block md:hidden">
        {!nav ? (
          <AiOutlineClose
            size={20}
            className="cursor-pointer"
            onClick={handleNav}
          />
        ) : (
          <AiOutlineMenu
            size={20}
            className="cursor-pointer"
            onClick={handleNav}
          />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-4 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Rerources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
