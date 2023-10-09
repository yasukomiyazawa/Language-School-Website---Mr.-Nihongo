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
            <div>mreigo@gmail.com</div>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-3 mr-4"
              style={{ color: "lightslategray" }}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-3 mr-4"
              style={{ color: "lightslategray" }}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-3 mr-4"
              style={{ color: "lightslategray" }}
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

      <div className="bg-sched-bg bg-cover h-screen">
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
                  <span>Marine Day - National Holiday</span>
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
                  <span>Respect-for-the-Aged - National Holiday</span>
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
                  <span>Mock Exam in School</span>
                </li>
                <li className="flex justify-between">
                  <span>11/12</span>
                  <span>EJU - 2nd</span>
                </li>
                <li className="flex justify-between">
                  <span>11/23</span>
                  <span>Labor Thanksgiving Day National Holiday</span>
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
                  <span>JLPT - 2nd</span>
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
      </div>

      <Footer />
    </main>
  );
}
