import Contact from "@/components/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import SEO from "@/components/Seo";
import WhatsAppFloating from "@/components/Whatsapp";
import Banner from "@/screens/about/Banner";
import Presentation from "@/screens/about/presentation";
import Team from "@/screens/about/team";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const About = () => {
  return (
    <>
      <SEO title="About" />
      <Header />
      <Banner />
      <Presentation />
      <Team />
      <WhatsAppFloating />
      <Contact />
      <Footer />
    </>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "about",
        "header",
        "common",
        "footer",
      ])),
    },
  };
};
