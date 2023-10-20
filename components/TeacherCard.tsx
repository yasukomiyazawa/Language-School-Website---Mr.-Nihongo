import React from "react";
import Image from "next/image";
import { TeacherCardProps } from "@/types";

const TeacherCard = ({ TeacherImg, name, course }: TeacherCardProps) => {
  return (
    <div className="grid grid-cols-1 mb-8">
      <div className="flex justify-center items-center">
        <Image
          src={TeacherImg}
          alt="Teacher's Image"
          width={200}
          height={200}
          className="w-64 h-64 mb-2 shadow-xl rounded-md hover:opacity-80 cursor-pointer"
        />
      </div>

      <div className="flex flex-col items-center">
        <span className="text-red-800 font-semibold text-xl">{name}</span>
        <span className="text-gray-700 font-semibold">{course}</span>
      </div>
    </div>
  );
};

export default TeacherCard;
