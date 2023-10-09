import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";

const Blog = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Footer />
    </div>
  );
};

export default Blog;
