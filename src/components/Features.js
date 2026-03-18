"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardDocumentListIcon,
  PencilSquareIcon,
  BoltIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ClipboardDocumentListIcon,
    title: "Personalized Assessment",
    desc: "We start with an evaluation to understand your fitness level and goals.",
  },
  {
    icon: PencilSquareIcon,
    title: "Tailored Plan",
    desc: "Based on your assessment, our trainers create a workout plan specifically for you.",
  },
  {
    icon: BoltIcon,
    title: "Hands-On Training",
    desc: "Get expert guidance during each session to ensure you're on track.",
  },
  {
    icon: ClockIcon,
    title: "Continuous Progress",
    desc: "We track your results and adjust your plan to keep you progressing towards.",
  },
];

export default function Features() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 100, scale: 0.98, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-black text-white py-24 px-6 lg:px-16 -mt-20"
    >
      {/* GRID WRAPPER (FIXED) */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lime-400 text-sm font-semibold tracking-widest"
          >
            TRANSFORM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-extrabold mt-3"
          >
            Our Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 mt-4 max-w-xl"
          >
            Our training program is designed to guide you from registration to
            success. Follow our simple steps to achieve your fitness goals.
          </motion.p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-10 mt-12">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group cursor-pointer"
                >
                  <Icon className="w-6 h-6 text-lime-400 mb-3 transition group-hover:scale-110" />

                  <h3 className="text-lg font-semibold group-hover:text-lime-400 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 mt-12"
          >
            {/* Primary Button */}
            <button className="relative overflow-hidden bg-lime-400 text-black px-6 py-3 font-semibold skew-x-[-15deg] group">
              <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-700" />
              <span className="relative inline-block skew-x-[15deg] group-hover:scale-105 transition">
                JOIN
              </span>
            </button>

            {/* Secondary Button */}
            <button className="border border-gray-400 px-6 py-3 skew-x-[-15deg] hover:bg-white hover:text-black transition">
              <span className="inline-block skew-x-[15deg]">
                ABOUT US
              </span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-xl"
        >
          <Image
            src="/feature.jpg"
            alt="Gym"
            width={500}
            height={600}
            className="object-cover w-full h-[500px] transition duration-700 hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

      </div>
    </motion.section>
  );
}