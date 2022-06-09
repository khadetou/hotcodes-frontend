import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import Seo from "@/components/Seo";
import CarreerScreen from "@/screens/Carreer";
import React from "react";

const career = () => {
  return (
    <>
      <Seo title="Carrear" />
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <CarreerScreen />
      <Footer />
    </>
  );
};

export default career;
