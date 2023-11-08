import robot from "../assets/images/robot.png";
import mouse from "../assets/images/mouse2.png";
import '../styles/general.scss'

const Expertise = () => {
  interface skillInterface {
    name: string;
    subtext: string;
    icon: string | string[];
  }
  const skills: skillInterface[] = [
    {
      name: "WEBSITE ",
      subtext:
        "Ranging from simple to complex websites, I buid user friendly applications. ",
      icon: "",
    },
    {
      name: "MOBILE ",
      subtext:
        " With React native by my side, I can build quality mobile applications. ",
      icon: "",
    },
    {
      name: "BACKEND ",
      subtext:
        'Building secure and highly scalable "behind the scene magic" is so much fun for me.',
      icon: "",
    },
    {
      name: "CREATIVE ",
      subtext:
        " I strive to create an immersive web experience using three dimensional and svg art ",
      icon: "",
    },
  ];
  return (
    <main  id="expertise" className="w-screen flex flex-col items-center justify-center lg:min-h-screen pt-8 bg-black relative">
      {/* floating Images */}
      <div
        data-aos="fade-up-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="floating-img z-[3] absolute top-[0%] lg:top-[20%] -left-[3rem]  lg:left-0  lg:max-w-[300px] max-w-[200px]"
      >
        <img
          src={robot}
          alt="robot.png"
          className="w-full h-full object-cover rounded-full filter grayscale opacity-60"
        />
      </div>

      <div
        data-aos="fade-up-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="floating-img z-[3] absolute bottom-[2%] right-0  lg:max-w-[300px] max-w-[200px]"
      >
        <img
          src={mouse}
          alt="robot.png"
          className="w-full h-full object-cover rounded-full filter grayscale opacity-70"
        />
      </div>
      {/* text section */}
      <section className="summary   w-full">
        <h4 className=" w-[90%] uppercase text-[#B7AB98] lg:pl-32 pl-4 font-bold text-left  pb-2">
          EXPERTISE
        </h4>
        <ul>
          {skills.map((skill, i): JSX.Element => {
            return (
              <li
                data-aos="fade-up-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={i}
                className=" skill border-b-[0.1px] flex items-center justify-center  border-t-[0.1px] border-solid border-[#b7ab9821] py-0 cursor-pointer "
              >
                <div className="background"></div>
                <div className="flex lg:flex-row flex-col  z-[3] w-[90%] items-start lg:items-center justify-between  lg:px-32">
                  <p className="name text-[50px] lg:text-[100px] text-left font-bold whitespace-nowrap text-[#B7AB98]">
                    {skill.name}
                  </p>

                  <div className=" max-w-[70%] lg:block hidden">
                    <p className="text-black subtext text-lg text-left lg:text-right ">
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

export default Expertise;
