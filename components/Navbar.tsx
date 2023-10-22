"use client";

import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import "app/globals.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [coursesBar, setCoursesBar] = useState(false);

  const toggleCoursesBar = () => {
    setCoursesBar(true);
  };

  const closeCoursesBar = () => {
    setCoursesBar(false);
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <nav className="flex justify-between max-lg:hidden px-24 shadow-2xl sticky top-0 w-full bg-white bg-opacity-80 z-10">
        <Link href="/">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={250}
            height={15}
            className="w-44 h-auto py-3"
          ></Image>
        </Link>

        <div className="flex gap-10 items-center">
          <Link
            href="/"
            className="text-lg text-gray-500 hover:font-semibold hover:text-red-700 hover:underline hover:underline-offset-8"
            passHref
          >
            Home
          </Link>

          <div onMouseOver={toggleCoursesBar} onMouseLeave={closeCoursesBar}>
            <Link
              href="/Courses"
              className="text-lg text-gray-500 hover:font-semibold hover:text-red-700 hover:underline hover:underline-offset-8"
              passHref
            >
              Courses
            </Link>
            {coursesBar && (
              <div className="absolute bg-white">
                <ul className="flex flex-col gap-5 px-3 mt-4 shadow-md">
                  <Link href="/JLPTN1">
                    <li className="cursor-pointer hover:font-semibold hover:text-red-800">
                      JLPT N1 Course
                    </li>
                  </Link>
                  <Link href="/JLPTN2">
                    <li className="cursor-pointer hover:font-semibold hover:text-red-800">
                      JLPT N2 Course
                    </li>
                  </Link>
                  <Link href="/JLPTN3">
                    <li className="cursor-pointer hover:font-semibold hover:text-red-800">
                      JLPT N3 Course
                    </li>
                  </Link>
                  <Link href="/JLPTN4">
                    <li className="cursor-pointer hover:font-semibold hover:text-red-800">
                      JLPT N4 Course
                    </li>
                  </Link>
                  <Link href="/JLPTN5">
                    <li className="cursor-pointer hover:font-semibold hover:text-red-800">
                      JLPT N5 Course
                    </li>
                  </Link>
                  <Link href="/ChildCourse">
                    <li className="cursor-pointer hover:font-semibold hover:text-red-800">
                      Japanese for Children
                    </li>
                  </Link>
                  <Link href="/GWCourse">
                    <li className="cursor-pointer hover:font-semibold hover:text-red-800">
                      Grammar and Writing Proficiency
                    </li>
                  </Link>
                  <Link href="/PICourse">
                    <li className="cursor-pointer hover:font-semibold hover:text-red-800 mb-4">
                      Pronunciation Improvement
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/AboutUs"
            className="text-lg text-gray-500 hover:font-semibold hover:text-red-700 hover:underline hover:underline-offset-8"
            passHref
          >
            About Us
          </Link>
          <Link
            href="/Blog"
            className="text-lg text-gray-500 hover:font-semibold hover:text-red-700 hover:underline hover:underline-offset-8"
            passHref
          >
            Blog
          </Link>
          <Link
            href="/ContactUs"
            className="text-lg text-gray-500 hover:font-semibold hover:text-red-700 hover:underline hover:underline-offset-8"
            passHref
          >
            Contact Us
          </Link>
        </div>
      </nav>

      <nav className="flex justify-between items-center lg:hidden max-sm:px-3 max-md:px-10 px-20 shadow-2xl sticky top-0 w-full bg-white bg-opacity-80 z-10">
        <Link href="/">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={250}
            height={15}
            className="w-44 h-auto py-3"
          ></Image>
        </Link>

        <div>
          <div className="flex justify center">
            <FontAwesomeIcon
              onClick={toggleMobileMenu}
              icon={faBars}
              className="flex w-full h-8"
            />
          </div>

          {mobileMenu && (
            <div className="flex flex-col justify-center gap-16 items-center absolute top-16 w-full right-0 h-screen bg-red-800 text-white">
              <Link
                href="/"
                className="text-2xl hover:font-semibold hover:text-yellow-600"
                passHref
              >
                Home
              </Link>

              <div>
                <Link
                  href="/Courses"
                  className="text-2xl hover:font-semibold hover:text-yellow-600"
                  passHref
                >
                  Courses
                </Link>
              </div>

              <Link
                href="/AboutUs"
                className="text-2xl hover:font-semibold hover:text-yellow-600"
                passHref
              >
                About Us
              </Link>
              <Link
                href="/Blog"
                className="text-2xl hover:font-semibold hover:text-yellow-600"
                passHref
              >
                Blog
              </Link>
              <Link
                href="/ContactUs"
                className="text-2xl hover:font-semibold hover:text-yellow-600"
                passHref
              >
                Contact Us
              </Link>

              <FontAwesomeIcon
                onClick={closeMobileMenu}
                icon={faMultiply}
                className=" text-white w-8 h-8"
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
