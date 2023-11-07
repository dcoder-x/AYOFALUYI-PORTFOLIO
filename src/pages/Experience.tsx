import React from "react";
import resume from "../assets/lotties/resume.json";
import face from "../assets/images/sideview.jpg";
import Lottie from "lottie-react";
const Experience = () => {


  const stacks = [

    {
      name:'MongoDB',
      lottie: resume
    },
    {
      name:'Express JS',
      lottie: resume
    },
    {
      name:'React',
      lottie: resume
    },
    {
      name:'NodeJS',
      lottie: resume
    },

  ]
  return (
    <main
      id="experience"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="200"
      className="w-screen flex pr-10 flex-col items-center justify-center lg:min-h-screen pt-8 bg-no-repeat bg-black"
    >
      <section
        className="summary self-end   w-[55%]"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h4 className="text-lg uppercase z-5 text-[#B7AB98] text-left font-medium pb-2">
          Experience
        </h4>
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="summary-text text-[#d6d1c8]  uppercase text-left text-[20px] lg:text-[60px]">
          " WIth{" "}
          <strong className="text-[#39eb8a] whitespace-nowrap">
            3 years +
          </strong>{" "}
          <strong className=" underline"> Learning</strong> and{" "}
          <strong className=" underline"> working</strong> Experience. I have
          worked As a <strong className=" underline">team member</strong> and{" "}
          <strong className=" underline">freelancer </strong>. "
        </div>
        <div className="tech-stacks flex items-center">
          {
            stacks.map((stack):JSX.Element =>{
              return(
                <li className="m-2">
                  <Lottie animationData={stack.lottie} width={100} className="w-[30px]"/>
                </li>
              )
              })
          }
        </div>
      </section>
    </main>
  );
};

export default Experience;
