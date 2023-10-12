import React from "react";
import { CourseInfo, Footer, Navbar } from "@/components";

const LCCourse = () => {
  return (
    <div>
      <Navbar />

      <CourseInfo
        // instructorImg="/instructor1.png"
        // name="Lisa Jacobs"
        courseTitle="Language and Culture"
        coursePic="/LC.png"
        courseOverview="The English Language and Culture course at Mr. Eigo provides a unique exploration of the 
        English language within the rich tapestry of its cultural diversity. Students embark on a fascinating journey, 
        delving into idiomatic expressions, cultural nuances, and regional variations across English-speaking countries. 
        By understanding the context of language use within different cultures, learners gain a deeper insight into the language, 
        fostering effective cross-cultural communication. The course explores not only language but also traditions, customs, and 
        social norms, enriching students’ understanding of English-speaking societies. Through engaging discussions and cultural 
        immersion activities, participants develop a heightened cultural awareness, equipping them with the skills to navigate the 
        complexities of intercultural communication with confidence and sensitivity."
        price="88k"
      />

      <Footer />
    </div>
  );
};

export default LCCourse;
