"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const teamData = [
  { img: "/team1.webp" },
  { img: "/team2.webp" },
  { img: "/team3.webp" },
  { img: "/team4.webp" },
  { img: "/team5.webp" },
  { img: "/team6.webp" },
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

  // 🔥 RESPONSIVE COUNT
  const getVisibleCards = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return [teamData[index]]; // 📱 1 card on mobile
    }

    let cards = [];
    for (let i = 0; i < 4; i++) {
      cards.push(teamData[(index + i) % teamData.length]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      id="team"
      className="bg-black text-white py-16 md:py-24 px-4 md:px-6 lg:px-16 relative overflow-hidden -mt-20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <p className="text-lime-400 font-semibold text-xs md:text-sm tracking-widest">
              V2
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mt-2 md:mt-3">
              Our Gym And Equipments
            </h2>

            <p className="text-gray-400 mt-3 md:mt-4 max-w-xl text-sm md:text-base">
              Our dedicated coaches and trainers helping you reach your
              fitness goals.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 md:gap-4 mt-6 lg:mt-0">
            <button className="bg-lime-400 text-black px-4 md:px-6 py-2 md:py-3 text-sm md:text-base skew-x-[-15deg] font-semibold">
              <span className="inline-block skew-x-[15deg]">JOIN</span>
            </button>

            <button className="border border-gray-500 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base skew-x-[-15deg]">
              <span className="inline-block skew-x-[15deg]">
                ABOUT
              </span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-10 md:mt-16">
          
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            <AnimatePresence mode="wait">
              {visibleCards.map((member, i) => (
                <motion.div
                  key={i + index}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    
                    <Image
                      src={member.img}
                      alt="team"
                      width={300}
                      height={400}
                      className="
                        w-full 
                        h-[260px] sm:h-[300px] md:h-[320px]
                        object-cover
                      "
                    />

                    {/* 🔥 subtle overlay for style */}
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <div className="
            absolute 
            right-2 md:right-0 
            top-[45%] 
            -translate-y-1/2 
            flex gap-2 md:gap-3
          ">
            <button
              onClick={prevSlide}
              className="bg-white/10 p-2 md:p-3 hover:bg-white/20 transition rounded-md"
            >
              <ChevronLeftIcon className="w-4 md:w-5 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/10 p-2 md:p-3 hover:bg-white/20 transition rounded-md"
            >
              <ChevronRightIcon className="w-4 md:w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}