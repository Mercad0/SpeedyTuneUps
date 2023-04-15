import React from "react";

export const Header = ({ title }: { title: string }) => {
  return (
    <div className="sticky min-h-fit shadow-lg">
      <div className="md:h-48 h-fit w-full bg-gradient-to-tr from-lime-300 to-lime-200 shadow-lg flex items-center justify-center">
        <h1 className="md:text-5xl font-black text-black mt-[155px] md:mt-32 text-3xl">{title}</h1>
      </div>
    </div>
  );
};
