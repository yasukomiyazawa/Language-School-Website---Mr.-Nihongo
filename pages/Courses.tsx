import React from "react";
import { Navbar, Footer } from "@/components";
import "../app/globals.css";

const Courses = () => {
  return (
    <div className="flex w-full min-h-screen flex-col">
      <Navbar />
      <Footer />
    </div>
  );
};

export default Courses;
