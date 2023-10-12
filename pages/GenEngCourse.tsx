import { CourseInfo, Footer, Navbar } from "@/components";
import React from "react";

const GenEngCourse = () => {
  return (
    <div>
      <Navbar />
      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="General English"
        coursePic="/genCourse.png"
        courseOverview="The General English Courses at Mr. Eigo are meticulously designed to cater to learners of all levels, 
        spanning from beginners to advanced proficiency. These courses serve as the cornerstone for building a robust foundation 
        in English communication, covering essential language skills such as speaking, listening, reading, and writing. 
        Through engaging activities, interactive lessons, and immersive language exercises, students develop fluency and confidence
        in using English in various everyday situations. The curriculum is thoughtfully crafted, integrating real-life scenarios to 
        enhance practical language skills. Whether mastering basic greetings or delving into complex conversations, learners are guided 
        through a comprehensive journey that equips them with the linguistic tools needed to navigate the global landscape effectively."
        price="90k"
      />
      <Footer />
    </div>
  );
};

export default GenEngCourse;
