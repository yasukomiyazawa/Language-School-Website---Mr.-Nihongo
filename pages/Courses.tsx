import React from "react";
import { Navbar, Footer } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";

const Courses = () => {
  return (
    <div className="flex w-full min-h-screen flex-col">
      <Navbar />
      <PageHeader title="Courses" />
      <Footer />
    </div>
  );
};

export default Courses;
