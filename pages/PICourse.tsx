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
        courseOverview="Our English Pronunciation and Accent Improvement course are tailored to assist learners in refining their 
        English pronunciation, intonation, and accent. Participants engage in targeted exercises addressing vowel and consonant 
        sounds, stress patterns, and speech rhythm. Through interactive drills and speaking exercises, students enhance their oral 
        communication skills, making their speech more fluent and easily understandable. The course places a strong emphasis on 
        real-life applications, ensuring that learners can confidently communicate in various English-speaking settings. By working 
        closely with experienced instructors, participants receive personalized guidance, enabling them to overcome specific pronunciation 
        challenges and achieve a clear and natural English accent."
        price="90k"
      />

      <Footer />
    </div>
  );
};

export default PICourse;
