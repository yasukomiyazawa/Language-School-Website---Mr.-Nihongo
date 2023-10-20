import { Footer, Navbar, PageHeader, TeacherCard } from "@/components";
import React from "react";
import Link from "next/link";

const Teachers = () => {
  return (
    <div>
      <Navbar />

      <PageHeader
        title="Teachers"
        subLine="Meet the passionate educators behind your Japanese language journey"
        headerImg="/teachers.png"
        catchPhrase="Experienced Instructors, Personalized Learning"
        desc="Meet the skilled educators at Mr. Nihongo, committed 
        to guiding you on your Japanese language journey. Our team 
        offers personalized attention and expertise for learners of 
        all levels. Join us to achieve fluency and cultural understanding."
      />

      <div className="grid grid-cols-4">
        <Link href="/JLPTN1">
          <TeacherCard
            TeacherImg="/TeacherN1.png"
            name="Hiroshi Tanaka"
            course="JLPT N1 Course"
          />
        </Link>

        <Link href="/JLPTN2">
          <TeacherCard
            TeacherImg="/TeacherN2.png"
            name="Aiko Nakamura"
            course="JLPT N2 Course"
          />
        </Link>

        <Link href="/JLPTN3">
          <TeacherCard
            TeacherImg="/TeacherN3.png"
            name="Jun Suzuki"
            course="JLPT N3 Course"
          />
        </Link>

        <Link href="/JLPTN4">
          <TeacherCard
            TeacherImg="/TeacherN4.png"
            name="Emi Ito"
            course="JLPT N4 Course"
          />
        </Link>

        <Link href="/JLPTN5">
          <TeacherCard
            TeacherImg="/TeacherN5.png"
            name="Kenji Yamamoto"
            course="JLPT N5 Course"
          />
        </Link>

        <Link href="/ChildCourse">
          <TeacherCard
            TeacherImg="/TeacherChild.png"
            name="Sakura Kobayashi"
            course="Japanese for Children Course"
          />
        </Link>

        <Link href="/GWCourse">
          <TeacherCard
            TeacherImg="/TeacherGW.png"
            name="Takashi Sato"
            course="Grammar & Writing Proficiency"
          />
        </Link>

        <Link href="/PICourse">
          <TeacherCard
            TeacherImg="/TeacherPI.png"
            name="Jiro Okada"
            course="Pronunciation Improvement"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Teachers;
