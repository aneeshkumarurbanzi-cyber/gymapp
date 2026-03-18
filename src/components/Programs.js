"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Yoga",
    desc: "Build flexibility, balance, and inner focus with personalized yoga sessions designed for you.",
    img: "/p1.jpg",
  },
  {
    title: "Strength Training",
    desc: "Transform your body with targeted strength programs that maximize muscle growth.",
    img: "/p2.jpg",
  },
  {
    title: "Cardio",
    desc: "Boost your stamina and burn calories efficiently with dynamic cardio workouts.",
    img: "/p3.jpg",
  },
];

// 🔥 container animation (stagger effect)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 🔥 card animation
const card = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Programs() {
  return (
    <motion.section
      id="programs"
      initial={{ opacity: 0, y: 80, scale: 0.98, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white py-20 px-6 lg:px-16"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lime-400 text-sm font-semibold tracking-widest"
        >
          PROGRAMS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold mt-3"
        >
          Our Training Programs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 mt-4"
        >
          Our training programs are designed to empower individuals at all skill
          levels. We have the right programs for you.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 mt-16"
      >
        {programs.map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.05, y: -10 }} // 🔥 stronger hover
            className="group cursor-pointer"
          >
            
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-lime-400/20 transition duration-500">
              
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={500}
                className="w-full h-[400px] object-cover transition duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500" />

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-lime-400/10 transition duration-500" />
            </div>

            {/* Text */}
            <h3 className="mt-4 text-xl font-semibold transition group-hover:text-lime-400">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-2 text-sm group-hover:text-gray-300 transition">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center gap-6 mt-16"
      >
        {/* Shine Button */}
        <button className="relative overflow-hidden bg-lime-400 text-black px-6 py-3 font-semibold skew-x-[-15deg] group">
          
          <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-700" />

          <span className="relative inline-block skew-x-[15deg] group-hover:scale-110 transition duration-300">
            JOIN
          </span>
        </button>

        {/* Secondary */}
        <button className="border border-gray-400 px-6 py-3 skew-x-[-15deg] hover:bg-white hover:text-black transition duration-300">
          <span className="inline-block skew-x-[15deg]">
            ABOUT PROGRAMS
          </span>
        </button>
      </motion.div>
    </motion.section>
  );
}                   