import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MotionText from "@/components/MotionText";
import arrowDown from "../../../public/arrow-down-sm.png";
import pic1 from "../../../public/1.jpg";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex mt-10">
          <h1 className="font-bold text-2xl  ">DIGITAL</h1>
          <div className="border-t mt-4 ml-10 w-20 border-t-black " />
        </div>

        <div className="grid grid-cols-11 ">
          <h1 className="col-span-6 text-7xl  flex  lg:text-[15rem] md:text-[9rem]  font-bold ">
            <MotionText time={0}>MARK</MotionText>
          </h1>
          <div className="col-span-5 flex justify-end text-lg uppercase font-semibold items-center ">
            <span className="hidden md:block">watch video intro</span>
          </div>
          <div className="col-span-5 flex items-center justify-start    ">
            <p className="w-[80%] flex text-lg ">
              <MotionText time={1.5}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, ipsa. Sunt, iusto saepe possimus at reiciendis tempore
                temporibus cum. Mollitia nihil nulla soluta aliquid in.
              </MotionText>
            </p>
          </div>
          <h1 className="col-span-6 text-7xl  flex  z-10 lg:text-[15rem] md:text-[9rem] font-bold ">
            <MotionText time={0.5}>ETING</MotionText>
          </h1>
        </div>

        <div className="flex mt-[-2rem] ">
            <div className="w-2/5 hidden md:flex items-center">
            <button className="h-12 px-2 py-10 border flex items-center justify-center border-gray-500 rounded-full  animate-bounce"> 
              <Image src={arrowDown} alt="arrow down" />
            </button>
            </div>

          <div className="w-3/5 ">
            <Image className="w-full" src={pic1} alt="pic1" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
