"use client";

import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const ScrollBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
// how to add bg-color as a reverse transparent color
  return (
    <div
      className="fixed bottom-1/2 right-0 z-40 p-3 bg-gray-900 flex items-center shadow-md cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <button>
        {!isOpen ? (
          <IoMdSettings size={24} className="animate-spinLogo text-white" />
        ) : (
          <div className="flex justify-center items-center">
            <IoCloseSharp size={24} className="text-gray-600" />
          </div>
        )}
      </button>
    </div>
  );
};

export default ScrollBtn;
