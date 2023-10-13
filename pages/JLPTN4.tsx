import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const JLPTN4 = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="JLPT N4 Course"
        coursePic="/conversationCourse.png"
        courseOverview="The JLPT Level 4 Course is ideal for learners at 
        the basic-intermediate level. It covers foundational language skills 
        such as basic speaking, listening, reading, and writing. Through 
        interactive lessons and practical exercises, participants develop 
        a strong foundation in Japanese communication. This course focuses 
        on mastering essential greetings, everyday conversations, and basic 
        written expressions, enabling learners to navigate everyday situations 
        confidently."
        price="95k"
      />

      <Footer />
    </div>
  );
};

export default JLPTN4;
