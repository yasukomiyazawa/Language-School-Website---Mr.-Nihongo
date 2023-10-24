import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { BlogContainerProps } from "@/types";

const BlogCards = ({
  blogImg,
  blogTitle,
  author,
  date,
  desc,
  blogLink,
}: BlogContainerProps) => {
  return (
    <div className="grid grid-cols-3 shadow-xl rounded-md max-sm:grid-cols-1">
      <div className="col-span-1 flex items-center justify-center">
        <Image
          src={blogImg}
          alt="blog image"
          width={250}
          height={80}
          className="w-full h-56 flex justify-center items-center rounded-md max-md:p-3"
        />
      </div>

      <div className="col-span-2 py-3 px-8 max-sm:px-5">
        <h2 className="text-xl max-sm:text-base font-bold text-red-800 mb-5">
          {blogTitle}
        </h2>
        <div className="flex gap-20">
          <div className="flex items-center">
            <span>
              <FontAwesomeIcon
                icon={faUser}
                className="mr-2 max-sm:text-sm text-yellow-600"
              />
            </span>
            <span className="max-sm:text-sm">{author}</span>
          </div>
          <div className="flex">
            <span>
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2 max-sm:text-sm text-yellow-600"
              />
            </span>
            <span className="max-sm:text-sm">{date}</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-5 max-sm:text-sm">
          <p>{desc}</p>
          <Link
            href={blogLink}
            className="text-red-800 text-medium max-sm:text-base hover:font-semibold"
          >
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
