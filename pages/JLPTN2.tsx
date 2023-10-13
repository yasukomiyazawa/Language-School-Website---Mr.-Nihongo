import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const JLPTN2 = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="JLPT N2 Course"
        coursePic="/businessCourse.png"
        courseOverview="Tailored for proficient learners, our JLPT 
        Level 2 Course delves deeply into language skills specific 
        to intermediate and advanced levels. Topics include nuanced 
        business communication, advanced presentations, negotiation 
        skills, email etiquette, and industry-specific vocabulary. 
        This course empowers learners to articulate ideas clearly and 
        persuasively, fostering effective professional relationships. 
        Through practical applications, participants gain a holistic 
        understanding of the complexities of business language, preparing 
        them for success in the competitive global business arena."
        price="105k"
      />

      <Footer />
    </div>
  );
};

export default JLPTN2;
