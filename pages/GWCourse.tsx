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
        courseOverview="Mr. Eigo’s English Grammar and Writing Proficiency course is a comprehensive program dedicated to 
        strengthening grammar rules and writing skills. Through systematic lessons, students delve into topics such as 
        sentence structure, punctuation, and paragraph development. Practical exercises challenge learners to apply their knowledge, 
        refining their language proficiency and ensuring clarity and coherence in their written communication. Students practice 
        crafting various forms of writing, from essays and emails to reports, receiving detailed feedback to enhance their skills further. 
        By focusing on the intricacies of grammar and the art of composition, students emerge from the course with a mastery of written 
        English, capable of conveying their thoughts with precision and eloquence."
        price="95k"
      />

      <Footer />
    </div>
  );
};

export default GWCourse;
