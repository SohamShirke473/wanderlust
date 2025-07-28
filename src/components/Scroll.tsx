"use client";

import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { motion } from "framer-motion";
export function HeroScroll() {
  const images = [
    "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg",
    "https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg",
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
  ];
  return (
    <div className="flex flex-col overflow-hidden h-300 ">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="font-semibold text-lg md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 py-2 tracking-wider">
              Discover the world
            </h2>

            <motion.h1
              className="text-4xl md:text-6xl font-semibold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
                Wanderlust Adventures
              </span>
            </motion.h1>

          </>
        }

        
      >
        <ImagesSlider className="h-139 rounded-2xl" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Escape Ordinary. <br />
              Embrace Extraordinary.
            </motion.p>
          </motion.div>
        </ImagesSlider>
      </ContainerScroll>
    </div>
  );
}
