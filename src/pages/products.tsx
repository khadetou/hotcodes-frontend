import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import Seo from "@/components/Seo";
import WhatsAppFloating from "@/components/Whatsapp";
import ProjectScreen from "@/screens/projects";
import React from "react";

const Projects = () => {
  return (
    <>
      <Seo title="Product" />
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <ProjectScreen />
      <WhatsAppFloating />
      <Footer />
    </>
  );
};

export default Projects;
