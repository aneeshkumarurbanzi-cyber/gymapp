"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 lg:px-16"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
        
        {/* LEFT SIDE (FORM) */}
        <div>
          <p className="text-lime-400 text-sm font-semibold tracking-widest">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-3">
            CONTACT US
          </h2>

          <p className="text-gray-400 mt-4 mb-10 max-w-md">
            Whether you’re new to training or a regular glutton for punishment.
          </p>

          {/* FORM */}
          <form className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                placeholder="name"
                className="w-full mt-2 bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-lime-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="@gmail.com"
                className="w-full mt-2 bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-lime-400 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows={4}
                placeholder="Write something..."
                className="w-full mt-2 bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-lime-400 transition resize-none"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-lime-400 text-black py-3 font-semibold mt-4 hover:bg-lime-300 transition">
              SUBMIT
            </button>
          </form>
        </div>

        {/* RIGHT SIDE (MAP) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <iframe
            src="https://www.google.com/maps?q=Top floor Rajmi, mini Hall, VALIYAKATTACKAL,Venjarammoodu,
&output=embed"
            className="w-full h-full rounded-lg border-0"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}