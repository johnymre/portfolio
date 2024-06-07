"use client";


import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import "../globals.css";

export default function Home() {
  return (
   <>
        <section className=" min-[1920px]:h-fit 2xl:h-fit flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900"
    >
    <motion.div
    className="w-full 2xl:m-28 2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-0 min-[1920px]:mb-40 md:m-28 md:mb-20 md:mt-20"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
      
      <div className="text-center text-white text-4xl dark:text-gray-400 font-extrabold pb-12 flex items-center justify-center">
              <h2>Skills</h2>
      </div>
      <div className="grid grid-cols-6 gap-4 w-full">
                            <motion.div
                            className="text-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1 , y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            >
                                
                                 <Card className="w-full h-36 backdrop-blur-2xl bg-blue-500/30 border-0 flex items-center justify-center group">
                                 <div className="grayscale group-hover:grayscale-0 transition-all ease-in-out delay-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                                                <path fill="#fff" d="M24 4.050000000000001A19.95 19.95 0 1 0 24 43.95A19.95 19.95 0 1 0 24 4.050000000000001Z"></path><path fill="#01579b" d="M8.001,24c0,6.336,3.68,11.806,9.018,14.4L9.385,17.488C8.498,19.479,8.001,21.676,8.001,24z M34.804,23.194c0-1.977-1.063-3.35-1.67-4.412c-0.813-1.329-1.576-2.437-1.576-3.752c0-1.465,1.471-2.84,3.041-2.84 c0.071,0,0.135,0.006,0.206,0.008C31.961,9.584,28.168,8,24.001,8c-5.389,0-10.153,2.666-13.052,6.749 c0.228,0.074,0.307,0.039,0.611,0.039c1.669,0,4.264-0.2,4.264-0.2c0.86-0.057,0.965,1.212,0.099,1.316c0,0-0.864,0.105-1.828,0.152 l5.931,17.778l3.5-10.501l-2.603-7.248c-0.861-0.046-1.679-0.152-1.679-0.152c-0.862-0.056-0.762-1.375,0.098-1.316 c0,0,2.648,0.2,4.217,0.2c1.675,0,4.264-0.2,4.264-0.2c0.861-0.057,0.965,1.212,0.104,1.316c0,0-0.87,0.105-1.832,0.152l5.891,17.61 l1.599-5.326C34.399,26.289,34.804,24.569,34.804,23.194z M24.281,25.396l-4.8,13.952c1.436,0.426,2.95,0.652,4.52,0.652 c1.861,0,3.649-0.324,5.316-0.907c-0.04-0.071-0.085-0.143-0.118-0.22L24.281,25.396z M38.043,16.318 c0.071,0.51,0.108,1.059,0.108,1.645c0,1.628-0.306,3.451-1.219,5.737l-4.885,14.135C36.805,35.063,40,29.902,40,24 C40,21.219,39.289,18.604,38.043,16.318z"></path><path fill="#01579b" d="M4,24c0,11.024,8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4S4,12.976,4,24z M5.995,24 c0-9.924,8.074-17.999,18.004-17.999S42.005,14.076,42.005,24S33.929,42.001,24,42.001C14.072,42.001,5.995,33.924,5.995,24z"></path>
                                            </svg>
                                    </div>
                                 </Card>
                                 
                                  <h2 className="text-lg font-regular pt-8 text-white">Wordpress</h2>
                              </motion.div>

                              <motion.div
                            className="text-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1 , y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            >
                                  <Card className="w-full h-36 backdrop-blur-2xl bg-blue-500/30 border-0 flex items-center justify-center group">
                                    <div className="grayscale group-hover:grayscale-0 transition-all ease-in-out delay-150">
                                    <svg height="70"  version="1.1" viewBox="0 0 512 512" width="70" xmlns="http://www.w3.org/2000/svg" ><g id="_x31_09-elementor"><g><path d="M462.999,26.001H49c-12.731,0-22.998,10.268-22.998,23v413.998c0,12.732,10.267,23,22.998,23    h413.999c12.732,0,22.999-10.268,22.999-23V49.001C485.998,36.269,475.731,26.001,462.999,26.001" fill="#D63362"/><rect height="204.329" fill="#FFFFFF" width="40.865" x="153.836" y="153.836"/><rect height="40.866" fill="#FFFFFF" width="122.7" x="235.566" y="317.299"/><rect height="40.865" fill="#FFFFFF" width="122.7" x="235.566" y="235.566"/><rect height="40.865" fill="#FFFFFF" width="122.7" x="235.566" y="153.733"/></g></g><g id="Layer_1"/></svg> </div>
                                 </Card>
                                  <h2 className="text-lg font-regular pt-8 text-white">Elementor Theme</h2>
                              </motion.div>

                              <motion.div
                            className="text-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1 , y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                            >
                                  <Card className="w-full h-36 backdrop-blur-2xl bg-blue-500/30 border-0 flex items-center justify-center group">
                                    <div className="grayscale group-hover:grayscale-0 transition-all ease-in-out delay-150">
                                    <svg height="70" version="1.1" viewBox="0 0 512 512" width="70" xmlns="http://www.w3.org/2000/svg"><g id="_x32_3_x2C__Photoshop_x2C__Adobe"><g><rect height="510.578" fill="#4FC7EC" width="510.576" x="1.207" y="0.711"/><rect height="465.646" fill="#242238" width="465.646" x="23.669" y="23.179"/><g><g><g><g id="XMLID_239_"><g><path d="M125.389,124.051c0-1.76,0.302-2.459,1.811-2.459         c11.48-0.354,34.144-0.703,57.105-0.703c59.215,0,81.802,34.454,82.104,75.205c0,55.848-41.623,77.024-86.033,77.024         c-8.459,0-16.616,0-18.734,0v79.795c0,2.108-0.601,2.813-2.114,2.813h-32.026c-1.509,0-2.114-0.704-2.114-2.459V124.051z          M161.643,239.047c2.42,0.35,6.95,0.699,19.642,0.699c23.864,0,46.826-6.801,46.826-41.929         c0-28.102-15.406-42.536-43.805-42.536c-11.783,0-20.243,0.35-22.663,0.704V239.047z" id="XMLID_240_" fill="#4FC7EC"/></g></g><g id="XMLID_236_"><g><path d="M341.819,212.791c-14.549,0-18.405,9.099-18.405,15.773         c0,8.433,3.856,12.997,26.123,23.537c30.577,14.753,43.64,27.752,43.64,53.04c0,35.129-22.859,55.115-55.517,55.115         c-15.733,0-35.585-1.5-48.054-10.632c-1.188-0.704-1.782-1.756-1.782-3.516v-32.316c0-1.756,1.189-2.459,2.08-1.756         c15.436,11.592,32.652,14.886,48.088,14.886c13.658,0,18.406-9.103,18.406-16.829c0-9.133-3.299-14.404-24.675-24.59         c-30.577-14.754-43.306-27.432-43.306-53.074c0-28.455,21.337-51.958,56.368-51.958c18.107,0,30.871,0.485,39.186,6.102         c1.482,1.406,1.781,2.459,1.781,4.568v28.804c0,2.105-1.188,3.163-2.672,2.105         C372.393,215.028,357.255,212.791,341.819,212.791z" id="XMLID_237_" fill="#4FC7EC"/></g></g></g></g></g></g></g><g id="Layer_1"/></svg>
                                    </div>
                                 </Card>
                                  <h2 className="text-lg font-regular pt-8 text-white">Adobe Photoshop</h2>
                              </motion.div>
                              <motion.div
                            className="text-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1 , y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                            >
                                  <Card className="w-full h-36 backdrop-blur-2xl bg-blue-500/30 border-0 flex items-center justify-center group">
                                    <div className="grayscale group-hover:grayscale-0 transition-all ease-in-out delay-150">
                                    <svg height="70" version="1.1" viewBox="0 0 512 512" width="70" xmlns="http://www.w3.org/2000/svg"><g id="_x31_1_x2C__Illustrator_x2C__Adobe_x2C__Ai"><g><rect height="510.578" fill="#F0A024" width="510.576" x="1.207" y="0.711"/><rect height="465.646" fill="#373122" width="465.646" x="23.669" y="23.179"/><g><g><g id="XMLID_335_"><g id="XMLID_341_"><g><path d="M177.76,291.347l-18.431,61.119c-0.303,2.109-1.21,2.813-3.021,2.813h-30.82         c-2.113,0-2.714-1.057-2.113-3.511c16.317-53.748,43.809-143.321,63.144-204.092c0.908-3.511,1.815-7.025,2.417-19.32         c0-1.403,0.908-2.107,1.815-2.107h41.696c1.508,0,1.811,0.352,2.416,1.756c22.354,72.011,46.827,151.4,69.788,224.113         c0.605,2.104,0,3.161-1.811,3.161h-33.841c-1.511,0-2.115-0.703-2.716-2.108l-19.339-61.823H177.76z M238.787,256.92         c-6.043-23.535-20.848-70.956-26.887-95.545h-0.303c-4.535,23.183-16.918,62.877-25.983,95.545H238.787z" id="XMLID_342_" fill="#F0A024"/></g></g><g id="XMLID_337_"><g><path d="M335.278,139.531c0-12.996,8.607-21.776,20.183-21.776         c12.172,0,19.595,8.78,19.595,21.776c0,13.35-8.016,21.78-19.889,21.78C343.29,161.311,335.278,152.881,335.278,139.531z          M337.354,187.304c0-2.107,0.592-2.808,2.08-2.808h31.463c1.782,0,2.379,0.351,2.379,2.808v165.098         c0,1.76-0.597,2.808-2.379,2.808h-30.871c-1.78,0-2.672-0.698-2.672-3.157V187.304z" id="XMLID_338_" fill="#F0A024"/></g></g></g></g></g></g></g><g id="Layer_1"/></svg>
                                    </div>
                                 </Card>
                                  <h2 className="text-lg font-regular pt-8 text-white">Adobe Illustrator</h2>
                              </motion.div>
                              <motion.div
                            className="text-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1 , y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                            >
                                  <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 ">

                                </Card>
                                  <h2 className="text-2xl font-bold pt-10 text-white"></h2>
                              </motion.div>
    </div>
    </motion.div>
</section>
   </>
  );
}

