import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost10 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog10.png"
        authorImg="/blogPost10.png"
        authorName="Haruki Tanaka"
        authorDesc="A connoisseur of Japanese culture and a master of calligraphy, takes 
        readers on a captivating journey through the art's rich history and techniques. 
        With a deep passion for preserving tradition, Haruki's insights invite enthusiasts 
        to immerse themselves in the intricate world of Japanese calligraphy, fostering a 
        profound appreciation for this timeless art form."
        title="The Beauty of Japanese Calligraphy: History and Technique"
        date="April 12, 2023"
        time="11:50 AM"
        articleP1="Japanese calligraphy, or Shodo, is not just an art form but a profound 
        expression of cultural heritage and aesthetic beauty. This article delves into the 
        captivating world of Shodo, exploring its historical roots and intricate techniques. 
        Originating from ancient Chinese and Japanese traditions, calligraphy embodies harmony, 
        balance, and fluidity. Understanding the evolution of calligraphic styles, from classical 
        to modern, provides insight into Japan's artistic evolution."
        articleP2="The article delves into the materials and tools used in calligraphy, 
        such as brushes, ink, and traditional paper. Exploring basic techniques, stroke order, 
        and brush movements, readers gain practical insights into the art of Shodo. Moreover, 
        the article sheds light on the spiritual aspects of calligraphy, emphasizing the 
        connection between the artist, the brush, and the canvas. Through the mastery of 
        calligraphy, learners not only enhance their artistic skills but also gain a profound 
        appreciation for Japanese aesthetics and cultural symbolism. By immersing in this ancient 
        art form, enthusiasts embark on a journey of creativity, mindfulness, and cultural enrichment."
        b1={
          <BlogCards
            blogImg="/blog11.png"
            blogTitle="
            Fun Ways to Practice Japanese Outside the Classroom"
            author="Amir Khan"
            date="March 25, 2023"
            blogLink="/blogPost11"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog12.png"
            blogTitle="
            Overcoming Challenges in Learning Japanese: Stories of Success"
            author="Andrei Popov"
            date="March 8, 2023"
            blogLink="/blogPost12"
          />
        }
        b3={
          <BlogCards
            blogImg="/blog13.png"
            blogTitle="
            Japanese Language and Pop Culture: Bridging the Gap for Global Fans"
            author="Lara Müller"
            date="February 15, 2023"
            blogLink="/blogPost13"
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost10;
