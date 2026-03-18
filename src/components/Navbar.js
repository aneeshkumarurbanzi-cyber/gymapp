"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Programs", id: "programs" },
    { name: "Features", id: "features" },
    { name: "Process", id: "process" },
    { name: "Team", id: "team" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (!el) return;

        const sectionTop = el.offsetTop - 140;
        const sectionHeight = el.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = link.id;
        }
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-16 py-6 flex items-center justify-between bg-black/60 backdrop-blur-md">
      
      {/* Logo */}
      <div
        onClick={() => scrollToSection("home")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-10 h-5 bg-lime-400 skew-x-[-20deg]" />
        <h1 className="text-white font-bold">Transform</h1>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`relative transition ${
              active === link.id
                ? "text-lime-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {link.name}

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-lime-400 transition-all duration-300 ${
                active === link.id ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-white"
      >
        {open ? (
          <XMarkIcon className="w-6" />
        ) : (
          <Bars3Icon className="w-6" />
        )}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-6 gap-6 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-lg ${
                active === link.id
                  ? "text-lime-400"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}