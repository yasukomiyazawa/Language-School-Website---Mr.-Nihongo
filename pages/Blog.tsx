import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";

const Blog = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader title="Blogs" />
      <Footer />
    </div>
  );
};

export default Blog;
