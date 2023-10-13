import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const PICourse = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="Pronunciation Improvement"
        coursePic="/talkCourse.png"
        courseOverview="Our Pronunciation and Accent Improvement course 
        assist learners in refining their Japanese pronunciation, intonation, 
        and accent. Participants engage in targeted exercises addressing 
        vowel and consonant sounds, stress patterns, and speech rhythm. 
        Through interactive drills and speaking exercises, students enhance 
        their oral communication skills, making their speech more fluent 
        and easily understandable. The course places a strong emphasis on 
        real-life applications, ensuring learners can confidently communicate 
        in various Japanese-speaking settings."
        price="95k"
      />

      <Footer />
    </div>
  );
};

export default PICourse;
