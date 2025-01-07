"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../../public/logo-black.png";
import navLinks from "@/constants/NavConstants";
import { IoSearch } from "react-icons/io5";
import TextStyle from "./TextStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  py-1 sticky top-0 z-50">
      <div className="container px-10 flex items-center justify-between  h-20">
        {/* Logo */}
        <Image src={Logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-1 ml-36 mr-44 justify-between space-x-8 items-center">
          {navLinks.map((item, index) => (
            <li key={index} className="mx-4 hover:text-primary transition">
              <Link href={item.link} className="font-semibold uppercase">
                <TextStyle text={item.title} />
              </Link>
            </li>
          ))}
          <TextStyle text="Contact" />
        </ul>

        {/* Navbar right */}

        <div className="flex items-center space-x-12 text-xl">
          <div className="flex flex-col ">
            <IoSearch />
            <div className="p-4 absolute z-[-1] top-20 right-20 transform translate-y-12 opacity-0  rounded-lg bg-gray-200">
              <input
                type="text"
                placeholder="Search"
                className="  rounded-md p-2 text-lg w-72"
              />
            </div>
          </div>
          <div className=" cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
            <RiMenu3Fill />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className=" bg-gray-800 text-white flex flex-col items-start px-8 py-4 space-y-4">
          {navLinks.map((item, index) => (
            <li key={index} className="hover:text-primary transition">
              <Link href={item.link} className="font-semibold uppercase">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
