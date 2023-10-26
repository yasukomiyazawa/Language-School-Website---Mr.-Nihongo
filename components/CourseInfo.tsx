import React from "react";
import Image from "next/image";
import { CourseInfoProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faGraduationCap,
  faPaperclip,
  faPuzzlePiece,
  faStairs,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const CourseInfo = ({
  instructorImg,
  name,
  courseTitle,
  coursePic,
  courseOverview,
  price,
}: CourseInfoProps) => {
  return (
    <div className="w-full h-screen max-xl:h-auto">
      <div className="flex flex-col bg-red-800 text-white">
        <div className="flex justify-center text-5xl my-5 ml-5 max-xl:ml-0 max-md:text-3xl">
          {courseTitle}
        </div>
        <div className="flex justify-center mb-3">
          <div className="flex gap-4 max-md:grid max-md:grid-cols-2">
            <div>
              <FontAwesomeIcon
                icon={faClock}
                className="mr-2"
                style={{ color: "yellow" }}
              />
              12 Weeks
            </div>
            <div>
              <FontAwesomeIcon
                icon={faStairs}
                className="mr-2"
                style={{ color: "yellow" }}
              />
              All Levels
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPaperclip}
                className="mr-2"
                style={{ color: "yellow" }}
              />
              12 Lessons
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPuzzlePiece}
                className="mr-2"
                style={{ color: "yellow" }}
              />
              3 Quizess
            </div>
            <div>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="mr-2"
                style={{ color: "yellow" }}
              />
              44 Students
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 max-xl:grid-cols-1 mt-20 gap-x-8 px-11">
        <div className="max-xl:flex justify-center">
          <Image
            src={coursePic}
            alt="course image"
            width={800}
            height={300}
            className="flex justify-center"
          />
        </div>

        <div className="max-xl:my-8">
          <h2 className="text-3xl font-semibold text-red-800 mb-3">Overview</h2>
          <p className="text-justify max-xl:text-left max-md:text-sm">
            {courseOverview}
          </p>
          <div className="text-lg text-red-800 mt-5 font-semibold">
            Course Price:
            <span className="text-gray-600 font-normal">{`¥${price}/semester`}</span>
          </div>
          <div>
            <p className="text-lg text-red-800 mt-5 font-semibold">
              Want to Inquire About this Course?
            </p>
            <Link href="/ContactUs">
              <button className="border border-red-800 bg-red-800 rounded-full py-2 px-4 text-white mt-4 hover:bg-gray-600 hover:border-gray-600">
                Click Here
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex border border-gray-600 w-fit">
        <div>
          <Image
            src={instructorImg}
            alt="instructor image"
            width={250}
            height={100}
            className="w- rounded-full ml-5"
          />
        </div>
        <div className="flex flex-col">
          <span>Instructor</span>
          <span>{name}</span>
        </div>
      </div> */}
    </div>
  );
};

export default CourseInfo;
