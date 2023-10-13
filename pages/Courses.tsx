import React from "react";
import { Navbar, Footer } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

const Courses = () => {
  return (
    <div className="flex w-full min-h-screen flex-col">
      <Navbar />
      <PageHeader title="Courses" />

      <div className="grid grid-cols-4 gap-6 m-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Link href="/JLPTN1">
          <CourseCard
            courseImg="/genCourse.png"
            courseTitle="JLPT N1 Course"
            price="110k"
          />
        </Link>
        <Link href="/JLPTN2">
          <CourseCard
            courseImg="/businessCourse.png"
            courseTitle="JLPT N2 Course"
            price="105k"
          />
        </Link>
        <Link href="/JLPTN3">
          <CourseCard
            courseImg="/examCourse.png"
            courseTitle="JLPT N3 Course"
            price="100k"
          />
        </Link>
        <Link href="/JLPTN4">
          <CourseCard
            courseImg="/conversationCourse.png"
            courseTitle="JLPT N4 Course"
            price="95k"
          />
        </Link>
        <Link href="/JLPTN5">
          <CourseCard
            courseImg="/LC.png"
            courseTitle="JLPT N5 Course"
            price="90k"
          />
        </Link>
        <Link href="/ChildCourse">
          <CourseCard
            courseImg="/childrenCourse.png"
            courseTitle="Japanese for Children"
            price="85k"
          />
        </Link>
        <Link href="/GWCourse">
          <CourseCard
            courseImg="/writingCourse.png"
            courseTitle="Grammar and Writing Proficiency"
            price="100k"
          />
        </Link>
        <Link href="/PICourse">
          <CourseCard
            courseImg="/talkCourse.png"
            courseTitle="Pronunciation Improvement"
            price="95k"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
