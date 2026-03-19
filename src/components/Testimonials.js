"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    img: "/t1.jpg",
    name: "Aneesh K.",
    
    text: "From day one, the vibe, the trainers, and the programs pushed me beyond my limits. Best decision I’ve made for my health.",
  },
  {
    img: "/t2.jpg",
    name: "Rahul S.",
   
    text: "The structure and discipline I gained here changed my lifestyle completely. I’ve never felt more consistent.",
  },
  {
    img: "/t3.jpg",
    name: "Arjun P.",
   
    text: "This isn’t just training — it’s transformation. Mentally and physically stronger than ever.",
  },
  {
    img: "/t4.jpg",
    name: "Nikhil R.",
    
    text: "Amazing environment and coaching. Every session pushes you to improve.",
  },
  {
    img: "/t5.jpg",
    name: "Vishnu M.",
   
    text: "The energy here is unmatched. It keeps me motivated every single day.",
  },
  {
    img: "/t6.jpg",
    name: "Adithya N.",
   
    text: "Highly professional trainers and effective programs. Results are guaranteed.",
  },
];

// animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-16 -mt-20">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lime-400 text-sm tracking-widest font-semibold">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mt-4">
          Real stories from people who transformed their lives.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-16"
      >
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -10, scale: 1.03 }}
            className="relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md group"
          >
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-xl bg-lime-400/0 group-hover:bg-lime-400/10 blur-xl transition duration-500" />

            {/* Content */}
            <div className="relative z-10">
              
              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-6">
                <div className="relative w-12 h-12">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}