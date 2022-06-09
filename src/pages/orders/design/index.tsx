import Form from "@/components/orders/form";
import Banner from "@/screens/design/Banner";
import { useActions } from "@/hooks/useActions";
import Cards from "@/screens/design/Cards";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import WhatsAppFloating from "@/components/Whatsapp";
import SEO from "@/components/Seo";

const Design = () => {
  const { CreateOrderDesign } = useActions();

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
      <SEO title="Design" />
      <Banner />
      {/* <Cards /> */}
      <Form
        title="What are we building"
        formData={formData}
        setFormData={setFormData}
        Action={CreateOrderDesign}
      />
      <WhatsAppFloating />
      <Footer />
    </>
  );
};

export default Design;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "design",
        "header",
        "footer",
      ])),
    },
  };
};
