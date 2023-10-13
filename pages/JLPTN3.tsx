import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const JLPTN3 = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="JLPT N3 Course"
        coursePic="/examCourse.png"
        courseOverview="Our JLPT Level 3 Course is designed to elevate 
        learners' proficiency to an intermediate level. This course offers 
        comprehensive training in speaking, listening, reading, and writing.
        With a focus on enhancing both depth and breadth of language skills, 
        participants gain the confidence needed to engage effectively in 
        various Japanese-speaking environments. Expert tutors provide 
        individualized attention, enabling learners to identify strengths 
        and areas for improvement, leading to language proficiency and 
        communication success."
        price="100k"
      />

      <Footer />
    </div>
  );
};

export default JLPTN3;
