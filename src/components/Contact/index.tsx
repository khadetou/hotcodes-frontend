import Form from "@/components/form/Form";
import Title from "@/components/Title/title";
import { useTranslation } from "next-i18next";
import React from "react";

const Contact = () => {
  const { t } = useTranslation("common");
  return (
    <div className="containers flex flex-col items-center">
      <Title
        title={t("contact.h1")}
        className="text-transparent bg-clip-text bg-grad-text-2 mr-0 text-center"
      />
      <Form className="mt-[63px] mb-[387px]" />
    </div>
  );
};

export default Contact;
