import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const CFCourse = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="Conversation and Fluency"
        coursePic="/conversationCourse.png"
        courseOverview="Mr. Eigo’s Conversation and Fluency Courses are dynamic and interactive, designed to enhance learners' 
        spoken English fluency and confidence in diverse real-life situations. Through engaging activities such as interactive 
        discussions, role-playing, debates, and practical exercises, participants develop their conversational skills, pronunciation, 
        and cultural awareness. The courses are crafted to create a supportive and immersive learning environment where learners feel 
        comfortable experimenting with the language. By practicing in authentic conversational contexts, students gain the ability to 
        express themselves articulately and spontaneously. These courses not only focus on linguistic proficiency but also nurture the 
        cultural understanding necessary for effective communication in various English-speaking environments, both formal and informal."
        price="95k"
      />

      <Footer />
    </div>
  );
};

export default CFCourse;
