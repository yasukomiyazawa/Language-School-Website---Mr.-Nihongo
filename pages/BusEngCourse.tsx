import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const BusEngCourse = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="Business English"
        coursePic="/businessCourse.png"
        courseOverview="Our Business English Courses are tailored for professionals and individuals aspiring to excel 
        in the corporate world. These courses delve deeply into language skills specifically pertinent to business environments. 
        Participants gain expertise in business communication, presentations, negotiation skills, email etiquette, and industry-specific 
        vocabulary. The curriculum is meticulously curated to empower learners with the ability to articulate ideas clearly and persuasively, 
        fostering effective professional relationships. With a focus on practical applications, these courses provide a holistic understanding 
        of the nuances of business language. By honing their communication abilities in the context of real-world scenarios, students are 
        well-prepared to thrive in the competitive global business arena."
        price="100k"
      />

      <Footer />
    </div>
  );
};

export default BusEngCourse;
