"use client";

import Image from "next/image"
import memoji from "../images/memoji.png"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";



export default function Home() {


  return (
   <>
    <section className="h-screen 2xl:h-screen flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900" >
      <div className="relative">
       <motion.div
       
      initial={{ y:100, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      >
      <Card className="max-w-full backdrop-blur-sm bg-blue-500/30 border-0">
       <div className="grid max-w-screen-xl px-4 py-5 mx-auto lg:gap-8 xl:gap-0 2xl:p-8 lg:grid-cols-7">
        <div className="mr-auto place-self-center lg:col-span-8">
            <div className="flex items-center mb-3">
                <span className="text-5xl">👏🏻</span>
                <h4 className="2xl:text-2xl text-3xl font-bold inline text-white">Hi! I&apos;m</h4>
            </div>
            <div className="flex items-center">
                <h1 className="max-w-2xl min-[1920px]:text-8xl text-white 2xl:text-6xl mb-4 text-7xl font-extrabold tracking-tight leading-none md:text-8xl dark:text-white">John Ermy </h1>
                <Image src={memoji} width={150} height={150} alt="John Ermy" />
            </div>
            <div className="max-w-fit mb-4 shadow-md rounded-lg backdrop-blur-2xl bg-blue-500/30 border-0 p-4">
                <div className="flex items-center">
                <h1 className="max-w-2xl 2xl:text-base  mr-2 text-lg text-gray-300 font-extrabold tracking-tight leading-none">Always Active</h1>
                <span className="relative flex h-3 w-3 ">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
                </span>
                </div>
            </div>
            
          
            <p className="max-w-2xl 2xl:text-base  mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I&apos;m passionate about Web Design and Graphic Design. If you are curious about my works, you can check it on <span className="font-extrabold">Behance</span></p>
            <p className="inline-flex mr-8 items-center justify-center py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                See more about me
                <span className="pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

                </span>
            </p>
            <motion.a href="https://drive.google.com/file/d/11BNH122Eg6sJT624_X1hgxKylmOB-hM3/view?usp=sharing" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
                Download CV
                <span className="pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#fff" d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/></svg>
                </span>
            </motion.a> 
            <motion.a href="https://drive.google.com/file/d/11BNH122Eg6sJT624_X1hgxKylmOB-hM3/view?usp=sharing" target="_blank" className="inline-flex items-center justify-center ml-4 px-3 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-full hover:text-white  bg-transparent focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </motion.a> 
            <motion.a href="https://drive.google.com/file/d/11BNH122Eg6sJT624_X1hgxKylmOB-hM3/view?usp=sharing" target="_blank" className="inline-flex items-center justify-center ml-2 px-3 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-full hover:text-white  bg-transparent focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>

            </motion.a>
            <motion.a href="https://drive.google.com/file/d/11BNH122Eg6sJT624_X1hgxKylmOB-hM3/view?usp=sharing" target="_blank" className="inline-flex items-center justify-center ml-2 px-3 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-full hover:text-white  bg-transparent focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>

            </motion.a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            
        </div>                
    </div>
    </Card>
    </motion.div>
    </div>
    
</section>

</>
  );
}

