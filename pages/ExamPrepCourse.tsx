import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const ExamPrepCourse = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="Exam Preparation"
        coursePic="/examCourse.png"
        courseOverview="Mr. Eigo's Exam Preparation Courses are intensive programs designed to guide students through 
        the intricacies of internationally recognized English exams such as TOEFL, IELTS, and Cambridge English exams 
        (FCE, CAE, CPE), among others. These courses offer comprehensive training in exam strategies, language proficiency,
        and practice tests. By focusing on enhancing both the depth and breadth of language skills, students gain the confidence 
        needed to excel in their chosen exams. The curriculum includes rigorous practice sessions, detailed feedback, and 
        personalized guidance, ensuring that students are well-prepared to achieve their desired scores. With our expert tutors, 
        students receive individualized attention, enabling them to identify their strengths and areas for improvement, ultimately 
        leading to exam success."
        price="95k"
      />

      <Footer />
    </div>
  );
};

export default ExamPrepCourse;
