import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost5 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog5.png"
        authorImg="/blogPost5.png"
        authorName="Aisha Patel"
        authorDesc="Aisha, a language coach and pronunciation expert, specializes 
        in helping learners master the nuances of Japanese pronunciation. Her practical 
        exercises empower readers to speak Japanese with confidence and authenticity."
        title="Top 10 Must-Visit Places in Japan for Language Enthusiasts"
        date="July 2, 2023"
        time="9:30 AM"
        articleP1="Japan’s enchanting landscapes and vibrant cities offer language enthusiasts 
        a unique opportunity to immerse themselves in linguistic and cultural exploration. 
        This article unveils ten must-visit places that cater to language learners seeking 
        authentic experiences. From the historic charm of Kyoto's temples to the bustling streets 
        of Tokyo, each location offers a distinct language encounter. Language cafes and conversation 
        meetups are abundant, providing learners with the chance to practice Japanese with native 
        speakers in relaxed settings."
        articleP2="The article explores language-focused experiences, such as homestays with 
        local families, language exchange events, and cultural workshops. These immersive 
        encounters allow travelers to not only enhance their language skills but also gain 
        profound insights into Japanese customs and traditions. Whether you're exploring the 
        serene beauty of Mount Fuji or navigating the bustling markets of Osaka, these destinations 
        provide a linguistic adventure, making your journey through Japan an unforgettable and 
        enriching language experience."
        b1={
          <BlogCards
            blogImg="/blog6.png"
            blogTitle="
            How Learning Japanese Can Boost Your Career Opportunities"
            author="Aisha Patel"
            date="Jul 2, 2023"
            blogLink="/blogPost6"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog7.png"
            blogTitle="
            Famous Japanese Literature: A Gateway to Language and Culture"
            author="Riko Yoshida"
            date="June 26, 2023"
            blogLink="/blogPost7"
          />
        }
        b3={
          <BlogCards
            blogImg="/blog8.png"
            blogTitle="
            Survival Japanese: Essential Phrases for Travelers"
            author="Sofia Silva"
            date="May 10, 2023"
            blogLink="/blogPost8"
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost5;
