import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sycom Industry – Creators of Sybot AI in Rwanda",
  description: "Discover Sycom Industry, a Rwandan tech company leading AI innovation with solutions like Sybot — our intelligent assistant — and cutting-edge application development for Africa and beyond.",
  // other metadata
}  

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Learn about Sycom Industry, Rwanda's pioneering tech company delivering innovative AI solutions and digital transformation across Africa."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;