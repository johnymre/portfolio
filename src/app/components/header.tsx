"use client";
import { Button, Navbar } from "flowbite-react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../images/logo.svg";


export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
      >
      <Navbar fluid className="bg-transparent absolute w-full">
      <Navbar.Brand href="#">
        <Image src={logo} width={80} height={80} alt="John Ermy" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">John Ermy</span> */}
      </Navbar.Brand>
      
      <motion.div 
      className="flex md:order-2"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button href = "mailto:johnermy@gmail.com" className=" md:hover:bg-gray-100 bg-gradient-to-r from-blue-700 to-blue-600 border-dashed border-2 border-sky-500">Contact Me</Button>
      </motion.div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="md:text-sky-500 font-bold md:hover:text-sky-500" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#">About</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#">Projects</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#">Education</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="mailto:johnermy@gmail.com">Contact</Navbar.Link>
      </Navbar.Collapse>
     
        </Navbar>
    </motion.div>
  );
}
