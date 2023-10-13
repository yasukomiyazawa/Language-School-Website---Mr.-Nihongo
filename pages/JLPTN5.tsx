import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const JLPTN5 = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="JLPT N5 Course"
        coursePic="/LC.png"
        courseOverview="Our JLPT Level 5 Course is tailored for beginners 
        eager to learn Japanese from scratch. This course focuses on 
        fundamental language skills, including basic speaking, listening, 
        reading, and writing. Participants engage in immersive activities 
        and age-appropriate materials, fostering confidence in expressing 
        themselves. The curriculum enhances conversational abilities, 
        cultural understanding, and overall language proficiency in a 
        positive and stimulating environment."
        price="90k"
      />

      <Footer />
    </div>
  );
};

export default JLPTN5;
