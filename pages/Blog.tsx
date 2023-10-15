import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";

const Blog = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Blogs"
        subLine="Stay Informed with Our Language Tips and Insights"
        headerImg="/blogs.png"
        catchPhrase="Dive Into the World of Japanese Language and Culture"
        desc="Read our blogs to enhance your understanding of Japanese language nuances, 
        cultural traditions, and language learning tips. Stay updated with our insightful articles."
      />

      <Footer />
    </div>
  );
};

export default Blog;
