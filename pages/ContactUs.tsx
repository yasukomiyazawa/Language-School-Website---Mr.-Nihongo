import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons/faLocationPinLock";

const ContactUs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Contact Us"
        subLine="Get In Touch with Mr. Nihongo Team"
        headerImg="/contactUs.png"
        catchPhrase="Your Questions, Our Solutions — Reach Out Today!"
        desc="Have queries or want to enroll in our courses? Contact our 
        friendly team for assistance. We're here to support your Japanese 
        language journey."
      />

      <div className="shadow-xl mx-32 mb-14">
        <div className="grid grid-cols-3">
          <div className="col-span-1 bg-red-800 text-white p-10 flex flex-col gap-14">
            <h3 className="text-3xl font-semibold mb-3">Contact Info</h3>
            <div>
              <div className="text-lg flex">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-4 w-7 h-7 text-xl mb-2"
                />
                <div>Email</div>
              </div>
              <div>mrnihongo@gmail.com</div>
            </div>
            <div>
              <div className="text-lg flex">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="mr-4 w-7 h-7 text-xl mb-2"
                />
                <div>Location</div>
              </div>
              <div>Tokyo, Japan</div>
            </div>
            <div>
              <div className="text-lg flex">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-4 w-7 h-7 text-xl mb-2"
                />
                <div>Number</div>
              </div>
              <div>+81 80 2312 7143</div>
            </div>
          </div>

          <div className="col-span-2 w-full flex flex-col items-center py-10">
            <div className="grid grid-cols-1 px-20">
              <div className="row-span-1">
                <div className="grid grid-cols-2 w-full gap-x-10 py-5">
                  <div className="flex flex-col">
                    <label htmlFor="fName">First Name *</label>
                    <input
                      id="fName"
                      type="text"
                      className="border border-gray-200 bg-blue-50 rounded-md mt-3 w-full px-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lName">Last Name *</label>
                    <input
                      id="lName"
                      type="text"
                      className="border border-gray-200 bg-blue-50 rounded-md mt-3 w-full px-2"
                    />
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-2 w-full gap-x-10 py-5">
                  <div className="flex flex-col">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      className="border border-gray-200 bg-blue-50 rounded-md mt-3 w-full px-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="courses">Courses</label>
                    <select
                      id="courses"
                      className="border border-gray-200 bg-blue-50 rounded-md mt-3 w-full px-2"
                    >
                      <option value="JLPTN1">JLPT N1 Course</option>
                      <option value="JLPTN2">JLPT N2 Course</option>
                      <option value="JLPTN3">JLPT N3 Course</option>
                      <option value="JLPTN4">JLPT N4 Course</option>
                      <option value="JLPTN5">JLPT N5 Course</option>
                      <option value="Childrens">Japanese for Children</option>
                      <option value="JapaneseNWriting">
                        Japanese and Writing Proficiency
                      </option>
                      <option value="PronunciationImprovement">
                        Pronunciation Improvement
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  cols={78}
                  rows={10}
                  className="w-full border border-gray-200 bg-blue-50 rounded-md mt-3 p-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-3 border text-white border-red-800 bg-red-800 py-2 px-4 rounded-full hover:text-red-800 hover:bg-white hover:font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
