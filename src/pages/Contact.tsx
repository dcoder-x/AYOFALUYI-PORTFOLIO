import { Icon } from "@iconify/react/dist/iconify.js";
import "../styles/general.scss";
import call from "../assets/images/smile2.jpg";
import Lottie from "lottie-react";
import resume from "../assets/lotties/resume.json";

const Contact = () => {
  const socials: { link: string; icon: string; name?: string }[] = [
    {
      link: "",
      icon: "😹",
      name: "Github",
    },
    {
      link: "",
      icon: "📸",
      name: "Instagram",
    },
    {
      link: "",
      icon: "💼",
      name: "LinkedIn",
    },
    {
      link: "",
      icon: "🤙",
      name: "Whatsapp",
    },

    {
      link: "",
      icon: "📫",
      name: "E-mail",
    },
  ];
  return (
    <main
      id="contact"
      className="contact  w-screen lg:p-20 lg:pl-40 p-4 relative"
    >
      <section className=" flex flex-col lg:w-1/2 text-left z-3 relative">
        <p
          className="cta text-left lg:text-[50px] my-2"
          data-aos="fade-up-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          I am just a <strong className="text-[#39eb8a]">call</strong> away
          <p className="text-xl">Reach out for collaborations</p>
        </p>

        <div className="social-icons flex flex-row flex-wrap lg:w-[70%] item-center my-4">
          {socials.map((social): JSX.Element => {
            return (
              <a
                href={social.link}
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
                className="social text-[#B7AB98] lg:w-[30%] w-2/5 mx-1 my-2 no-underline flex "
              >
                <p>{social.icon}</p>
                <p className="mx-2 whitespace-nowrap" >
                  {social.name}
                  <div className="underline">
                    {/* <motion.div transition={{ ease: "easeOut", duration: 0.5 }} className="bg-[#B7AB98]" initial={{width:'0%'}} whileHover={{width:'100%'}}/> */}
                  </div>
                </p>
              </a>
            );
          })}
        </div>

        <div className="resume my-4">
          Resume
          <Lottie
            className="my-2 max-w-[200px lg:block
          "
            animationData={resume}
          />
          <button
            type="button"
            className="text-black cursor-pointer bg-[#39eb8a] rounded p-2"
          >
            Download Resume
          </button>
        </div>

        <p className="gospel " >JESUS LOVES YOU DEARLY 💖!</p>
      </section>
    </main>
  );
};

export default Contact;
