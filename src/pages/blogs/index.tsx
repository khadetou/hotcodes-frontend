import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import SEO from "@/components/Seo";
import Cards from "@/screens/blogs/Cards";
import Banner from "@/screens/blogs/Index";
import React from "react";

const Blog = () => {
  return (
    <>
      <SEO title="Blogs" />
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
};

export default Blog;
