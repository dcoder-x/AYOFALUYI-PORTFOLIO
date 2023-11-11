import React from "react";
import face from "../assets/images/halfFace-min.jpg";

const About = () => {
  return (
    <main
    id="about"
      className="w-screen flex flex-col items-center justify-center py-[6rem] pb-[10rem] lg:pb-0 lg:py-0 lg:min-h-screen lg:pt-8 bg-no-repeat"
      style={{
        background: `linear-gradient(0,rgb(0,0,0,0.6),rgb(0,0,0,0.4)),url(${face})`,
      }}
    >
      <section className="summary lg:w-[70%] w-[90%]">
        <h4 className="text-lg uppercase text-[#B7AB98] text-left font-medium pb-2">
          About me
        </h4>
        <div className="img">
          <img src="" alt="" />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="summary-text  uppercase text-left text-[30px] lg:text-[80px]"
        >
          " I am a <strong className=" underline">passionate </strong>
          <strong className="text-[#39eb8a] whitespace-nowrap">
            fullstack engineer
          </strong>{" "}
          with a vision to build to high{" "}
          <strong className=" underline">quality </strong> digital products that
          make our lifes <strong className=" underline">fun </strong>. "
        </div>
      </section>
    </main>
  );
};

export default About;
