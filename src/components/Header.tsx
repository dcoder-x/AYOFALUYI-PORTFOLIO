import React, { useRef } from "react";
import logo from "../assets/images/logo.png";
import "../App.css";
import "../styles/general.scss";
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

  const nav = useRef<HTMLElement | null>(null);
  const toggle = useRef<HTMLDivElement | null>(null);

  function toggleNav() {
    console.log("togglr");

    // Show Nav
    nav?.current?.classList.toggle("active");

    // Transform Hamburger into 'X'
    toggle?.current?.classList.toggle("active");
  }
  return (
    <header className=" header flex justify-between w-full lg:px-4 fixed top-0 p-4 lg:p-[3rem] z-10">
      <div className="logo m-0 p-0">
        <img src={logo} className="max-w-[150px]" alt="" />
      </div>
      <ul className="menu lg:flex md:hidden flex-col hidden items-start justify-between">
        {links?.map((link): JSX.Element => {
          return (
            <li className="menu-item text-xs font-semibold mb-1  list-none ">
              <a
                className=" mix-blend-difference uppercase no-underline text-[#b7ab98ab] hover:text-[#B7AB98] "
                href={link.link}
              >
                {link.name}
              </a>
              <div className="underline">
                {/* <motion.div transition={{ ease: "easeOut", duration: 0.5 }} className="bg-[#B7AB98]" initial={{width:'0%'}} whileHover={{width:'100%'}}/> */}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="hamburger lg:hidden" ref={toggle} onClick={(e) => toggleNav()}>
        <span className="hamburger__patty"></span>
        <span className="hamburger__patty"></span>
        <span className="hamburger__patty"></span>
      </div>
      <nav className="nav lg:hidden" ref={nav}>
        {links?.map((link): JSX.Element => {
          return (
            <li
              onClick={(e) => {
                nav.current?.classList.toggle("active");
                toggle.current?.classList.toggle("active");
              }}
              className="menu-item text-xl font-semibold my-2  list-none "
            >
              <a
                className=" mix-blend-difference uppercase no-underline text-[#f1e8daab] hover:text-[#B7AB98] "
                href={link.link}
              >
                {link.name}
              </a>
              <div className="underline">
                {/* <motion.div transition={{ ease: "easeOut", duration: 0.5 }} className="bg-[#B7AB98]" initial={{width:'0%'}} whileHover={{width:'100%'}}/> */}
              </div>
            </li>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
