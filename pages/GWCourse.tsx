import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const GWCourse = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="Grammar and Writing Proficiency"
        coursePic="/writingCourse.png"
        courseOverview="Our Japanese Grammar and Writing Proficiency 
        course is a comprehensive program dedicated to strengthening 
        grammar rules and writing skills. Students delve into topics 
        such as sentence structure, punctuation, and paragraph development. 
        Practical exercises challenge learners to apply their knowledge, 
        refining their language proficiency and ensuring clarity and 
        coherence in their written communication. By focusing on grammar 
        intricacies and the art of composition, students emerge with a
        mastery of written Japanese, capable of conveying their thoughts 
        with precision and eloquence."
        price="100k"
      />

      <Footer />
    </div>
  );
};

export default GWCourse;
