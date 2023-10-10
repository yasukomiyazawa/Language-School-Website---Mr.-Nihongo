import React from "react";
import Image from "next/image";
import { CoursesCardProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({ courseImg, courseTitle, price }: CoursesCardProps) => {
  return (
    <div className="border border-gray-200 p-2 shadow-md">
      <div>
        <Image
          src={courseImg}
          alt="course image"
          width={250}
          height={150}
          className="w-full h-56 mb-5 hover:opacity-70"
        />
      </div>
      <h2 className="font-bold text-lg mb-3">{courseTitle}</h2>
      <div className="flex justify-between">
        <div>
          <FontAwesomeIcon icon={faStar} style={{ color: "gray" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gray" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gray" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gray" }} />
          <FontAwesomeIcon icon={faStarHalf} style={{ color: "gray" }} />
        </div>
        <div className="font-md border rounded-full py-1 px-2 bg-red-800 text-white">{`¥${price}/semester`}</div>
      </div>
    </div>
  );
};

export default CourseCard;
