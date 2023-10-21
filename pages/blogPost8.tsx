import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost8 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog8.png"
        authorImg="/blogPost8.png"
        authorName="Sofia Silva"
        authorDesc="A seasoned traveler and language enthusiast, Soafia compiles essential Japanese 
        phrases and expressions for travelers, focusing on practical language skills to navigate 
        various situations in Japan."
        title="Survival Japanese: Essential Phrases for Travelers"
        date="May 10, 2023"
        time="9:40 AM"
        articleP1="Traveling to Japan is a thrilling adventure, and this article equips readers with 
        essential Japanese phrases to navigate the country comfortably. From greetings and polite 
        expressions to asking for directions and ordering food, these survival phrases are indispensable 
        for travelers. The article provides practical pronunciation tips, ensuring travelers can 
        communicate effectively and respectfully in various situations."
        articleP2="Additionally, the article explores cultural nuances, emphasizing the significance of 
        polite language forms in Japanese interactions. Understanding the etiquette of bowing and using 
        honorifics adds depth to travelers' cultural experiences. The article also offers insights into 
        common customs, such as removing shoes indoors and using cash for transactions. Armed with these 
        essential phrases and cultural awareness, travelers can immerse themselves in Japan's rich culture, 
        connect with locals, and make their journey a seamless and enriching experience."
        b1={
          <BlogCards
            blogImg="/blog9.png"
            blogTitle="
            Japanese Language Learning Apps: A Comprehensive Review"
            author="Alex Thompson"
            date="April 28, 2023"
            blogLink="/blogPost9"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog10.png"
            blogTitle="
            The Beauty of Japanese Calligraphy: History and Technique"
            author="Haruki Tanaka"
            date="April 12, 2023"
            blogLink="/blogPost10"
          />
        }
        b3={
          <BlogCards
            blogImg="/blog11.png"
            blogTitle="
            Fun Ways to Practice Japanese Outside the Classroom"
            author="Amir Khan"
            date="March 25, 2023"
            blogLink="/blogPost11"
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost8;
