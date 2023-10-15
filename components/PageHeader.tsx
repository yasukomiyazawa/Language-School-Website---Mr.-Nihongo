import { PageHeaderProps } from "@/types";
import React from "react";
import Image from "next/image";

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
      <div className="py-5 px-2 flex flex-col gap-4 ml-16">
        <h2 className="font-bold text-6xl text-gray-700 mt-4">{title}</h2>
        <p className="font-semibold text-lg text-red-700 mb-6">{subLine}</p>
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
        <div className="bg-red-800 w-1/2 ml-auto mr-28 mt-[-100px] mb-20 p-4 rounded-md shadow-xl">
          <div className="my-3">
            <h3 className="text-white text-4xl font-bold mb-5">
              {catchPhrase}
            </h3>
            <p className="flex text-white text-justify pr-16">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
