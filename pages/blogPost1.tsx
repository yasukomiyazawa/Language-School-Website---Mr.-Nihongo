import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost1 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog1.png"
        authorImg="/blogPost1.png"
        authorName="Emily Davis"
        authorDesc="An enthusiastic language learner and blogger, Emily shares her experiences 
        and tips for debunking common myths about learning Japanese."
        title="10 Common Misconceptions About Learning Japanese"
        date="October 8, 2023"
        time="10:00 AM"
        articleP1="Learning Japanese is often shrouded in myths that deter potential learners. 
        This article dispels these misconceptions, addressing ten common beliefs that might 
        be holding you back. One prevalent myth is the idea that Japanese characters are 
        impossibly intricate. While Kanji might seem daunting, understanding its systematic 
        structure breaks down this complexity. Another misconception is the belief that fluency 
        demands immersion in Japan. While living in Japan provides cultural exposure, online 
        resources, language apps, and language exchange platforms bring Japan to you, enabling 
        immersive learning from the comfort of your home."
        articleP2="Additionally, many believe Japanese is a language closed off to non-natives. 
        Contrary to this belief, Japanese communities are often supportive of language learners, 
        encouraging conversations and language practice. Another myth surrounds the perceived 
        lack of resources for learning Japanese. In reality, a plethora of textbooks, online 
        courses, and interactive apps cater to learners of all levels. This article explores 
        these and other misconceptions, providing clarity and motivation for aspiring Japanese 
        learners. By debunking these myths, we aim to inspire confidence, fostering a positive 
        attitude towards mastering this beautiful language."
        b1={
          <BlogCards
            blogImg="/blog2.png"
            blogTitle="How to Choose the Right Japanese Language Course for You"
            author="Hiroshi Yamamoto"
            date="September 22, 2023"
            blogLink="/blogPost2"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog3.png"
            blogTitle="Tips for Mastering Japanese Pronunciation"
            author="Aiko Nakamura"
            date="August 5, 2023"
            blogLink="/blogPost3"
          />
        }
        b3={
          <BlogCards
            blogImg="/blog4.png"
            blogTitle="Exploring Japanese Culture: Traditional vs. Modern Influences"
            author="Carlos Hernandez"
            date="July 20, 2023"
            blogLink="/blogPost4"
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost1;
