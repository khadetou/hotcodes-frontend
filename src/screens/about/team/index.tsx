import Title from "@/components/Title/title";
import { useTranslation } from "next-i18next";
import React from "react";
import Card from "./Cards";

const Team = () => {
  const { t } = useTranslation("about");
  return (
    <div className="containers">
      <Title
        title={t("team.h1")}
        className="bg-grad-text-2 !mt-0 bg-clip-text text-transparent !leading-[1.2]"
      />

      <div className="mt-[55px] grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from(Array(3).keys()).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default Team;
