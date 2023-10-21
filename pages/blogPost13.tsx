import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost13 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog13.png"
        authorImg="/blogPost13.png"
        authorName="Lara Müller"
        authorDesc="A pop culture enthusiast and language learner, Lara explores the influence of Japanese pop 
        culture on language learners worldwide, emphasizing the cultural exchange between Japan and other countries."
        title="Japanese Language and Pop Culture: Bridging the Gap for Global Fans"
        date="February 15, 2023"
        time="1:00 PM"
        articleP1="Japan's pop culture, including anime, manga, and J-pop, has captivated audiences worldwide. 
        This article explores the intersection of Japanese language and pop culture, highlighting how embracing 
        these cultural elements enhances language learning. For enthusiasts, immersing in anime dialogues sharpens 
        listening skills, familiarizing learners with colloquial expressions and informal language. Manga, with its 
        combination of visuals and text, aids in vocabulary acquisition, making the learning process engaging and dynamic."
        articleP2="Moreover, J-pop lyrics offer a poetic insight into Japanese language nuances. By deciphering song lyrics, 
        learners expand their understanding of grammar structures and idiomatic expressions. The article also discusses 
        language-focused anime conventions and fan communities, where enthusiasts come together to practice Japanese and 
        celebrate their shared interests. Embracing Japanese pop culture not only enriches language skills but also fosters 
        a deep appreciation for the creativity and artistic expressions of Japan, making the language learning journey both 
        educational and enjoyable."
        b1={
          <BlogCards
            blogImg="/blog14.png"
            blogTitle="
            Mastering Kanji: Strategies for Efficient Learning"
            author="Chen Wei"
            date="January 20, 2023"
            blogLink="/blogPost14"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog15.png"
            blogTitle="
            Japanese Etiquette: Navigating Social Norms with Confidence"
            author="Priya Sharma"
            date="January 8, 2023"
            blogLink="/blogPost15"
          />
        }
        b3={
          <BlogCards
            blogImg="/blog1.png"
            blogTitle="
            10 Common Misconceptions About Learning Japanese"
            author="Emily Davis"
            date="October 8, 2023"
            blogLink="/blogPost1"
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost13;
