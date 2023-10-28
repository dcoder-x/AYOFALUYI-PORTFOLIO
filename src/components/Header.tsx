import React from "react";
import logo from '../assets/images/logo.png'
import  '../App.css'
import '../styles/general.scss'
import { motion } from "framer-motion";


const Header = () => {
  const links: Array<{ name: string; link: string }> = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#expertise",
    },
    {
      name: "Work",
      link: "#experience",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <header className=" header flex justify-between w-full lg:px-4 fixed top-0 p-4 lg:p-[3rem] z-10">
      <div className="logo m-0 p-0">
        <img src={logo} className="max-w-[150px]" alt="" />
      </div>
      <ul className="menu lg:flex flex-col hidden items-start justify-between">
        {links?.map((link): JSX.Element => {
          return (
            <li className= "menu-item text-xs font-semibold mb-1  list-none ">
              <a className=" mix-blend-difference uppercase no-underline text-[#b7ab98ab] hover:text-[#B7AB98] " href={link.link}>{link.name}</a>
              <div className="underline">
                {/* <motion.div transition={{ ease: "easeOut", duration: 0.5 }} className="bg-[#B7AB98]" initial={{width:'0%'}} whileHover={{width:'100%'}}/> */}
              </div>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
