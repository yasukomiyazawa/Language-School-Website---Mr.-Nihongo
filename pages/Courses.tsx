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
        <Link href="/GenEngCourse">
          <CourseCard
            courseImg="/genCourse.png"
            courseTitle="General English"
            price="90k"
          />
        </Link>
        <Link href="/BusEngCourse">
          <CourseCard
            courseImg="/businessCourse.png"
            courseTitle="Business English"
            price="100k"
          />
        </Link>
        <Link href="/ExamPrepCourse">
          <CourseCard
            courseImg="/examCourse.png"
            courseTitle="Exam Preparation"
            price="95k"
          />
        </Link>
        <Link href="/CFCourse">
          <CourseCard
            courseImg="/conversationCourse.png"
            courseTitle="Conversation and Fluency"
            price="95k"
          />
        </Link>
        <Link href="/ChildCourse">
          <CourseCard
            courseImg="/childrenCourse.png"
            courseTitle="Children's English"
            price="85k"
          />
        </Link>
        <Link href="/GWCourse">
          <CourseCard
            courseImg="/writingCourse.png"
            courseTitle="Grammar and Writing Proficiency"
            price="95k"
          />
        </Link>
        <Link href="/PICourse">
          <CourseCard
            courseImg="/talkCourse.png"
            courseTitle="Pronunciation Improvement"
            price="90k"
          />
        </Link>
        <Link href="/LCCourse">
          <CourseCard
            courseImg="/LC.png"
            courseTitle="Language and Culture"
            price="88k"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
