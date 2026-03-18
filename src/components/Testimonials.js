"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    img: "/t1.jpg",
    text: "These workouts aren't just effective — they're empowering. I've built discipline and strength I never knew I had.",
    role: "Freelance Photographer",
  },
  {
    img: "/t2.jpg",
    text: "I've tried gyms, apps, and diets — nothing compares to this program. The structure made all the difference.",
    role: "Account Executive",
  },
  {
    img: "/t3.jpg",
    text: "The strength training plan helped me recover from injury and come back even stronger.",
    role: "Former College Athlete",
  },
  {
    img: "/t4.jpg",
    text: "Amazing trainers and energy. This place changed my lifestyle.",
    role: "Entrepreneur",
  },
  {
    img: "/t5.jpg",
    text: "I feel stronger, healthier, and more confident every day.",
    role: "Fitness Model",
  },
  {
    img: "/t6.jpg",
    text: "Best fitness decision I've ever made.",
    role: "Doctor",
  },
];

const loopData = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">

      {/* 🔥 SLIDER */}
      <motion.div
        className="flex h-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: isMobile ? 15 :15, // ⚡ faster on mobile
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopData.map((item, i) => (
          <div
            key={i}
            className="
              relative h-full flex-shrink-0
              w-[100vw]        
              sm:w-[50vw]      
              lg:w-[33.3333vw]
            "
          >
            {/* IMAGE */}
            <Image
              src={item.img}
              alt="testimonial"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-8 md:bottom-12 left-5 md:left-8 right-5 md:right-8 text-white">
              
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                "{item.text}"
              </p>

              <p className="mt-3 md:mt-4 text-xs text-gray-300 tracking-wide">
                {item.role}
              </p>

            </div>
          </div>
        ))}
      </motion.div>

      {/* 🔥 LEFT FADE */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 md:w-32 lg:w-40 bg-gradient-to-r from-black to-transparent z-10" />

      {/* 🔥 RIGHT FADE */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 md:w-32 lg:w-40 bg-gradient-to-l from-black to-transparent z-10" />

    </section>
  );
}