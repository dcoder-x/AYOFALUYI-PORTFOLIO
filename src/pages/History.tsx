import React from "react";
import bag from "../assets/images/bag.png";
import '../styles/general.scss'

const History = () => {
  interface skillInterface {
    name: string;
    subtext: string;
    time: string | string[];
  }
  const skills: skillInterface[] = [
    {
      name: "BEKKAH AI ",
      subtext: "Front-end developer",
      time: "JUNE 2022 - JUNE 2023",
    },
    {
      name: "FREELANCER ",
      subtext:
        " With React native by my side, I can build quality mobile applications. ",
      time: "2021 - PRESENT",
    },
  ];
  return (
    <main
    id="history"
      className="w-screen flex flex-col  justify-center lg:min-h-screen pt-8 bg-black relative"
      //   style={{
      //     background: `linear-gradient(0,rgb(0,0,0,0.5),#00000066),url(${bag})`,
      //     backgroundColor: "black",
      //     backgroundPosition: "left",
      //     // backgroundSize:"40%",
      //     backgroundRepeat: "no-repeat",
      //     backgroundAttachment: "fixed",
      //   }}
    >
      {/* floating Images */}
      <div
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="floating-img z-10 absolute lg:top-[20%] top-[0%] left-0 lg:max-w-[300px]  max-w-[200px]"
      >
        <img
          src={bag}
          alt="robot.png"
          className="w-full h-full object-cover rounded-full filter grayscale opacity-50"
        />
      </div>
      <section className="summary   w-full">
        <h4 className=" w-[90%] uppercase pl-4  text-[#B7AB98] lg:pl-32 text-left font-bold pb-2">
          History
        </h4>
        <ul>
          {skills.map((skill, i): JSX.Element => {
            return (
              <li
                data-aos="fade-up-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={i}
                className="history border-b-[0.1px] flex items-center justify-center  border-t-[0.1px] border-solid border-[#b7ab9821] py-0 cursor-pointer "
              >
                <div className="background"></div>
                <div className="flex z-[3] lg:flex-row flex-col  w-[90%] items-start lg:items-center justify-between  lg:px-32">
                  <div className="text-left ">
                    <p className="name text-[50px] lg:text-[100px] text-left font-bold whitespace-nowrap text-[#B7AB98]">
                      {skill.name}
                    </p>
                    <p className="lg:text-2xl text-xl font-light">{skill.time}</p>
                  </div>

                  <div className=" max-w-[70%] lg:block hidden">
                    <p className="text-black  subtext text-lg text-left lg:text-right ">
                      {skill.subtext}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default History;
