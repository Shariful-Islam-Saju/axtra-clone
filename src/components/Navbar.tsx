"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../../public/logo-black.png";
import navLinks from "@/constants/NavConstants";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import TextStyle from "./TextStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className=" flex  py-1 sticky top-0 z-50">
      <div className="container px-10 flex items-center justify-between  h-20">
        {/* Logo */}
        <Image src={Logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-1 ml-36 mr-44 justify-between space-x-8 items-center">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="mx-4 hover:text-primary transition relative group"
            >
              <Link href={item.link} className="font-semibold uppercase">
                <TextStyle text={item.title} />
              </Link>
              {item.navDropDown && (
                <div className="absolute left-0 top-full  hidden group-hover:block bg-gray-900 text-white shadow-lg rounded-lg">
                  <ul className="py-2 flex space-x-60">
                    {item.navDropDown.map((subItem, subIndex) => (
                      <li key={subIndex} className="px-4 py-2  ">
                        <button className="font-semibold text-xl">
                          {subItem.titleToggle}
                        </button>
                        <div>
                          {subItem.items.map(
                            (subMenuItem, subMenuItemIndex) => (
                              <div
                                key={subMenuItemIndex}
                                className="px-4 py-2 w-max"
                              >
                                <Link href={subMenuItem.link}>
                                  {subMenuItem.name}
                                </Link>
                              </div>
                            )
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Navbar right */}

        <div className="flex items-center space-x-12  text-xl">
          <div className="flex flex-col relative">
            <button>
              {isSearchOpen ? (
                <IoCloseSharp
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="cursor-pointer"
                />
              ) : (
                <IoSearch
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="cursor-pointer"
                />
              )}
            </button>


           {isSearchOpen && (
             <div className="p-4 absolute   right-0 transform translate-y-12  rounded-lg bg-gray-200">
              <input
                type="text"
                placeholder="Search"
                className="  rounded-md p-2 text-lg w-72"
              />
            </div>
            )}
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
