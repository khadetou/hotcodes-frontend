import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import WhatsAppFloating from "@/components/Whatsapp";
import WorkScreen from "@/screens/work";
import React from "react";

const Work = () => {
  return (
    <>
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <WorkScreen />
      <WhatsAppFloating />
      <Footer />
    </>
  );
};

export default Work;
