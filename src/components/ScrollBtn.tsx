'use client';
import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollBtn = () => {
  const [effect, setEffect] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      scrollY > 100 ? setEffect(true) : setEffect(false);
    });
  }, []);

  if (effect) {
    return (
      <div
        className="fixed bottom-5 right-5 z-40 bg-black text-white p-3 rounded-full cursor-pointer "
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <MdArrowUpward size={24} className="ab" />
      </div>
    );
  } else {
    return "";
  }
};

export default ScrollBtn;
