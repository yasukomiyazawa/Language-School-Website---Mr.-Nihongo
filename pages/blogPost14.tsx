import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost14 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog14.png"
        authorImg="/blogPost14.png"
        authorName="Chen Wei"
        authorDesc="Chen, a Kanji expert, shares efficient techniques for mastering Kanji characters, helping learners 
        memorize, read, and write Kanji confidently."
        title="Mastering Kanji: Strategies for Efficient Learning"
        date="January 20, 2023"
        time="10:25 AM"
        articleP1="Kanji, the intricate characters borrowed from Chinese, are central to Japanese writing. This article 
        provides strategic approaches for mastering Kanji, a daunting yet essential aspect of learning the language. 
        The article explores mnemonic techniques, where learners associate characters with vivid images or stories, 
        enhancing memorization. Understanding radicals, the building blocks of Kanji, simplifies complex characters, 
        making them more approachable for learners."
        articleP2="The article also delves into spaced repetition systems (SRS), digital tools that optimize Kanji 
        practice by emphasizing weak points in learners' memory. Writing practice reinforces recognition and stroke 
        order, crucial for developing a strong foundation. The article emphasizes context-based learning, where Kanji 
        is learned within words and phrases, demonstrating its practical use in everyday communication. By combining 
        these methods, learners systematically approach Kanji acquisition, transforming what seems overwhelming into 
        an achievable and rewarding endeavor."
        b1={
          <BlogCards
            blogImg="/blog15.png"
            blogTitle="
            Japanese Etiquette: Navigating Social Norms with Confidence"
            author="Priya Sharma"
            date="January 8, 2023"
            blogLink=""
          />
        }
        b2={
          <BlogCards
            blogImg="/blog1.png"
            blogTitle="
            10 Common Misconceptions About Learning Japanese"
            author="Emily Davis"
            date="October 8, 2023"
            blogLink=""
          />
        }
        b3={
          <BlogCards
            blogImg="/blog2.png"
            blogTitle="
            How to Choose the Right Japanese Language Course for You"
            author="Hiroshi Yamamoto"
            date="September 22, 2023"
            blogLink=""
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost14;
