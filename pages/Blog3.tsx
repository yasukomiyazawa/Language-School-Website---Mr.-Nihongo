import { BlogCards, Footer, Navbar, PageHeader } from "@/components";
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Blog3 = () => {
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
            blogImg="/blog11.png"
            blogTitle="Fun Ways to Practice Japanese Outside the Classroom"
            author="Amir Khan"
            date="March 25, 2023"
            desc="Provide creative and enjoyable methods for learners to practice Japanese in their daily lives, such as language exchange events, apps, and cultural activities."
          />

          <BlogCards
            blogImg="/blog12.png"
            blogTitle="Overcoming Challenges in Learning Japanese: Stories of Success"
            author="Andrei Popov"
            date="March 8, 2023"
            desc="Share inspiring stories of individuals who successfully overcame challenges while learning Japanese, offering motivation and tips for readers facing similar struggles."
          />

          <BlogCards
            blogImg="/blog13.png"
            blogTitle="Japanese Language and Pop Culture: Bridging the Gap for Global Fans"
            author="Lara Müller"
            date="February 15, 2023"
            desc="Explore the influence of Japanese pop culture, including anime, manga, and J-pop, on language learners worldwide."
          />

          <BlogCards
            blogImg="/blog14.png"
            blogTitle="Mastering Kanji: Strategies for Efficient Learning"
            author="Chen Wei"
            date="January 20, 2023"
            desc="Provide effective techniques and resources for mastering Kanji characters, one of the most challenging aspects of learning Japanese."
          />

          <BlogCards
            blogImg="/blog15.png"
            blogTitle="Japanese Etiquette: Navigating Social Norms with Confidence"
            author="Priya Sharma"
            date="January 8, 2023"
            desc="Guide learners through essential Japanese etiquette, including bowing, gift-giving, and dining customs."
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
              className="border border-gray-50 p-3 bg-gray-400 text-black hover:bg-red-800 hover:text-white"
            />
          </Link>

          <Link href="/Blog3">
            <FontAwesomeIcon
              icon={fa3}
              className="border border-gray-50 p-3 bg-red-800 text-white"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog3;
