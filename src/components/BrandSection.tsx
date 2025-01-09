"use client";
import { brandImage } from "@/constants/ImageConstants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const BrandSection = () => {
  return (
    <div className="flex mt-32 flex-col justify-center items-center">
      {/* Tagline */}
      <motion.p
        initial={{ y: 0, opacity: 0, rotateX:45 }}
        animate={{ y: -30, opacity: 1, rotateX:0 }}
        transition={{  duration: .75 }}
        className="text-lg font-semibold text-center text-gray-900"
      >
        WE WORKED WITH GLOBAL LARGEST BRANDS
      </motion.p>
      {/* Brands Name and Logo*/}
      <div className="grid grid-cols-6  w-full gap-10 mt-16">
        {brandImage.map((img, index) => (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -40, opacity: 1 }}
            transition={{duration:.75,  delay: img.delay }}
            key={index}
            className="flex justify-center items-center col-span-3 md:col-span-2 lg:col-span-1"
          >
            <Image src={img.src} alt={`brand-${index}`} />
          </motion.div>
        ))}
      </div>{" "}
    </div>
  );
};

export default BrandSection;
