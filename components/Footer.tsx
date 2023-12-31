import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 items-center bg-footer-bg bg-cover bg-right p-14 max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:gap-x-5 max-lg:gap-y-8 max-md:grid-cols-1 max-sm:grid-rows-4">
        <div className="col-span-1">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="logo"
              width={150}
              height={10}
              className="w-44 h-auto mb-10"
            />
          </Link>
          <p className="text-gray-500 font-semibold">
            Elevate Your Nihongo: Empowering Futures, One Word at a Time!
          </p>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center mb-8 font-bold text-red-700 text-lg border-b-2 border-neutral-500">
              About School
            </h2>
            <ul className="flex flex-col items-center gap-2 text-gray-500 cursor-pointer">
              <li className="hover:font-semibold hover:text-red-600">
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li className="hover:font-semibold hover:text-red-600">
                <Link href="/Teachers">Our Staff</Link>
              </li>
              <li className="hover:font-semibold hover:text-red-600">
                <Link href="/ContactUs">FAQs</Link>
              </li>
              <li className="hover:font-semibold hover:text-red-600">
                <Link href="/Blog">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <h2 className="text-center mb-8 font-bold text-red-700 text-lg border-b-2 border-neutral-500">
              Top Courses
            </h2>
            <ul className="flex flex-col items-center gap-2 text-gray-500">
              <Link href="/JLPTN1">
                <li className="hover:font-semibold hover:text-red-600">
                  JLPT N1 Course
                </li>
              </Link>

              <Link href="/JLPTN2">
                <li className="hover:font-semibold hover:text-red-600">
                  JLPT N2 Course
                </li>
              </Link>

              <Link href="/JLPTN4">
                <li className="hover:font-semibold hover:text-red-600">
                  JLPT N4 Course
                </li>
              </Link>

              <Link href="/ChildCourse">
                <li className="hover:font-semibold hover:text-red-600">
                  Japanese for Children
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <h2 className="text-center mb-8 font-bold text-red-700 text-lg border-b-2 border-neutral-500">
              Follow Us
            </h2>
            <ul className="flex flex-col items-center gap-2 text-gray-500">
              <li className="flex hover:font-semibold hover:text-red-600">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-4 mr-2"
                  style={{ color: "red" }}
                />
                Facebook
              </li>
              <li className="flex hover:font-semibold hover:text-red-600">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-4 mr-2"
                  style={{ color: "red" }}
                />
                Instagram
              </li>
              <li className="flex hover:font-semibold hover:text-red-600">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-4 mr-2"
                  style={{ color: "red" }}
                />
                Twitter
              </li>
              <li className="flex hover:font-semibold hover:text-red-600">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="w-4 mr-2"
                  style={{ color: "red" }}
                />
                Discord
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        Developed by
        <span className="text-red-800 px-1 font-semibold">
          Yasuko Miyazawa
        </span>{" "}
        | All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
