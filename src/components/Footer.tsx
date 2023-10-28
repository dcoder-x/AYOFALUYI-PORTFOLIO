import React, { useContext } from "react";
import {Icon} from '@iconify/react'
import { AppContext } from "../App";

const Footer = ():JSX.Element => {

  // social links and Icons
  const socials: { link: string; icon: string; name?: string }[] = [
    {
      link: "",
      icon: "ri:github-fill",
      name: "Github",
    },
    {
      link: "",
      icon: "ri:instagram-fill",
      name: "Instagram",
    },
    {
      link: "",
      icon: "uil:linkedin",
      name: "LinkedIn",
    },
    {
      link: "",
      icon: "ri:whatsapp-fill",
      name: "Whatsapp",
    },
  ];

  const {sound,setSound} = useContext(AppContext)
  return (
  <footer className="fixed w-full bottom-0 flex items-end z-10 justify-between p-4 lg:p-[3rem]">
    <div className="social-icons lg:flex hidden flex-col item-center ">
    {
        socials.map((social):JSX.Element=>{
            return(
                <a href={social.link} className="text-[#B7AB98] my-2 no-underline">
                    <Icon icon={social.icon} width={30} />
                    <p>
                      {/* {
                        social.name
                      } */}
                    </p>
                </a>
            )
        })
    }
    </div>
    <button onClick={()=>{setSound(!sound)}} className="border  border-solid border-[#B7AB98] p-2 py-1 sound-button items-center flex rounded-full">
      <p className="text-[#B7AB98] text-xs">
        SOUND
      </p>
  <p className="text-gray-400 mx-1">
    {
      sound?'ON':'OFF'
    }
  </p>
    </button>
  </footer>);
};

export default Footer;
