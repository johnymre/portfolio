"use client";

import React, { useState, useEffect } from "react";
import { Button, Navbar } from "flowbite-react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../images/logo.svg";



export default function Header() {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 80){
      setColor(true)
    } else {
      setColor(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeColor)
  }, []);

  
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
      >
      <Navbar fluid className={color ? "bg-blue-600 absolute w-full fixed z-1 shadow-sm ease-in-out duration-300" :  "bg-transparent absolute w-full fixed z-1 backdrop-blur-sm ease-in-out duration-300"}>
      <Navbar.Brand href="/">
        <Image src={logo} width={80} height={80} alt="John Ermy" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">John Ermy</span> */}
      </Navbar.Brand>
      
      <motion.div 
      className="flex md:order-2"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button href = "mailto:johnermy@gmail.com" className="hover:text-white md:hover:bg-gray-100 bg-gradient-to-r from-blue-700 to-blue-600 border-dashed border-2 border-sky-500">Contact Me</Button>
      </motion.div>
      <Navbar.Toggle className = "z-2" /> 
      <Navbar.Collapse>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#projects">Projects</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#">About</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#">Education</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#">Work Experience</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="mailto:johnermy@gmail.com">Contact</Navbar.Link>
      </Navbar.Collapse>
     
        </Navbar>
    </motion.div>
  );
}