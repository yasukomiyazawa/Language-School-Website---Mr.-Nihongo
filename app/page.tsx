import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faQuestion,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Footer, Hero, Navbar } from "@/components";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col box-border pb-10 pt-5">
      <div className="pb-3 px-40 flex justify-around w-full border-b-2 text-xs border-b-gray-300 max-lg:hidden">
        <div className="w-full flex gap-5">
          <div className="flex items-center">
            <div className="w-3 mr-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-3"
                style={{ color: "red" }}
              />
            </div>
            <div>Tokyo, Japan</div>
          </div>
          <div className="flex items-center">
            <div className="w-3 mr-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-3"
                style={{ color: "red" }}
              />
            </div>
            <div>+81 80 2340 5812</div>
          </div>
          <div className="flex items-center">
            <div className="w-3 mr-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-3"
                style={{ color: "red" }}
              />
            </div>
            <div className="hover:text-red-700 cursor-pointer">
              mrnihongo@gmail.com
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="hover:text-red-500">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-3 mr-4 text-lightslategray group-hover:text-red-500 cursor-pointer"
            />
          </div>
          <div className="group">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-3 mr-4 text-lightslategray group-hover:text-red-500 cursor-pointer"
            />
          </div>

          <div>
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-3 mr-4 text-lightslategray group-hover:text-red-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Navbar />

      <Hero />

      <div className="bg-red-800 grid grid-cols-3 py-14 cursor-pointer">
        <Link
          href="/ContactUs"
          passHref
          className="text-white flex flex-col items-center hover:text-yellow-500 hover:font-bold hover:underline-offset-8 hover:underline"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-10 h-10 mb-5"
            style={{ color: "white" }}
          />
          Get a Quote
        </Link>
        <Link
          href="/"
          passHref
          className="text-white flex flex-col items-center hover:text-yellow-500 hover:font-bold hover:underline-offset-8 hover:underline"
        >
          <FontAwesomeIcon
            icon={faQuestion}
            className="w-10 h-10 mb-5"
            style={{ color: "white" }}
          />
          Frequently Asked Questions
        </Link>
        <Link
          href="ContactUs"
          passHref
          className="text-white flex flex-col items-center hover:text-yellow-500 hover:font-bold hover:underline-offset-8 hover:underline"
        >
          <FontAwesomeIcon
            icon={faPen}
            className="w-10 h-10 mb-5"
            style={{ color: "white" }}
          />
          Sign Up for a Trial Lesson
        </Link>
      </div>

      {/* <div className="bg-sched-bg bg-cover h-screen">
        <h2 className="flex justify-center mt-28 text-5xl font-bold text-red-800 underline underline-offset-8">
          2023 Schedule
        </h2>

        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-2 gap-x-40 gap-y-8">
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-4 underline underline-offset-8">
                July
              </h2>
              <ul className="font-semibold">
                <li className="flex justify-between gap-52">
                  <span>7/3</span>
                  <span>Guidance for Further Study</span>
                </li>
                <li className="flex justify-between">
                  <span>7/4</span>
                  <span>1st Day of Summer Semester</span>
                </li>
                <li className="flex justify-between">
                  <span>7/16</span>
                  <span>J. TEST</span>
                </li>
                <li className="flex justify-between">
                  <span>7/17</span>
                  <span>Marine Day - Holiday</span>
                </li>
                <li className="flex justify-between">
                  <span>7/31</span>
                  <span>Orientation- July Students</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-4 underline underline-offset-8">
                August
              </h2>
              <ul className="font-semibold">
                <li className="flex justify-between">
                  <span>8/5 - 8/20</span>
                  <span>Summer Vacation</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-4 underline underline-offset-8">
                September
              </h2>
              <ul className="font-semibold">
                <li className="flex justify-between">
                  <span>9/18</span>
                  <span>Respect-for-the-Aged - Holiday</span>
                </li>
                <li className="flex justify-between">
                  <span>9/26</span>
                  <span>Final Examination</span>
                </li>
                <li className="flex justify-between">
                  <span>9/27</span>
                  <span>Mr. Eigo Speech Contents</span>
                </li>
                <li className="flex justify-between">
                  <span>9/28</span>
                  <span>Last Day of Summer Semester</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-4 underline underline-offset-8">
                October
              </h2>
              <ul className="font-semibold">
                <li className="flex justify-between">
                  <span>10/10</span>
                  <span>1st Day of Autumn Semester</span>
                </li>
                <li className="flex justify-between">
                  <span>10/27</span>
                  <span>October Orientation</span>
                </li>
                <li className="flex justify-between">
                  <span>10/31</span>
                  <span>Halloween Party</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-4 underline underline-offset-8">
                November
              </h2>
              <ul className="font-semibold">
                <li className="flex justify-between">
                  <span>11/2</span>
                  <span>TOIEC Review</span>
                </li>
                <li className="flex justify-between">
                  <span>11/12</span>
                  <span>TOIEC Mock Exam</span>
                </li>
                <li className="flex justify-between">
                  <span>11/23</span>
                  <span>Labor Thanksgiving Day - Holiday</span>
                </li>
                <li className="flex justify-between">
                  <span>11/24</span>
                  <span>Welcome Party</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-4 underline underline-offset-8">
                December
              </h2>
              <ul className="font-semibold">
                <li className="flex justify-between">
                  <span>12/3</span>
                  <span>TOIEC Examination</span>
                </li>
                <li className="flex justify-between">
                  <span>12/19</span>
                  <span>Final Examination</span>
                </li>
                <li className="flex justify-between">
                  <span>12/20</span>
                  <span>Extracurricular Activities</span>
                </li>
                <li className="flex justify-between">
                  <span>12/121</span>
                  <span>Last Day of Autumn Semester</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-4 w-full h-screen gap-x-8 my-3 px-8 box-border">
        <div className="col-span-2 pt-36">
          <h3 className="pb-8 text-3xl font-medium text-red-800">
            Event Calendars
          </h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showNav=1&showDate=1&showPrint=1&showTabs=1&showTz=0&showCalendars=1&title=2023%20Schedule&src=eWFzdWtvbWl5YXphd2EwOEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"
            style={{ border: 0 }}
            width=""
            height=""
            scrolling="no"
            className="w-full h-3/4"
          ></iframe>
        </div>
        <div className="flex flex-col col-span-1 pt-36">
          <h3 className="pb-20 text-3xl font-medium text-red-800">
            Latest Events
          </h3>
          <div className="flex gap-3 mb-11">
            <div className="flex flex-col items-center">
              <span className="text-sm">OCT</span>
              <span className="text-xl font-semibold text-gray-600">10</span>
            </div>
            <span className="text-base font-medium">
              1st Day of Autumn Semester
            </span>
          </div>
          <div className="flex gap-3 mb-11">
            <div className="flex flex-col items-center">
              <span className="text-sm">OCT</span>
              <span className="text-xl font-semibold text-gray-600">27</span>
            </div>
            <span className="text-base font-medium">
              October Orientation <br />
              (New Students of October Intake)
            </span>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="text-sm">OCT</span>
              <span className="text-xl font-semibold text-gray-600">31</span>
            </div>
            <span className="text-base font-medium">Halloween Party</span>
          </div>
        </div>
        <div className="flex flex-col col-span-1 pt-36">
          <h3 className="pb-20 text-3xl font-medium text-red-800">
            Upcoming Courses
          </h3>
          <div className="grid grid-rows-4">
            <Link
              href="/JLPTN3"
              className="row-span-1 border border-gray-500 border-l-4 border-l-red-500 hover:bg-red-700"
            >
              <div className="flex flex-col items-center py-3 hover:text-white">
                <span className="text-lg font-medium hover:font-semibold mb-2">
                  JLPT N3
                </span>
                <span>Thursday, 10am - 12pm</span>
              </div>
            </Link>

            <Link
              href="/GWCourse"
              className="row-span-1 border border-gray-500 border-l-4 border-l-red-500 hover:bg-red-700"
            >
              <div className="flex flex-col items-center py-3 hover:text-white">
                <span className="text-lg font-medium hover:font-semibold mb-2">
                  Grammar and Writing Proficiency
                </span>
                <span>Friday, 10am - 12pm</span>
              </div>
            </Link>

            <Link
              href="/JLPTN5"
              className="row-span-1 border border-gray-500 border-l-4 border-l-red-500 hover:bg-red-700"
            >
              <div className="flex flex-col items-center py-3 hover:text-white">
                <span className="text-lg font-medium hover:font-semibold mb-2">
                  JLPT N5 Course
                </span>
                <span>Monday, 10am - 12pm</span>
              </div>
            </Link>

            <Link
              href="/ChildCourse"
              className="row-span-1 border border-gray-500 border-l-4 border-l-red-500 hover:bg-red-700"
            >
              <div className="flex flex-col items-center py-3 hover:text-white">
                <span className="text-lg font-medium hover:font-semibold mb-2">
                  Japanese for Children
                </span>
                <span>Tuesday, 10am - 12pm</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-red-800 py-16 mb-10 gap-5">
        <div className="text-3xl text-white font-bold">Subscribe Now!</div>
        <div className="text-sm text-gray-200">
          Subscribe for Exclusive Course Updates, Language Lessons, and Exciting
          Language Learning Adventures!
        </div>
        <div className="xl:w-[800px] bg-white bg-opacity-80 border border-gray-300 rounded-full py-2 px-3 flex">
          <input
            id="email"
            type="email"
            placeholder="enter your email"
            className="outline-none mr-2 pl-3 w-full text-black rounded-full bg-opacity-80"
          />
          <button
            className="border border-gray-200 bg-white rounded-full text-black py-1 px-4 hover:bg-gray-500 hover:text-white hover:text-medium"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>

      <div>
        <h2 className="flex justify-center mb-11 text-4xl font-bold text-red-800 underline underline-offset-8">
          Featured Courses
        </h2>
        <div className="grid grid-cols-4 gap-5 m-8">
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
          <Link href="/ChildCourse">
            <CourseCard
              courseImg="/childrenCourse.png"
              courseTitle="Japanese for English"
              price="85k"
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
      </div>

      <Footer />
    </main>
  );
}
