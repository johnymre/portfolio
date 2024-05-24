"use client";
import { motion } from "framer-motion"
import Image from "next/image"
import memoji from "./images/memoji.png"

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-8">
            <div className="flex items-center mb-3">
                <span className="text-5xl">👏🏻</span>
                <h4 className="text-3xl font-bold inline">Hi! I'm</h4>
            </div>
            <div className="flex items-center">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">John Ermy </h1>
                <Image src={memoji} width={150} height={150} alt="John Ermy" />
            </div>
            
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I'm very passionate about Web Design, and Graphic Design. If you are curious about my works, you can check it on <span className="font-extrabold">Behance</span></p>
            <p className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                See more about me
                <span className="pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

                </span>
            </p>
            <motion.a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
</section>
  );
}
