import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { BlogPostProps } from "@/types";

const BlogPost = ({
  blogImg,
  authorImg,
  authorName,
  authorDesc,
  title,
  date,
  time,
  articleP1,
  articleP2,
  b1,
  b2,
  b3,
}: BlogPostProps) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-12 max-xl:flex max-xl:flex-col">
        <div className="col-span-1 mt-20 px-12 flex flex-col gap-5 max-xl:hidden">
          <span className="text-xl font-semibold">About the Author</span>
          <Image
            src={authorImg}
            alt="author image"
            width={170}
            height={100}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-red-800 mb-4">
              {authorName}
            </span>
            <span className="text-gray-600">{authorDesc}</span>
          </div>
        </div>

        <section className="col-span-3 px-12">
          <h1 className="font-bold text-5xl mt-10 mb-5 max-md:text-4xl max-sm:text-2xl">
            {title}
          </h1>

          <div className="flex justify-center w-full">
            <Image
              src={blogImg}
              alt="blog image"
              width={800}
              height={300}
              className="flex my-5"
            />
          </div>

          <div className="mt-5 mb-10 flex">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2 text-red-800"
              />
              <span className="text-gray-600">{date}</span>
            </div>
            <div className="ml-3">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-red-800" />
              <span className="text-gray-600">{time}</span>
            </div>
            <div className="ml-3">
              <FontAwesomeIcon
                icon={faCommentDots}
                className="mr-2 text-red-800"
              />
              <span className="text-gray-600">No Comments</span>
            </div>
          </div>

          <p className="flex flex-col gap-5 border-b-2 border-b-gray-200 pb-28 max-md:text-sm max-sm:text-xs">
            <span>{articleP1}</span> <span>{articleP2}</span>
          </p>

          <div className="py-14">
            <span className="text-3xl font-semibold mb-20 my-16">
              More to Explore
            </span>
            <div className="flex flex-col gap-5">
              <div>{b1}</div>
              <div>{b2}</div>
              <div>{b3}</div>
            </div>
          </div>
        </section>

        <div className="mt-3 px-12 max-sm:flex max-sm:flex-col gap-5 grid grid-cols-2 xl:hidden">
          <div className="flex flex-col justify-center items-center gap-y-8">
            <span className="text-xl font-semibold">About the Author</span>
            <Image
              src={authorImg}
              alt="author image"
              width={170}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col mb-8">
            <span className="text-xl font-semibold text-red-800 mb-4 max-sm:text-center">
              {authorName}
            </span>
            <span className="md:text-sm text-gray-600 max-sm:text-center">
              {authorDesc}
            </span>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center w-full bg-red-800">
        <div className="flex">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-400 bg-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 bg-white"
          />
        </div>

        <textarea cols={30} rows={10} placeholder="Place your comment here!" />

        <input type="submit"></input>
      </div> */}
    </div>
  );
};

export default BlogPost;
