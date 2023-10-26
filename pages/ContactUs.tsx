import React from "react";
import { FAQ, Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationPin,
  faMultiply,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ContactUs = () => {
  const [formPopup, setFormPopup] = useState(false);

  const togglePopup = () => {
    setFormPopup(!formPopup);
  };

  const closePopup = () => {
    setFormPopup(false);
  };

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

      <div className="shadow-xl mx-32 mb-14 max-lg:mx-5">
        <div className="grid grid-cols-3 max-xl:grid-cols-1 max-lg:grid-rows-4">
          <div className="col-span-1 max-lg:row-span-1 bg-red-800 text-white p-10 flex flex-col gap-14 max-lg:gap-2 max-lg:h-fit">
            <h3 className="text-3xl font-semibold mb-3 max-xl:mb-8">
              Contact Info
            </h3>
            <div className="max-xl:grid max-xl:grid-cols-3 max-lg:grid-cols-1">
              <div className="max-xl:flex max-xl:justify-center mb-12 max-xl:mb-3">
                <div className="text-lg flex">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-4 w-7 h-7 text-xl mb-2"
                  />
                  <div className="max-xl:hidden">Email</div>
                </div>
                <div>mrnihongo@gmail.com</div>
              </div>
              <div className="max-xl:flex max-xl:justify-center mb-12 max-xl:mb-3">
                <div className="text-lg flex">
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    className="mr-4 w-7 h-7 text-xl mb-2"
                  />
                  <div className="max-xl:hidden">Location</div>
                </div>
                <div>Tokyo, Japan</div>
              </div>
              <div className="max-xl:flex max-xl:justify-center mb-12 max-xl:mb-3">
                <div className="text-lg flex">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-4 w-7 h-7 text-xl mb-2"
                  />
                  <div className="max-xl:hidden">Number</div>
                </div>
                <div>+81 80 2312 7143</div>
              </div>
            </div>
          </div>

          <div className="col-span-2 max-lg:row-span-3 w-full flex flex-col items-center py-10 max-md:pb-0 max-xl:h-fit">
            <div className="grid grid-cols-1 px-20 max-lg:px-5">
              <div className="row-span-1">
                <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-x-10 py-5 max-md:py-0 max-md:pb-4">
                  <div className="flex flex-col max-md:pb-4">
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
                <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-x-10 py-5 max-md:py-0 max-md:pb-4">
                  <div className="flex flex-col max-md:pb-4">
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
              onClick={togglePopup}
              type="submit"
              className="mt-3 border text-white border-red-800 bg-red-800 py-2 px-4 rounded-full hover:text-red-800 hover:bg-white hover:font-semibold"
            >
              Submit
            </button>

            {formPopup && (
              <div className="px-8 border border-red-800 flex flex-col justify-center items-center gap-3 bg-red-800 p-5 text-white relative top-5">
                <p className="font-semibold text-xl mb-2">
                  Thank you for your inquiry!
                </p>
                <span>We have received your message</span>
                <span>
                  We will contact you through your email within the next 24
                  hours.
                </span>
                <span>-Nihongo Master Group-</span>
                <button
                  onClick={closePopup}
                  className="border border-white bg-white text-red-800 py-1 px-4 rounded-lg"
                >
                  close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center text-4xl text-red-800 font-semibold my-16 max-lg:my-8 max-lg:text-center max-md:text-3xl">
          Frequently Asked Questions
        </div>

        <div className="grid grid-cols-2 max-xl:grid-cols-1 max-xl:gap-5 mx-24 max-lg:mx-5 gap-12 my-10">
          <div>
            <ul className="flex flex-col gap-5">
              <FAQ
                question="What courses do you offer?"
                answer="We offer comprehensive courses for beginners to advanced
                  learners, covering speaking, listening, reading, and writing
                  skills. Specialized courses for JLPT preparation and
                  cultural understanding are also available."
              />

              <FAQ
                question="Are your instructors native Japanese speakers?"
                answer="Yes, all our instructors are native Japanese speakers with 
                extensive teaching experience. They provide authentic language insights 
                and cultural nuances."
              />

              <FAQ
                question="Can I join if I have no prior Japanese knowledge?"
                answer="Absolutely! Our courses cater to beginners. We have
                  specially designed programs to help you build a strong
                  foundation in Japanese language and culture."
              />

              <FAQ
                question="Is the curriculum tailored to individual needs?"
                answer=" Yes, our curriculum is customizable. We assess your
                  proficiency level and goals to create a personalized
                  learning path, ensuring effective and engaging lessons."
              />

              <FAQ
                question="Are there assessments to track progress?"
                answer="Yes, we conduct regular assessments, quizzes, and mock
                  exams, especially for JLPT preparation courses. These
                  evaluations help you gauge your progress and areas needing
                  improvement."
              />
            </ul>
          </div>

          <div className="max-sm:text-xs">
            <ul className="flex flex-col gap-5">
              <FAQ
                question="How do you ensure interactive learning?"
                answer="We foster interactive learning through small class sizes,
                  group activities, conversational practice, and multimedia
                  resources. Our goal is to make language learning enjoyable
                  and immersive."
              />

              <FAQ
                question="What resources do you provide for self-study?"
                answer="We offer access to a variety of study materials, online
                  resources, and language apps. Additionally, our instructors
                  recommend supplementary materials tailored to your learning
                  style."
              />

              <FAQ
                question="Can I participate in cultural events and language exchanges?"
                answer="Absolutely! We organize cultural events, workshops, and
                  language exchange sessions to enhance your understanding of
                  Japanese culture and provide real-world language practice
                  opportunities."
              />

              <FAQ
                question="Do you assist with job or university applications in Japan?"
                answer="Yes, we provide guidance on job applications, resume
                  writing, and university applications in Japan. Our team
                  supports you in showcasing your language skills effectively."
              />

              <FAQ
                question="How can I enroll in your courses?"
                answer="You can easily enroll through our website. Browse our course
                  offerings, select the one that fits your goals, and follow
                  the simple registration process. Our team is here to assist
                  you at every step."
              />
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
