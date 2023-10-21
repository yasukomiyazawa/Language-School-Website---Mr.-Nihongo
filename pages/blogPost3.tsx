import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost3 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog3.png"
        authorImg="/blogPost3.png"
        authorName="Aiko Nakamura"
        authorDesc="A dedicated linguist, Aiko specializes in pronunciation. 
        She shares practical exercises to enhance Japanese pronunciation, 
        ensuring learners sound natural and confident."
        title="Tips for Mastering Japanese Pronunciation"
        date="August 5, 2023"
        time="1:15 PM"
        articleP1="Mastering Japanese pronunciation is a crucial step towards fluency, and this 
        article provides actionable tips and techniques to help learners refine their speaking 
        skills. One common challenge is the accurate pronunciation of Japanese vowels and consonants. 
        Understanding the subtle differences in sounds, such as distinguishing between 'tsu' and 'su,' 
        can significantly enhance verbal communication. This article delves into specific exercises 
        and tongue placements that aid in perfecting these sounds, ensuring learners sound natural 
        and confident in their conversations."
        articleP2="Intonation and pitch accent are fundamental aspects of Japanese speech often 
        overlooked by learners. Japanese is a pitch-accent language, meaning that the pitch pattern 
        of a word can change its meaning. This article guides readers through the nuances of pitch 
        accent, offering practical exercises to develop a natural rhythm and intonation while speaking. 
        Additionally, the article explores the importance of mimicry and repetition in language 
        acquisition. By imitating native speakers and practicing common phrases, learners internalize 
        correct pronunciation patterns, leading to increased fluency. With these tips and dedicated 
        practice, learners can overcome pronunciation challenges, enhancing their overall language 
        proficiency and communication abilities."
        b1={
          <BlogCards
            blogImg="/blog4.png"
            blogTitle="Exploring Japanese Culture: Traditional vs. Modern Influences"
            author="Carlos Hernandez"
            date="July 20, 2023"
            blogLink=""
          />
        }
        b2={
          <BlogCards
            blogImg="/blog5.png"
            blogTitle="
            Top 10 Must-Visit Places in Japan for Language Enthusiasts"
            author="Aisha Patel"
            date="Jul 2, 2023"
            blogLink=""
          />
        }
        b3={
          <BlogCards
            blogImg="/blog6.png"
            blogTitle="
            How Learning Japanese Can Boost Your Career Opportunities"
            author="Liam O'Connor"
            date="June 15, 2023"
            blogLink=""
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost3;
