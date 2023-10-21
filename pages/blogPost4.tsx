import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost4 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog4.png"
        authorImg="/blogPost4.png"
        authorName="Carlos Hernandez"
        authorDesc="Carlos, a language enthusiast and avid traveler, draws from his 
        diverse cultural experiences to provide valuable insights into selecting the perfect 
        Japanese language course. His expertise helps readers make informed decisions about 
        their language learning paths."
        title="Exploring Japanese Culture: Traditional vs. Modern Influences"
        date="July 20, 2023"
        time="2:45 PM"
        articleP1="Japan's cultural landscape is a harmonious blend of tradition and modernity, 
        and this article takes readers on a captivating journey through the intertwined threads 
        of the past and present. Traditional customs, such as tea ceremonies and festivals, 
        continue to hold profound cultural significance, coexisting seamlessly with contemporary 
        trends like anime and technology. Understanding these dual influences provides valuable 
        insights into Japan's societal norms and values."
        articleP2="The article delves into iconic aspects of both traditional and modern Japanese 
        culture, exploring the symbolism behind traditional art forms like Ikebana (flower arrangement) 
        and the creative innovations of contemporary artists. By examining the evolution of traditional 
        crafts in the digital age and the fusion of ancient mythology in modern storytelling, readers 
        gain a comprehensive understanding of Japan's cultural evolution. This exploration fosters a 
        deep appreciation for Japan's rich heritage and its ability to adapt and thrive in the face of 
        global influences. Whether you're an art enthusiast, a history buff, or a language learner, 
        this article offers a holistic perspective on Japan's cultural tapestry, enriching your 
        understanding of the country and its people."
        b1={
          <BlogCards
            blogImg="/blog5.png"
            blogTitle="
            Top 10 Must-Visit Places in Japan for Language Enthusiasts"
            author="Aisha Patel"
            date="Jul 2, 2023"
            blogLink=""
          />
        }
        b2={
          <BlogCards
            blogImg="/blog6.png"
            blogTitle="
            How Learning Japanese Can Boost Your Career Opportunities"
            author="Aisha Patel"
            date="Jul 2, 2023"
            blogLink=""
          />
        }
        b3={
          <BlogCards
            blogImg="/blog7.png"
            blogTitle="
            Famous Japanese Literature: A Gateway to Language and Culture"
            author="Riko Yoshida"
            date="June 26, 2023"
            blogLink=""
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost4;
