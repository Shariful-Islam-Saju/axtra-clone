import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex mt-10">
        <h1 className="font-bold text-2xl  ">DIGITAL</h1>
        <div className="border-t mt-4 ml-10 w-20 border-t-black " />
      </div>

      <div className="grid grid-cols-11">
        <h1 className="col-span-6 text-7xl lg:text-[15rem] md:text-[9rem]  font-bold ">
          MARK
        </h1>
        <div className="col-span-5 flex justify-end text-lg uppercase font-semibold items-center ">
          <span className="hidden md:block">watch video intro</span>
        </div>
        <div className="col-span-5 flex items-center justify-start    ">
          <p className="w-[80%]  text-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            facere ex totam, labore culpa aliquam placeat quibusdam ut dolore
            quisquam. Lorem, ipsum dolor.
          </p>
        </div>
        <h1 className="col-span-6 text-7xl lg:text-[15rem] md:text-[9rem]  font-bold ">
          ETING
        </h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
