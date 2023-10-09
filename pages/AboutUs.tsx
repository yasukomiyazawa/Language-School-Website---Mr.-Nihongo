import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader title="About Us" />
      <Footer />
    </div>
  );
};

export default AboutUs;
