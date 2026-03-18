"use client";

import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16">
      
      <div className="flex flex-col md:flex-row justify-between gap-12">

        {/* LEFT SIDE */}
        <div className="max-w-md">

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              <span className="w-4 h-6 bg-lime-400 skew-x-[-20deg]" />
              <span className="w-4 h-6 bg-lime-400 skew-x-[-20deg]" />
              <span className="w-4 h-6 bg-lime-400 skew-x-[-20deg]" />
            </div>
            <h2 className="text-xl font-bold">Transform</h2>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Our training program is designed to guide you from registration to
            success. Follow our simple steps to achieve your fitness goals.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-gray-400">
            <Instagram size={18} className="cursor-pointer hover:text-white transition" />
            <Twitter size={18} className="cursor-pointer hover:text-white transition" />
            <Youtube size={18} className="cursor-pointer hover:text-white transition" />
            <Facebook size={18} className="cursor-pointer hover:text-white transition" />
          </div>
        </div>

        {/* RIGHT SIDE LINKS */}
        <div className="flex flex-col items-start md:items-end gap-4 text-sm">
          {[
            "Programs",
            "Features",
            "Process",
            "Team",
            "Contact",
            "About",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

      </div>

    </footer>
  );
}