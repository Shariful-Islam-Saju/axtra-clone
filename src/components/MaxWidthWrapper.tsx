import React, { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-xl pb-40  px-6 mx-auto  box-border ">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
