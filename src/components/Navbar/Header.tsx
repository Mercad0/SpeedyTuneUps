import React from "react";

export const Header = ({ title }: { title: string }) => {
  return (
    <div className="min-h-fit shadow-lg w-full">
      <div className="md:h-48 h-fit bg-gradient-to-tr from-lime-200 to-lime-500 shadow-lg z-10 flex items-center justify-center">
        <h1 className="md:text-4xl font-semibold text-black mt-[155px] md:mt-32 text-3xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
