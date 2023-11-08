import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { AppContext } from "../App";

const Footer = (): JSX.Element => {
  // social links and Icons
  const socials: { link: string; icon: string; name?: string }[] = [
    {
      link: "https://github.com/dcoder-x",
      icon: "ri:github-fill",
      name: "Github",
    },
    {
      link: "https://www.instagram.com/just_aeon/",
      icon: "ri:instagram-fill",
      name: "Instagram",
    },
    {
      link: "https://www.linkedin.com/in/ayomikun-faluyi-277252213/",
      icon: "uil:linkedin",
      name: "LinkedIn",
    },
    {
      link: "https://wa.me/+2348135699050?text=I%20have%20a%20job%20for%20you%20",
      icon: "ri:whatsapp-fill",
      name: "Whatsapp",
    },
  ];

  const context = useContext(AppContext);

  const setSound = context?.setSound
  const sound = context?.sound
  return (
    <footer className="fixed w-full bottom-0 flex items-end z-10 lg:z-1 justify-between p-4 lg:p-[3rem]">
      <div className="social-icons lg:flex hidden flex-col z-10 item-center ">
        {socials.map((social): JSX.Element => {
          return (
            <a onClick={()=>{window.open(social.link, "_blank")}} className="text-[#B7AB98] relative my-2 no-underline">
              <Icon icon={social.icon} className="icon" width={30} />
              <p className="hidden absolute bg-[#39eb8a] p-2 rounded top-[-40px]  whitespace-nowrap text-sm text-white my-2 ">
               Go to {social.name} &rarr;
              </p>
            </a>
          );
        })}
      </div>
      <button
        onClick={() => {
          if (setSound) {
            setSound(!sound);
          }
        
        }}
        className="border z-10  border-solid border-[#B7AB98] self-end justify-self-end p-2 py-1 sound-button items-center flex rounded-full"
      >
        <p className="text-[#B7AB98] text-xs">SOUND</p>
        <p className="text-gray-400 mx-1">{sound ? "ON" : "OFF"}</p>
      </button>
    </footer>
  );
};

export default Footer;
