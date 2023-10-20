import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";
import BlogCards from "@/components/BlogCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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

      <div>
        <div className="col-span-4 mx-48 mb-10 flex flex-col gap-4">
          <BlogCards
            blogImg="/blog1.png"
            blogTitle="10 Common Misconceptions About Learning Japanese"
            author="Emily Davis"
            date="October 8, 2023"
            desc="Discover and debunk common myths about learning Japanese, providing encouragement and motivation for potential learners."
          />

          <BlogCards
            blogImg="/blog2.png"
            blogTitle="How to Choose the Right Japanese Language Course for You"
            author="Hiroshi Yamamoto"
            date="September 22, 2023"
            desc="Guide readers on factors to consider when selecting a Japanese language course, including class size, teaching methods, and course duration."
          />

          <BlogCards
            blogImg="/blog3.png"
            blogTitle="Tips for Mastering Japanese Pronunciation"
            author="Aiko Nakamura"
            date="August 5, 2023"
            desc="Offer practical advice and exercises to help learners improve their Japanese pronunciation and sound more natural when speaking."
          />

          <BlogCards
            blogImg="/blog4.png"
            blogTitle="Exploring Japanese Culture: Traditional vs. Modern Influences"
            author="Carlos Hernandez"
            date="July 20, 2023"
            desc="Highlight the unique blend of traditional and modern aspects of Japanese culture, encouraging cultural understanding among language learners."
          />

          <BlogCards
            blogImg="/blog5.png"
            blogTitle="Top 10 Must-Visit Places in Japan for Language Enthusiasts"
            author="Aisha Patel"
            date="July 2, 2023"
            desc="Introduce readers to iconic locations in Japan, emphasizing the linguistic and cultural experiences each place offers to language enthusiasts."
          />
        </div>

        <div className="flex justify-center gap-2 mb-4">
          <Link href="/Blog">
            <FontAwesomeIcon
              icon={fa1}
              className="border border-gray-50 p-3 bg-red-800 text-white"
            />
          </Link>

          <Link href="/Blog2">
            <FontAwesomeIcon
              icon={fa2}
              className="border border-gray-50 p-3 bg-gray-400 text-black hover:bg-red-800 hover:text-white"
            />
          </Link>

          <Link href="/Blog3">
            <FontAwesomeIcon
              icon={fa3}
              className="border border-gray-50 p-3 bg-gray-400 text-black hover:bg-red-800 hover:text-white"
            />
          </Link>

          <Link href="/Blog2">
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

export default Blog;
