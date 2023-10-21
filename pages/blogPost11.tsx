import { BlogCards, Footer, Navbar } from "@/components";
import BlogPost from "@/components/BlogPost";
import React from "react";

const blogPost11 = () => {
  return (
    <>
      <Navbar />

      <BlogPost
        blogImg="/blog11.png"
        authorImg="/blogPost11.png"
        authorName="Amir Khan"
        authorDesc="A language educator and cultural enthusiast, Amir shares creative methods for 
        practicing Japanese in daily life, encouraging learners to engage in language exchange events, 
        apps, and cultural activities."
        title="Fun Ways to Practice Japanese Outside the Classroom"
        date="March 25, 2023"
        time="4:05 PM"
        articleP1="Language learning extends beyond textbooks and classrooms, and this article 
        presents creative and enjoyable ways to practice Japanese in everyday life. From language 
        exchange meetups to language learning apps, learners have access to diverse resources that 
        facilitate continuous practice. Joining conversation clubs and attending cultural events 
        not only provide language practice but also introduce learners to native speakers and 
        fellow enthusiasts."
        articleP2="The article explores interactive language apps that offer gamified exercises, 
        making learning engaging and rewarding. Additionally, cultural activities such as cooking 
        classes and traditional tea ceremonies provide immersive language experiences. Embracing 
        Japanese media, including movies, anime, and music, enhances listening skills and vocabulary. 
        The article emphasizes the importance of consistent practice, encouraging learners to 
        incorporate Japanese into their daily routines. By transforming language learning into a 
        fun and interactive journey, learners build confidence and fluency, ensuring their progress 
        goes beyond the classroom, enriching their language skills in real-world contexts."
        b1={
          <BlogCards
            blogImg="/blog12.png"
            blogTitle="
            Overcoming Challenges in Learning Japanese: Stories of Success"
            author="Andrei Popov"
            date="March 8, 2023"
            blogLink=""
          />
        }
        b2={
          <BlogCards
            blogImg="/blog13.png"
            blogTitle="
            Japanese Language and Pop Culture: Bridging the Gap for Global Fans"
            author="Lara Müller"
            date="February 15, 2023"
            blogLink=""
          />
        }
        b3={
          <BlogCards
            blogImg="/blog14.png"
            blogTitle="
            Mastering Kanji: Strategies for Efficient Learning"
            author="Chen Wei"
            date="January 20, 2023"
            blogLink=""
          />
        }
      />

      <Footer />
    </>
  );
};

export default blogPost11;
