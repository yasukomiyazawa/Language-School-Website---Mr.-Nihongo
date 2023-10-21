import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost6 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog6.png"
        authorImg="/blogPost6.png"
        authorName="Liam O'Connor"
        authorDesc="Liam,  a career expert and global business consultant, explores the 
        transformative power of learning Japanese in the professional world. His insights 
        shed light on job opportunities, business connections, and the cultural advantages 
        that come with mastering the Japanese language."
        title="How Learning Japanese Can Boost Your Career Opportunities"
        date="June 15, 2023"
        time="10:20 AM"
        articleP1="In an increasingly globalized world, language proficiency is a valuable asset, 
        and this article explores the professional advantages of learning Japanese. Japan's 
        prominent position in various industries, including technology, automotive, and entertainment, 
        makes it a lucrative market for international professionals. Proficiency in Japanese opens 
        doors to diverse career opportunities, from multinational corporations to local businesses."
        articleP2="The article delves into the impact of language skills on networking and 
        communication, highlighting how bridging the language gap fosters strong business relationships. 
        Moreover, understanding Japanese business etiquette and cultural nuances enhances one’s 
        credibility in professional settings. The article also discusses the growing demand for 
        Japanese language skills in fields such as translation, interpretation, and international 
        relations, offering language enthusiasts a wide array of career paths. By mastering Japanese, 
        professionals gain a competitive edge, positioning themselves as valuable assets in the global 
        job market and opening doors to a world of professional possibilities."
        b1={
          <BlogCards
            blogImg="/blog7.png"
            blogTitle="
            Famous Japanese Literature: A Gateway to Language and Culture"
            author="Riko Yoshida"
            date="June 26, 2023"
            blogLink="/blogPost7"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog8.png"
            blogTitle="
            Survival Japanese: Essential Phrases for Travelers"
            author="Sofia Silva"
            date="May 10, 2023"
            blogLink="/blogPost8"
          />
        }
        b3={
          <BlogCards
            blogImg="/blog9.png"
            blogTitle="
            Japanese Language Learning Apps: A Comprehensive Review"
            author="Alex Thompson"
            date="April 28, 2023"
            blogLink="/blogPost9"
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost6;
