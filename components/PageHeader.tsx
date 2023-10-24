import { PageHeaderProps } from "@/types";
import React from "react";
import Image from "next/image";
import "../app/globals.css";

const PageHeader = ({
  title,
  subLine,
  headerImg,
  catchPhrase,
  desc,
}: PageHeaderProps) => {
  return (
    // <div className="bg-red-800 flex justify-center items-center h-20">
    //   <h1 className="text-white font-semibold text-5xl">{title}</h1>
    // </div>
    <>
      <div className="py-5 px-2 flex flex-col gap-4 ml-16 max max-lg:ml-10 max-md:ml-7 max-sm:ml-2">
        <h2 className="font-bold text-6xl text-gray-700 mt-4 max-md:text-5xl max-sm:text-4xl">
          {title}
        </h2>
        <p className="font-semibold text-lg max-md:text-base max-sm:text-sm text-red-700 mb-6">
          {subLine}
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src={headerImg}
          alt="foreign students studying Japanese together"
          width={1100}
          height={500}
        ></Image>
      </div>

      <div className="flex w-full">
        <div className="bg-red-800 w-1/2 max-lg:w-3/5 max-md:w-full max-md:mx-10 ml-auto max-lg:mr-12 max-xl:mr-20 mr-28 mt-[-100px] max-lg:mt-[-50px] max-sm:mb-5 max-md:mb-10 mb-20 p-4 rounded-md shadow-xl animate-fadeInUp">
          <div className="my-3">
            <h3 className="text-white max-md:text-xl max-lg:text-2xl text-4xl font-bold mb-5">
              {catchPhrase}
            </h3>
            <p className="flex max-xl:text-md max-md:text-sm text-white text-justify pr-16 max-lg:hidden">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
