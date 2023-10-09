import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import "app/globals.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-lg:hidden px-24 shadow-2xl sticky top-0 w-full bg-white bg-opacity-80 z-10">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={250}
          height={15}
          className="w-40 h-auto py-3"
        ></Image>
      </Link>

      <div className="flex gap-10 items-center">
        <Link
          href="/"
          className="text-lg text-gray-500 hover:font-semibold hover:text-red-700"
          passHref
        >
          Home
        </Link>
        <Link
          href="/Courses"
          className="text-lg text-gray-500 hover:font-semibold hover:text-red-700"
          passHref
        >
          Courses
        </Link>
        <Link
          href="/AboutUs"
          className="text-lg text-gray-500 hover:font-semibold hover:text-red-700"
          passHref
        >
          About Us
        </Link>
        <Link
          href="/Blog"
          className="text-lg text-gray-500 hover:font-semibold hover:text-red-700"
          passHref
        >
          Blog
        </Link>
        <Link
          href="/ContactUs"
          className="text-lg text-gray-500 hover:font-semibold hover:text-red-700"
          passHref
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
