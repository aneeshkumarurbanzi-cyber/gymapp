"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const teamData = [
  {
    name: "James Carter",
    role: "Personal Trainer",
    img: "/team1.jpg",
  },
  {
    name: "Ethan Brooks",
    role: "Strength Coach",
    img: "/team2.jpg",
  },
  {
    name: "John Smith",
    role: "Head Coach",
    img: "/team3.jpg",
  },
  {
    name: "Tyler Bennett",
    role: "Nutritionist",
    img: "/team4.jpg",
  },
  {
    name: "Chris Evans",
    role: "Crossfit Coach",
    img: "/team5.jpg",
  },
  {
    name: "Daniel Lee",
    role: "Yoga Trainer",
    img: "/team6.jpg",
  },
];

export default function Team() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % teamData.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? teamData.length - 1 : prev - 1
    );
  };

  // show 4 cards at a time
  const visibleCards = teamData.slice(index, index + 4);

  // loop fix (when near end)
  if (visibleCards.length < 4) {
    visibleCards.push(...teamData.slice(0, 4 - visibleCards.length));
  }

  return (
    <section
      id="team"
      className="bg-black text-white py-24 px-6 lg:px-16 relative overflow-hidden -mt-20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <p className="text-lime-400 font-semibold text-sm tracking-widest">
              TEAM
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-3">
              Join our team
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl">
              Meet our dedicated coaches and trainers helping you reach your
              fitness goals.
            </p>
          </div>

          <div className="flex gap-4 mt-6 lg:mt-0">
            <button className="bg-lime-400 text-black px-6 py-3 skew-x-[-15deg] font-semibold">
              <span className="inline-block skew-x-[15deg]">JOIN</span>
            </button>

            <button className="border border-gray-500 px-6 py-3 skew-x-[-15deg]">
              <span className="inline-block skew-x-[15deg]">
                ABOUT US
              </span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-16">
          
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
            <AnimatePresence mode="wait">
              {visibleCards.map((member, i) => (
                <motion.div
                  key={member.name + index}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full h-[320px] object-cover"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-3">
            <button
              onClick={prevSlide}
              className="bg-white/10 p-3 hover:bg-white/20 transition"
            >
              <ChevronLeftIcon className="w-5 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/10 p-3 hover:bg-white/20 transition"
            >
              <ChevronRightIcon className="w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}