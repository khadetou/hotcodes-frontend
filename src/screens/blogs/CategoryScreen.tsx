import Card from "@/components/blogs/Card";

import React from "react";

const CategoryScreen = () => {
  return (
    <section className="mb-40">
      <div className="containers mb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex items-center justify-center" key={index}>
            <Card />
          </div>
        ))}
      </div>

      <div className="containers mb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex items-center justify-center" key={index}>
            <Card />
          </div>
        ))}
      </div>

      <div className="containers mb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex items-center justify-center" key={index}>
            <Card />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryScreen;
