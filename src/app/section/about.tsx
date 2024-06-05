"use client";

import profilepic from "../images/Profile.webp"
import Image from "next/image"
import { motion  } from "framer-motion";
import CountUp, { useCountUp } from 'react-countup';
import "../globals.css";

export default function Home() {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
   <>

<section className=" min-[1920px]:h-fit 2xl:h-fit flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900"
    >
      

    <motion.div
    className="w-full 2xl:m-28 md:m-28 2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-0 min-[1920px]:mb-0 "
    >

          <div className="grid grid-cols-2 gap-4 flex items-center justify-center ">
            <motion.div className="w-full flex items-center h-[34rem] p-8"
            initial={{ x:-100, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
                <div className="relative">
                <div className="flex items-center mb-3">
                    <span className="text-5xl">👏🏻</span>
                    <h4 className="2xl:text-2xl text-3xl font-bold inline text-white">Hi! I&apos;m John Ermy</h4>
                </div>
                <div className="flex items-center">
                    <h1 className="max-w-2xl min-[1920px]:h-48 md:h-60 min-[1920px]:text-6xl 2xl:text-6xl mb-4 text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">WordPress developer and Graphic Designer </h1>
                    
                </div>
                <p className="max-w-2xl 2xl:text-base  mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I use wordpress elementor theme and knowledge with inquiry forms (for mailing), woocommerce (for e-commerce), seo plugin tools, website maintenance, cpanel, google console, google analytics, semrush and ETC. When it comes to graphic design I use Adobe Photoshop and Adobe Illustrator. </p>
                </div>
            </motion.div>

            <motion.div className="w-full flex items-center justify-center h-[34rem] p-8"
            initial={{ x:100, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
                <div className="relative">
                    <motion.div className="flex items-center mb-3 rotate-6 rounded-lg border-dashed border-2 border-sky-500"
                    whileHover={{ rotate: 0, borderStyle: "double" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    style={{rotate: 6, borderStyle: "dashed"}}>
                            <Image className="rounded-lg shadow-md " src={profilepic} width={1000} height={1000} alt="John Ermy" />
                    </motion.div>
                </div>
            </motion.div>
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
    className="w-full 2xl:m-28 md:m-28 2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-20 min-[1920px]:mb-40 "
    >
      <div className="grid grid-cols-4 gap-4 w-full text-white">
                            <motion.div
                            className="text-center flex items-center justify-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1, y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2 }}
                            >
                                  <h2 className="text-6xl font-extrabold pr-4 text-white">5+</h2>
                                  <div className="text-left">
                                  <h3 className="text-xl font-regular text-white">Years of</h3>
                                  <h3 className="text-xl font-regular text-white">Experience</h3>
                                  </div>
                              </motion.div>

                              <motion.div
                            className="text-center flex items-center justify-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1, y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            >
                                  <h2 className="text-6xl font-extrabold pr-4 text-white">50+</h2>
                                  <div className="text-left">
                                  <h3 className="text-l font-regular text-white">Website</h3>
                                  <h3 className="text-l font-regular text-white">Projects</h3>
                                  </div>
                              </motion.div>

                              <motion.div
                            className="text-center flex items-center justify-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1, y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            >
                                  <h2 className="text-6xl font-extrabold pr-4 text-white">100+</h2>
                                  <div className="text-left">
                                  <h3 className="text-l font-regular text-white">Graphic Design</h3>
                                  <h3 className="text-l font-regular text-white">Projects</h3>
                                  </div>
                              </motion.div>

                              <motion.div
                            className="text-center flex items-center justify-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1, y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            >
                                  <h2 className="text-6xl font-extrabold pr-4 text-white">60+</h2>
                                  <div className="text-left">
                                  <h3 className="text-l font-regular text-white">Happy</h3>
                                  <h3 className="text-l font-regular text-white">Clients</h3>
                                  </div>
                              </motion.div>
    </div>
    </motion.div>
</section>
</>
  );
}

