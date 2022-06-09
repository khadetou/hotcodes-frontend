import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import SEO from "@/components/Seo";
import CategoryScreen from "@/screens/blogs/CategoryScreen";
import Banner from "@/screens/blogs/Index";
import React from "react";

const Category = () => {
  return (
    <div>
      <SEO title="Category" />
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <Banner />
      <CategoryScreen />
      <Footer />
    </div>
  );
};

export default Category;
