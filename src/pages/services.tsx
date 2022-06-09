import Contact from "@/components/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import SEO from "@/components/Seo";
import WhatsAppFloating from "@/components/Whatsapp";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Banner from "screens/services/Banner";
import ServicesList from "screens/services/list/ServicesList";

const Services = () => {
  return (
    <>
      <Header />
      <SEO title="Services" />
      <Banner />
      <ServicesList />
      <WhatsAppFloating />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "service",
        "header",
        "common",
        "footer",
      ])),
    },
  };
};
