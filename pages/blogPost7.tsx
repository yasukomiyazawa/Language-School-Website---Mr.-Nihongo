import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost7 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog7.png"
        authorImg="/blogPost7.png"
        authorName="Riko Yoshida"
        authorDesc="Riko,   a literature lover and language educator, invites readers 
        into the world of Japanese literature. Her exploration of classic works serves as 
        a gateway for language learners, enhancing their language skills and cultural understanding."
        title="Famous Japanese Literature: A Gateway to Language and Culture"
        date="June 26, 2023"
        time="9:40 AM"
        articleP1="Japanese literature offers a captivating gateway to language learning and 
        cultural exploration. This article introduces readers to renowned Japanese literary works 
        and authors, encouraging language learners to explore these treasures. From classic 
        masterpieces like 'The Tale of Genji' to contemporary novels by Haruki Murakami, 
        Japanese literature reflects the country's history, societal norms, and artistic creativity."
        articleP2="The article delves into the themes, styles, and cultural contexts of iconic 
        literary works, providing readers with a deeper understanding of Japan's literary landscape. 
        By exploring these texts, language learners enhance their vocabulary, comprehension, and 
        cultural knowledge. The article also emphasizes the availability of translated versions, 
        enabling non-native readers to enjoy these literary gems. Whether you're a language enthusiast 
        or a book lover, delving into Japanese literature enriches your language learning journey, 
        offering profound insights into Japan's literary heritage and the intricacies of the language."
        b1={
          <BlogCards
            blogImg="/blog8.png"
            blogTitle="
            Survival Japanese: Essential Phrases for Travelers"
            author="Sofia Silva"
            date="May 10, 2023"
            blogLink="/blogPost8"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog9.png"
            blogTitle="
            Japanese Language Learning Apps: A Comprehensive Review"
            author="Alex Thompson"
            date="April 28, 2023"
            blogLink="/blogPost9"
          />
        }
        b3={
          <BlogCards
            blogImg="/blog10.png"
            blogTitle="
            The Beauty of Japanese Calligraphy: History and Technique"
            author="Haruki Tanaka"
            date="April 12, 2023"
            blogLink="/blogPost10"
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost7;
