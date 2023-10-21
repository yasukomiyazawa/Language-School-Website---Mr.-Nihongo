import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost15 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog15.png"
        authorImg="/blogPost15.png"
        authorName="Priya Sharma"
        authorDesc="Priya, an expert in cultural etiquette, guides learners through essential Japanese customs, 
        enhancing their understanding of Japanese society and promoting respectful interactions."
        title="Japanese Etiquette: Navigating Social Norms with Confidence"
        date="January 8, 2023"
        time="2:15 PM"
        articleP1="This article serves as a comprehensive guide to navigating the intricate world of Japanese etiquette, 
        emphasizing the values of respect, harmony, and grace deeply ingrained in Japanese society. It delves into 
        the art of bowing, a fundamental aspect of Japanese customs, where the depth of the bow communicates varying 
        levels of formality and respect. From a casual nod for friendly encounters to a profound 45-degree bow for 
        highly formal occasions, understanding these nuances is essential for seamless social interactions. Additionally, 
        the article explores Japanese dining etiquette, highlighting the respectful use of chopsticks and the appreciation 
        of slurping noodles as a sign of enjoyment. When it comes to receiving gifts, expressing gratitude and waiting to 
        open them symbolize respect for the giver's feelings, reflecting the cultural significance of these gestures."
        articleP2="Furthermore, the article sheds light on the importance of language honorifics, such as '-san,' '-sama,' 
        and '-sensei,' in polite communication. Mastering these linguistic nuances not only enriches conversations but 
        also showcases cultural understanding and respect for others' status and position. By embracing these customs, 
        learners can effectively integrate into Japanese society, fostering authentic and respectful interactions both 
        in language and social settings. Emphasizing the blend of tradition and respect in Japanese customs, this article 
        offers invaluable insights for learners seeking to engage respectfully and authentically within the Japanese 
        cultural framework."
        b1={
          <BlogCards
            blogImg="/blog1.png"
            blogTitle="
            10 Common Misconceptions About Learning Japanese"
            author="Emily Davis"
            date="October 8, 2023"
            blogLink="/blogPost1"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog2.png"
            blogTitle="
            How to Choose the Right Japanese Language Course for You"
            author="Hiroshi Yamamoto"
            date="September 22, 2023"
            blogLink="/blogPost2"
          />
        }
        b3={
          <BlogCards
            blogImg="/blog3.png"
            blogTitle="
            Tips for Mastering Japanese Pronunciation"
            author="Aiko Nakamura"
            date="August 5, 2023"
            blogLink="/blogPost2"
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost15;
