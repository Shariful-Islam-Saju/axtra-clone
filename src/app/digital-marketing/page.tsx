import MaxWidthWrapper from "@/components/MaxWidthWrapper"; // Wrapper component for max-width styling
import MotionText from "@/components/MotionText"; // Custom component for motion-based text animation
import arrowDown from "../../../public/arrow-down-sm.png"; // Importing arrow down image
import pic1 from "../../../public/1.jpg"; // Importing a placeholder image
import Image from "next/image"; // Next.js optimized image component
import { IoPlay } from "react-icons/io5";
import BrandSection from "@/components/BrandSection";

const page = () => {
  return (
    <div>
      <MaxWidthWrapper>
        {/* Header Section */}
        <div className="flex mt-10">
          <h1 className="font-bold text-2xl">DIGITAL</h1>
          <div className="border-t mt-4 ml-10 w-20 border-t-black" />
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-11">
          {/* Large heading (part 1) */}
          <h1 className="col-span-6 text-7xl flex lg:text-[15rem] md:text-[9rem] font-bold">
            <MotionText time={0}>MARK</MotionText>
          </h1>

          {/* Video intro text */}
          <div className="col-span-5 flex justify-end text-lg uppercase  font-semibold items-center">
            <div className=" bg-blue-950 rounded-full p-10 mx-3 ">
              <IoPlay className="text-2xl text-white" />
            </div>
            <span className="hidden md:block">watch video intro</span>
          </div>

          {/* Paragraph with animated text */}
          <div className="col-span-5 flex items-center justify-start gap-4 mt-10">
            <p className="w-[80%] flex text-lg ">
              <MotionText time={1.5}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, ipsa. Sunt, iusto saepe possimus at reiciendis tempore
                temporibus cum.
              </MotionText>
            </p>
          </div>

          {/* Large heading (part 2) */}
          <h1 className="col-span-6 text-7xl flex z-10 lg:text-[15rem] md:text-[9rem] font-bold">
            <MotionText time={0.5}>ETING</MotionText>
          </h1>
        </div>

        {/* Bottom Section with button and image */}
        <div className="flex mt-5 md:mt-[-2rem]">
          {/* Animated arrow button */}
          <div className="w-2/5 hidden md:flex items-center">
            <button className="h-12 px-2 py-10 border flex items-center justify-center border-gray-500 rounded-full animate-upDown">
              <Image src={arrowDown} alt="arrow down" />
            </button>
          </div>

          {/* Full-width image */}
          <div className="w-3/5">
            <Image className="min-w-96" src={pic1} alt="pic1" />
          </div>
        </div>

        <BrandSection />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
