import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import Seo from "@/components/Seo";
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
      <Footer />
    </>
  );
};

export default Projects;
