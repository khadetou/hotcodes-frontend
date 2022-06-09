import Form from "@/components/orders/form";
import Banner from "@/screens/mobile/Banner";
import { useActions } from "@/hooks/useActions";
import Header from "@/components/header";
import Presentation from "@/screens/mobile/presentation";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import SEO from "@/components/Seo";

const Mobile = () => {
  const { CreateOrderMobile } = useActions();
  const [formData, setFormData] = useState<any>({
    plateform: "",
    typeapp: "",
    appName: "",
    description: "",
    goal: "",
    design: "",
    target: "",
    functionnality: "",
    link: "",
  });
  return (
    <>
      <Header />
      <SEO title="Mobile" />
      <Banner />
      <Presentation />
      <Form
        title="What are we building"
        formData={formData}
        setFormData={setFormData}
        Action={CreateOrderMobile}
      />
      <Footer />
    </>
  );
};

export default Mobile;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "mobile",
        "header",
        "footer",
      ])),
    },
  };
};
