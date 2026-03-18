"use client";

import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section className="bg-black text-white py-24 px-6 flex items-center justify-center">
      
      <div className="max-w-3xl text-center">

        {/* TOP LABEL */}
        <p className="text-lime-400 font-semibold tracking-widest text-sm mb-4">
          JOIN
        </p>

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Start now
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
          Our training program is designed to guide you from registration to
          success. Follow our simple steps to achieve your fitness goals.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-6">

          {/* JOIN BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="relative px-8 py-4 bg-lime-400 text-black font-bold uppercase overflow-hidden"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
            }}
          >
            JOIN
          </motion.button>

          {/* ABOUT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 border border-white text-white font-bold uppercase"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
            }}
          >
            ABOUT US
          </motion.button>

        </div>
      </div>
    </section>
  );
}