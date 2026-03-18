"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Initial assessment",
    desc: "We begin with a comprehensive fitness evaluation to understand your current level, set clear goals, and tailor the right approach for your body and lifestyle.",
    img: "/process1.jpg",
  },
  {
    id: "02",
    title: "Customized Workout Plan",
    desc: "Based on your assessment, we create a personalized training program designed to maximize results.",
    img: "/process2.jpg",
  },
  {
    id: "03",
    title: "Guided Training Sessions",
    desc: "Work with expert trainers to ensure proper form and stay motivated.",
    img: "/process3.jpg",
  },
  {
    id: "04",
    title: "Progress Tracking",
    desc: "Track performance and adjust plans as you hit milestones.",
    img: "/process4.jpg",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      id="process"
      initial={{ opacity: 0, y: 100, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white min-h-screen flex flex-col justify-center py-24 px-6 lg:px-16 -mt-20"
    >

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lime-400 text-sm font-semibold tracking-widest mb-5"
        >
          PROCESS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold"
        >
          How it works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mt-4"
        >
          Our training program guides you step by step to success.
        </motion.p>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-16 mt-20 items-stretch">

        {/* LEFT */}
        <div className="relative pl-10 flex flex-col justify-center">

          {/* Animated Vertical Line */}
          <motion.div
            className="absolute left-0 top-0 w-[2px] bg-lime-400"
            initial={{ height: 0 }}
            animate={{ height: `${(active + 1) * 25}%` }}
            transition={{ duration: 0.5 }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-10 cursor-pointer group"
            >
              <motion.div
                animate={{
                  scale: active === index ? 1.05 : 1,
                  opacity: active === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-6"
              >

                {/* Number */}
                <span
                  className={`text-sm ${
                    active === index ? "text-white" : "text-gray-500"
                  }`}
                >
                  {step.id}
                </span>

                {/* Text */}
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      active === index
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-sm mt-2 ${
                      active === index
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-full min-h-[500px] overflow-hidden rounded-xl">
          
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 60, scale: 1.05 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full"
          >
            <Image
              src={steps[active].img}
              alt="process"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </motion.section>
  );
}