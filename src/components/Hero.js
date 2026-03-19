"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden text-white"
    >
      {/* ✅ Navbar OUTSIDE flow */}
      <Navbar />

      {/* ✅ Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gym.webp"
          alt="Fitness"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-16 pt-24">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            TRANSFORM YOUR <br />
            FITNESS <br />
            JOURNEY WITH EXPERT <br />
            GUIDANCE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-gray-300 max-w-xl"
          >
            Unlock your potential with personalized training programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <button className="bg-lime-400 text-black px-6 py-3 font-semibold skew-x-[-15deg]">
              <span className="inline-block skew-x-[15deg]">JOIN US</span>
            </button>

            <button className="border border-gray-400 px-6 py-3 skew-x-[-15deg] hover:bg-white hover:text-black transition">
              <span className="inline-block skew-x-[15deg]">ABOUT US</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}