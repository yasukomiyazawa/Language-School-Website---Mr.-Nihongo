import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBookAtlas,
  faSquareCheck,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const AboutUs = () => {
  // const Img1 = "/aboutUs1.png";
  // const Img2 = "/aboutUs.png";

  // const [ReasonImg1, setReasonImg1] = useState(Img1);

  // const toggleImg = () => {
  //   setReasonImg1(Img2);
  // };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="About Us"
        subLine="Join our global community of Japanese learners"
        headerImg="/aboutUs.png"
        catchPhrase="Cultivating Japanese Fluency for Education, Work, Journey, & Joy!"
        desc="Welcome to Mr. Nihongo, your dedicated gateway to mastering the
        art of Japanese language and culture! Established with a passion
        for empowering language learners, Mr. Nihongo prides itself on
        providing immersive, innovative, and interactive Japanese language
        education."
      />

      <div className="grid grid-cols-3 py-8 px-5 gap-3 max-md:grid-cols-1 max-md:gap-y-5">
        <div className="flex justify-center">
          <div className="mr-3 flex">
            <FontAwesomeIcon
              icon={faAward}
              style={{ color: "gray" }}
              className="w-11 h-11 max-lg:w-8 max-lg:h-8 max-md:w-7 max-md:h-7"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl max-md:text-xl max-lg:text-lg font-bold text-red-800">
              Certified Excellence
            </div>
            <div>Mastering Languages</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mr-3 flex">
            <FontAwesomeIcon
              icon={faBookAtlas}
              style={{ color: "gray" }}
              className="w-11 h-11 max-lg:w-8 max-lg:h-8 max-md:w-7 max-md:h-7"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl max-md:text-xl max-lg:text-lg font-bold text-red-800">
              Seamless Learning
            </div>
            <div>Transcends Borders</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mr-3 flex">
            <FontAwesomeIcon
              icon={faTrophy}
              style={{ color: "gray" }}
              className="w-11 h-11 max-lg:w-8 max-lg:h-8 max-md:w-7 max-md:h-7"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl max-md:text-xl max-lg:text-lg font-semibold text-red-800">
              Proven Proficiency
            </div>
            <div>Elevating Skills</div>
          </div>
        </div>
      </div>

      <div className="shadow-2xl m-20 p-8 max-lg:px-5 max-md:px-3 rounded-md max-lg:m-10 max-md:m-7">
        <h3 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-4xl font-bold text-red-900 flex justify-center mb-8">
          Our Mission
        </h3>

        <div className="flex mt-8">
          <Image
            src="/mission.png"
            alt="japanese lanterns"
            width={250}
            height={150}
            className="text-center w-3/4 h-96 max-lg:hidden"
          />

          <div className="pl-10 pr-16 justify-center text-gray-700 flex flex-col gap-5 text-lg max-lg:text-center max-lg:text-base max-md:text-sm max-sm:text-xs max-lg:px-10 max-md:px-7 max-sm:px-3">
            <p className="max-sm:hidden">
              To provide unparalleled Japanese language education that goes
              beyond textbooks, focusing on real-life communication, cultural
              understanding, and building lasting connections within our global
              community.
            </p>
            <p>
              At Mr. Nihongo, we believe in the transformative power of
              language. Our expert team of educators is committed to nurturing a
              vibrant learning community where students of all ages and
              backgrounds can thrive. Whether you're a beginner taking your
              first steps into the world of Japanese or an advanced learner
              striving for fluency, our carefully curated courses cater to
              diverse proficiency levels.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-4xl font-bold text-red-900 flex justify-center my-3">
        Why Choose Us?
      </h3>

      <div className="shadow-2xl m-20 px-8 py-20 rounded-md max-lg:m-10 max-md:m-5 max-lg:px-3 max-lg:py-5">
        <div className="flex justify-around items-center gap-7">
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center rounded-md bg-slate-300 bg-opacity-60 px-4 py-3">
              <FontAwesomeIcon
                icon={faSquareCheck}
                style={{ color: "red" }}
                className="w-5 h-5 mr-4"
              />
              <div className="flex flex-col">
                <span className="text-red-800 font-bold text-2xl max-lg:text-xl max-lg:mb-2 max-sm:text-gray-700">
                  Experienced Instructors
                </span>
                <span className="text-sm text-gray-700 lg:hidden max-md:text-red-800">
                  Expert Guidance for Your Japanese Language Journey
                </span>
              </div>
            </div>
            <div className="flex items-center rounded-md bg-slate-300 bg-opacity-60 px-4 py-3">
              <FontAwesomeIcon
                icon={faSquareCheck}
                style={{ color: "red" }}
                className="w-5 h-5 mr-4"
              />
              <div className="flex flex-col">
                <span className="text-red-800 font-bold text-2xl max-lg:text-xl max-lg:mb-2 max-sm:text-gray-700">
                  Innovative Teaching Methods
                </span>
                <span className="text-sm text-gray-700 lg:hidden max-md:text-red-800">
                  Interactive Teaching for Enjoyable and Effective Learning
                </span>
              </div>
            </div>
            <div className="flex items-center rounded-md bg-slate-300 bg-opacity-60 px-4 py-3">
              <FontAwesomeIcon
                icon={faSquareCheck}
                style={{ color: "red" }}
                className="w-5 h-5 mr-4"
              />
              <div className="flex flex-col">
                <span className="text-red-800 font-bold text-2xl max-lg:text-xl max-lg:mb-2 max-sm:text-gray-700">
                  Comprehensive Curriculums
                </span>
                <span className="text-sm text-gray-700 lg:hidden max-md:text-red-800">
                  Diverse Courses Covering JLPT, Conversations, and Culture
                </span>
              </div>
            </div>
            <div className="flex items-center rounded-md bg-slate-300 bg-opacity-60 px-4 py-3">
              <FontAwesomeIcon
                icon={faSquareCheck}
                style={{ color: "red" }}
                className="w-5 h-5 mr-4"
              />
              <div className="flex flex-col">
                <span className="text-red-800 font-bold text-2xl max-lg:text-xl max-lg:mb-2 max-sm:text-gray-700">
                  Engaging Learning Environment
                </span>
                <span className="text-sm text-gray-700 lg:hidden max-md:text-red-800">
                  Engaging Community: Real-world Practice, Cultural Events
                </span>
              </div>
            </div>
          </div>
          <div className="max-lg:hidden">
            <Image
              src="/fluency.jpg"
              alt="aboutUs pic"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="mb-20 bg-aboutUs1-bg bg-center w-full h-[350px] max-lg:h-[300px] max-md:h-[250px] max-sm:h-[150px] bg-cover bg-opacity-10 static flex justify-center">
        <div className="static flex flex-col">
          <h3 className="text-center text-red-800 text-4xl max-lg:text-3xl max-md:text-2xl font-semibold my-10 max-lg:my-8 max-md:my-6">
            Book A Course Today!
          </h3>
          <div className="flex gap-3">
            <Link href="/Courses">
              <button className="text-sm max-md:text-xs border border-red-800 bg-red-800 text-white hover:bg-white hover:text-red-800 py-2 px-3 rounded-full">
                VIEW ALL COURSES
              </button>
            </Link>
            <Link href="ContactUs">
              <button className="text-sm max-md:text-xs border border-white bg-white text-red-800 hover:bg-red-800 hover:text-white py-2 px-3 rounded-full">
                BOOK YOUR COURSE
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
