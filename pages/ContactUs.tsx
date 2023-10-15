import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";

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

      {/* <iframe
        width="425"
        height="350"
        src="https://www.openstreetmap.org/export/embed.html?bbox=139.8114484548569%2C35.70720940187774%2C139.8161154985428%2C35.71046759455888&amp;layer=cyclemap"
      ></iframe>
      <br />
      <small>
        <a href="https://www.openstreetmap.org/#map=18/35.70884/139.81378&amp;layers=C">
          View Larger Map
        </a>
      </small> */}

      <Footer />
    </div>
  );
};

export default ContactUs;
