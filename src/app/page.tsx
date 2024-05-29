"use client";

import Image from "next/image"
import memoji from "./images/memoji.png"
import web1 from "./images/web1.webp"
import web12 from "./images/web12.webp"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";
import CountUp, { useCountUp } from 'react-countup';

export default function Home() {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
   <>
    <section className="h-screen 2xl:h-screen flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900">
      <div className="z-1 relative">
       <motion.div
       
      initial={{ y:100, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      >
      <Card className="max-w-full backdrop-blur-sm bg-blue-500/30 border-0 z-1">
       <div className="grid max-w-screen-xl px-4 py-5 mx-auto lg:gap-8 xl:gap-0 2xl:p-8 lg:grid-cols-7">
        <div className="mr-auto place-self-center lg:col-span-8">
            <div className="flex items-center mb-3">
                <span className="text-5xl">👏🏻</span>
                <h4 className="2xl:text-2xl text-3xl font-bold inline">Hi! I&apos;m</h4>
            </div>
            <div className="flex items-center">
                <h1 className="max-w-2xl min-[1920px]:text-8xl 2xl:text-6xl mb-4 text-7xl font-extrabold tracking-tight leading-none md:text-8xl dark:text-white">John Ermy </h1>
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
                
            </motion.a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            
        </div>                
    </div>
    </Card>
    </motion.div>
    </div>
</section>

<section className=" min-[1920px]:h-fit 2xl:h-fit flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900"
    >
      

    <motion.div
    className="w-full 2xl:m-28 2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-0"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
      <div className="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-4 xl:gap-0 lg:py-16 lg:grid-cols-3">
        <div className="mr-auto place-self-center lg:col-span-2 flex items-center justify-center">
            <p className="max-w-2xl text-white text-4xl dark:text-gray-400 font-extrabold ">Check out some of my latest projects with creative ideas.</p>           
        </div>
        <div className="hidden lg:mt-0 lg:flex inline-flex items-center justify-end">
        <motion.a  href="https://drive.google.com/file/d/11BNH122Eg6sJT624_X1hgxKylmOB-hM3/view?usp=sharing" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
                Download CV
                
            </motion.a> 
        </div>                
    </div>
          <div className="rounded-lg w-full h-full md:h-96  backdrop-blur-2xl bg-blue-500/30 border-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex items-center justify-center h-full">
                <div className="w-full rounded-lg bg-transparent border-0 p-10 h-full">
                  <h5 className="text-2xl underline font-bold tracking-tight text-white dark:text-white">
                    Web Design
                  </h5>
                  <div className="h-5"></div>
                  <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    Construction Web Design
                  </h5>
                  <p className="font-normal text-white dark:text-gray-400 bg-gradient-to-b from-white bg-clip-text text-transparent">
                    Built with Wordpress Elementor Theme. Web development and Web design with contact forms.
                  </p>
                  <div className="lg:flex inline-flex items-center mt-10">
                  <motion.a href="https://www.behance.net/gallery/194455311/Saudi-Mshati-Construction-Web-Design" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
                <div>
                <div className="md:w-full rounded-lg bg-transparent border-0 p-10">
                  <motion.div
                   className="relative absolute"
                  initial={{y : 100 }}
                  whileInView={{ y : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  >
                        <Image className="z-1 md:rotate-[-20deg] absolute min-[1920px]:right-72 top-[-5rem] 2xl:right-72 right-20  2xl:top-[-5rem] 2xl:w-72 lg:w-60  sm:w-40"  src={web1} width={300} height={300} alt="John Ermy" />
                  </motion.div>
                </div>
                <div className="md:w-full rounded-lg bg-transparent border-0 p-10">
                  <motion.div
                   className="relative absolute"
                   initial={{y : -100 }}
                  whileInView={{ y : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  >
                        <Image className="z-0  md:rotate-[-20deg] absolute  right-[-7rem] top-[-7rem] min-[1920px]:right-0 2xl:top-[-20rem] 2xl:right-0 2xl:w-72 lg:w-60 sm:w-40"  src={web12} width={300} height={300} alt="John Ermy" />
                  </motion.div>
                </div>
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
              <p className="font-normal text-white dark:text-gray-400 ">
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
<section className=" min-[1920px]:h-fit 2xl:h-fit flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900"
    >
    <motion.div
    className="w-full 2xl:m-28 2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-0"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
      
      <div className="text-center text-white text-4xl dark:text-gray-400 font-extrabold pb-12 flex items-center justify-center">
        <div className="pr-4 invert-0 brightness-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#fff" d="M8.84 10.835h-1.965v-1.859h1.783c1.878 0 1.646 1.859.182 1.859zm5.789 1.058h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.9.396h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm15.271-.289c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.357-.733c1.668-.853 1.607-3.981-1.587-4.028h-4.056v8.73h3.771c3.958 0 3.891-3.967 1.872-4.702zm3.357-3.166h4v-.875h-4v.875zm4.943 3.693c-.545-3.505-6.053-3.711-6.053.872 0 4.526 5.18 3.818 5.949 1.56h-1.848c-.645.748-2.508.531-2.404-1.184h4.41c.009-.555-.009-.953-.054-1.248z"/></svg>
        </div>
              <h2>Behance Stats</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
                            <motion.div
                            className="text-center"
                            initial={{opacity : 0 }}
                            whileInView={{ opacity : 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            >
                                  <CountUp className="text-6xl font-extrabold" end={6348} enableScrollSpy />
                                  <h2 className="text-2xl font-bold pt-10">Project Views</h2>
                              </motion.div>

                              <motion.div
                            className="text-center"
                            initial={{opacity : 0 }}
                            whileInView={{ opacity : 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            >
                                  <CountUp className="text-6xl font-extrabold" end={112} enableScrollSpy />
                                  <h2 className="text-2xl font-bold pt-10">Appreciations</h2>
                              </motion.div>

                              <motion.div
                            className="text-center"
                            initial={{opacity : 0 }}
                            whileInView={{ opacity : 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            >
                                  <CountUp className="text-6xl font-extrabold" end={34} enableScrollSpy />
                                  <h2 className="text-2xl font-bold pt-10">Followers</h2>
                              </motion.div>
    </div>
    </motion.div>
</section>
</>
  );
}

