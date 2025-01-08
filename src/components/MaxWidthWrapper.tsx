import React, { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-xl  px-6 lg:pl-24  box-border ">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
