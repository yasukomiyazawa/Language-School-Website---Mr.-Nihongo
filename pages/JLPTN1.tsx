import { CourseInfo, Footer, Navbar } from "@/components";
import React from "react";

const JLPTN1 = () => {
  return (
    <div>
      <Navbar />
      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="JLPT N1 Course"
        coursePic="/genCourse.png"
        courseOverview="Our JLPT Level 1 Course is meticulously designed 
        for advanced learners aiming to master Japanese at the highest
        proficiency level. This course covers complex language skills such 
        as advanced speaking, listening, reading, and writing. Participants 
        engage in immersive activities and interactive lessons, enhancing their 
        fluency and confidence in using Japanese in professional and everyday contexts. 
        Whether refining intricate nuances or engaging in profound discussions, 
        learners are guided through a comprehensive journey, equipped with the 
        expertise to navigate complex Japanese language scenarios effectively. "
        price="110k"
      />
      <Footer />
    </div>
  );
};

export default JLPTN1;
