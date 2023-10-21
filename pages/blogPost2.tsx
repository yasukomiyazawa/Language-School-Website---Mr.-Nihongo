import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost2 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog2.png"
        authorImg="/blogPost2.png"
        authorName="Hiroshi Yamamoto"
        authorDesc="Meet Hiroshi Yamamoto, your companion on the 
        journey to master Japanese. With a deep understanding of 
        the language and a passion for teaching, Hiroshi simplifies 
        the complexities of Japanese, making learning accessible and 
        engaging for all."
        title="How to Choose the Right Japanese Language Course for You"
        date="September 22, 2023"
        time="11:30 AM"
        articleP1="Choosing a Japanese language course is a pivotal decision that shapes your 
        learning journey. This article guides you through the intricate process, shedding light 
        on often overlooked aspects. Class size, a factor often underestimated, greatly impacts
        individual attention and participation. Smaller classes encourage active engagement and 
        personalized feedback, essential for language acquisition. Teaching methods also play a 
        vital role. Courses incorporating immersive techniques, cultural experiences, and 
        interactive learning foster a dynamic and engaging environment."
        articleP2="Cultural immersion is another key factor. A course integrating cultural 
        understanding alongside language instruction enhances overall comprehension and appreciation. 
        Flexibility in the curriculum allows tailored learning, accommodating diverse learning styles
        and preferences. Whether you prefer structured lessons or self-paced study, the right course 
        adjusts to your needs. This article emphasizes the significance of evaluating these elements, 
        empowering you to make an informed choice. By understanding these nuances, you embark on a 
        Japanese language journey perfectly aligned with your goals, ensuring a fulfilling and enriching 
        experience."
        b1={
          <BlogCards
            blogImg="/blog3.png"
            blogTitle="Tips for Mastering Japanese Pronunciation"
            author="Aiko Nakamura"
            date="August 5, 2023"
            blogLink="/blogPost3"
          />
        }
        b2={
          <BlogCards
            blogImg="/blog4.png"
            blogTitle="Exploring Japanese Culture: Traditional vs. Modern Influences"
            author="Carlos Hernandez"
            date="July 20, 2023"
            blogLink=""
          />
        }
        b3={
          <BlogCards
            blogImg="/blog5.png"
            blogTitle="
            Top 10 Must-Visit Places in Japan for Language Enthusiasts"
            author="Aisha Patel"
            date="Jul 2, 2023"
            blogLink=""
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost2;
