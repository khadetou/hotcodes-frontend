import { useState } from "react";
import Marketing from "/public/images/marketing/360.png";
import Seo from "/public/images/marketing/seo.png";
import Social from "/public/images/marketing/social.png";
import crypto from "/public/images/design/crypto.png";
import Title from "@/components/Title/title";
import DesignCards from "@/components/Bigcards/Design";
import { FiEdit3 } from "react-icons/fi";
import { useTranslation } from "next-i18next";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0,0, 0.8)",
  },
  content: {
    position: "absolute",
    top: "20px",
    left: "40px",
    right: "40px",
    bottom: "0px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};

type Style = {
  color: string;
};
interface Subtitle {
  style: Style;
}

const Cards = () => {
  const { t } = useTranslation("marketing");

  const marketing = [
    {
      title: "360 Digital Marketing",
      toptitle: "Digital, Marketing",
      text: t("cards.card1.p"),
      image: Marketing,
    },
    {
      title: "Search Engine Optimization",
      toptitle: "SE,O",
      text: t("cards.card2.p"),
      image: Seo,
    },
    {
      title: "Social Media Marketing",
      toptitle: "Social ,Media",
      text: t("cards.card3.p"),
      image: Social,
    },
    {
      title: "Email & Text Marketing",
      toptitle: "Email ,Marketing",
      text: t("cards.card4.p"),
      image: crypto,
    },
  ];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [submodalIsOpen, setSubIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openSubModal() {
    setSubIsOpen(true);
  }

  return (
    <>
      <div className="mb-[160px]">
        <div className="containers my-16">
          <Title
            title={t("cards.title")}
            className="text-transparent bg-clip-text bg-grad-btn"
          />
        </div>
        <div className="containers grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketing.map(({ title, toptitle, text, image }, index) => (
            <div key={index} className="relative group">
              <button
                onClick={openModal}
                className="group-hover:flex hidden  items-center rounded-full px-[9px] py-[7px] shadow-md text-dark font-medium absolute z-10 top-5 right-6 bg-white"
              >
                <FiEdit3 className="mr-3" />
                Select one model
              </button>
              <DesignCards
                title={title}
                toptitle={toptitle}
                subtitle={text}
                image={image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
