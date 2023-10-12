import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const ChildCourse = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="Children's English"
        coursePic="/childrenCourse.png"
        courseOverview="Mr. Eigo's Children's English Course is designed with young learners in mind, providing a vibrant and interactive 
        learning experience. The course focuses on essential language skills tailored to everyday situations, including greetings, shopping, 
        dining, and social interactions. Through a variety of engaging activities, games, and age-appropriate materials, children not only
        learn English but also develop confidence in expressing themselves. The curriculum is designed to be fun and educational, ensuring 
        that children enjoy the learning process while acquiring vital language skills. By fostering a positive and stimulating environment, 
        this course enhances children's conversational abilities, cultural understanding, and overall language proficiency. Through imaginative 
        play and interactive lessons, young learners embark on a language-learning journey that lays the foundation for a lifelong love of languages."
        price="85k"
      />

      <Footer />
    </div>
  );
};

export default ChildCourse;
