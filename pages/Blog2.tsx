import { BlogCards, Footer, Navbar, PageHeader } from "@/components";
import { fa1, fa2, fa3, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Blog2 = () => {
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

      <div>
        <div className="col-span-4 mx-48 mb-10 flex flex-col gap-4">
          <BlogCards
            blogImg="/blog6.png"
            blogTitle="How Learning Japanese Can Boost Your Career Opportunities"
            author="Liam O'Connor"
            date="June 15, 2023"
            desc="Discuss the professional advantages of learning Japanese, including job opportunities, business connections, and cultural understanding in the global market."
          />

          <BlogCards
            blogImg="/blog7.png"
            blogTitle="Famous Japanese Literature: A Gateway to Language and Culture"
            author="Riko Yoshida"
            date="June 26, 2023"
            desc="Introduce classic Japanese literary works and authors, encouraging language learners to explore Japanese literature as a means of improving language skills and cultural understanding."
          />

          <BlogCards
            blogImg="/blog8.png"
            blogTitle="Survival Japanese: Essential Phrases for Travelers"
            author="Sofia Silva"
            date="May 10, 2023"
            desc="Compile a list of essential Japanese phrases and expressions for travelers, focusing on practical language skills to navigate various situations in Japan."
          />

          <BlogCards
            blogImg="/blog9.png"
            blogTitle="Japanese Language Learning Apps: A Comprehensive Review"
            author="Alex Thompson"
            date="April 28, 2023"
            desc="Review popular language learning apps tailored for Japanese learners, highlighting their features, pros, and cons to help readers make informed choices."
          />

          <BlogCards
            blogImg="/blog10.png"
            blogTitle="The Beauty of Japanese Calligraphy: History and Technique"
            author="Haruki Tanaka"
            date="April 12, 2023"
            desc="Explore the art of Japanese calligraphy, its historical significance, and provide insights into basic techniques for interested readers."
          />
        </div>

        <div className="flex justify-center gap-2 mb-4">
          <Link href="/Blog">
            <FontAwesomeIcon
              icon={fa1}
              className="border border-gray-50 p-3 bg-gray-400 text-black hover:bg-red-800 hover:text-white"
            />
          </Link>

          <Link href="/Blog2">
            <FontAwesomeIcon
              icon={fa2}
              className="border border-gray-50 p-3 bg-red-800 text-white"
            />
          </Link>

          <Link href="/Blog3">
            <FontAwesomeIcon
              icon={fa3}
              className="border border-gray-50 p-3 bg-gray-400 text-black hover:bg-red-800 hover:text-white"
            />
          </Link>

          <Link href="/Blog3">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="border border-gray-50 p-3 bg-red-800 text-white"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog2;
