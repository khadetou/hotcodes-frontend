import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import SEO from "@/components/Seo";
import Banner from "@/screens/web/Banner";
import Presentation from "@/screens/web/presentation";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import Form from "../../../components/orders/form";
import { useActions } from "../../../hooks/useActions";

const OrderWeb: NextPage = () => {
  const { CreateOrderWeb } = useActions();
  const { t } = useTranslation("common");

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
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <SEO title="Web" />
      <Banner />
      <Presentation />
      <Form
        title={t("Form.title1")}
        Action={CreateOrderWeb}
        formData={formData}
        setFormData={setFormData}
      />
      <Footer />
    </>
  );
};

export default OrderWeb;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "header",
        "footer",
        "web",
      ])),
    },
  };
};
