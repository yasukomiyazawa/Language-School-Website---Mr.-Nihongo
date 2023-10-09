import React from "react";
import { Footer, Navbar } from "@/components";
import "../app/globals.css";
import PageHeader from "@/components/PageHeader";

const ContactUs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader title="Contact Us" />
      <Footer />
    </div>
  );
};

export default ContactUs;
