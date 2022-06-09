import React from "react";
import Avatar from "/public/images/avatar/avatar.jpg";
import Image from "next/image";

const Article = () => {
  return (
    <section className="mt-16 mb-40">
      <div className="max-w-[980px] mx-auto px-5">
        <span className="text-dark-pink font-medium">DEVELOPEMENT</span>
        <h3 className="text-gray font-medium">MAY 12, 2022</h3>
        <h1 className="text text-5xl font-medium text-dark mt-5">
          The React Cheatsheet for 2022
        </h1>
        <p className="font-medium text-xl text-dark w-full max-w-[500px] my-5">
          Do you want to get up to speed with React as quickly as possible?
        </p>
        <Image src={Avatar} />
        <div className="max-w-[653px] px-5 mx-auto">
          <p className="mt-5 text-xl text-dark">
            I’ve put together a super helpful cheatsheet to give you a complete
            overview of all of the React concepts you need to know in 2022.{" "}
            <strong>Let’s get started!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Article;
