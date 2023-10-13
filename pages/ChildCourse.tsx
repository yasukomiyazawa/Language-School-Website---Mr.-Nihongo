import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const ChildCourse = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="Japanese for Children"
        coursePic="/childrenCourse.png"
        courseOverview="Our Japanese for Children course provides a 
        vibrant and interactive learning experience for young learners. 
        Focusing on essential language skills tailored to everyday situations, 
        children engage in activities, games, and age-appropriate materials to 
        learn Japanese while having fun. The curriculum fosters confidence in 
        expressing themselves, enhancing their conversational abilities, 
        cultural understanding, and overall language proficiency in a positive 
        and stimulating environment."
        price="85k"
      />

      <Footer />
    </div>
  );
};

export default ChildCourse;
