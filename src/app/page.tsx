"use client";

import Image from "next/image"
import memoji from "./images/memoji.png"
import web1 from "./images/web1.webp"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";

export default function Home() {

  return (
   <>
    <section className="h-screen flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900">
      <div className="z-1 relative">
       <motion.div
       
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      >
      <Card className="max-w-full backdrop-blur-sm bg-blue-500/30 border-0 z-1">
       <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-7">
        <div className="mr-auto place-self-center lg:col-span-8">
            <div className="flex items-center mb-3">
                <span className="text-5xl">👏🏻</span>
                <h4 className="text-3xl font-bold inline">Hi! I&apos;m</h4>
            </div>
            <div className="flex items-center">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">John Ermy </h1>
                <Image src={memoji} width={150} height={150} alt="John Ermy" />
            </div>
            <Card className="max-w-fit mb-4 backdrop-blur-2xl bg-blue-500/30 border-0">
                <div className="flex items-center">
                <h1 className="max-w-2xl mr-2 text-lg text-gray-300 font-extrabold tracking-tight leading-none">Always Active</h1>
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
                    </span>
                </div>
            </Card>
            
          
            <p className="max-w-2xl  mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I&apos;m passionate about Web Design and Graphic Design. If you are curious about my works, you can check it on <span className="font-extrabold">Behance</span></p>
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
                
            </motion.a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            
        </div>                
    </div>
    </Card>
    </motion.div>
    </div>
</section>

<section className="h-screen flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900"
    >
      

    <motion.div
    className="w-full md:m-60"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2 }}
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
        <div className="mr-auto place-self-center lg:col-span-1 flex items-center justify-center">
            <p className="max-w-2xl text-white text-4xl dark:text-gray-400 font-extrabold">Check out some of my latest projects with creative ideas.</p>           
        </div>
        <div className="hidden lg:mt-0 lg:flex inline-flex items-center justify-end">
        <motion.a  href="https://drive.google.com/file/d/11BNH122Eg6sJT624_X1hgxKylmOB-hM3/view?usp=sharing" target="_blank" className="inline-flex items-center justify-center h-20 px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
                Download CV
                
            </motion.a> 
        </div>                
    </div>
          <div className="rounded-lg w-full h-96 backdrop-blur-2xl bg-blue-500/30 border-0 overflow-hidden">
              <div className="grid grid-cols-2 gap-4 flex items-center justify-center h-full">
                <div className="w-full rounded-lg bg-transparent border-0 p-10 h-full">
                  <h5 className="text-2xl underline font-bold tracking-tight text-white dark:text-white">
                    Web Design
                  </h5>
                  <div className="h-5"></div>
                  <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    Construction Web Design
                  </h5>
                  <p className="font-normal text-white dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                  <div className="hidden lg:flex inline-flex items-center mt-10">
                  <motion.a href="https://www.behance.net/gallery/194455311/Saudi-Mshati-Construction-Web-Design" target="_blank" className="inline-flex items-center justify-center h-20 px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                      
                          See Project
                          <span className="pl-3">
                           
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                           
                          </span>

                          
                      </motion.a> 
                  </div>   
                </div>

                <div className="w-full rounded-lg bg-transparent border-0 p-10">
                  <motion.div
                   className="rotate-[-20deg] absolute top-12 w-full"
                  initial={{y : 316, opacity: 0 }}
                  whileInView={{ y : 0, opacity: 1  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  >
                        <Image className="rotate-[-20deg] absolute top-12"  src={web1} width={300} height={300} alt="John Ermy" />
                  </motion.div>
                </div>
              </div>
          </div>

          {/*  <-------- Spacer ---------- > */}
          <div className="h-5"></div>
          {/*  <-------- Spacer ---------- > */}

          <div className="grid grid-cols-2 gap-4 flex items-center justify-center">
            <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-white dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

            <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-white dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>

          {/*  <-------- Spacer ---------- > */}
          <div className="h-5"></div>
          {/*  <-------- Spacer ---------- > */}

          <div className="grid grid-cols-2 gap-4 flex items-center justify-center">
            <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-white dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

            <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-white dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
    </motion.div>

</section>

</>
  );
}
