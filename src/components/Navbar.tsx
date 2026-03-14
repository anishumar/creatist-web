"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Community", href: "/#community" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 mt-6 rounded-[20px] glass overflow-hidden ${
        scrolled ? "w-[95%] md:w-[85%] py-3" : "w-[98%] md:w-[95%] py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image 
              src="/icons/Creatist Logo.svg" 
              alt="Creatist Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Creatist</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleCTA}
            className="px-8 py-3 rounded-full font-bold bg-white text-dark-darkest hover:bg-brand-accent hover:text-white transition-all shadow-lg hover:shadow-brand-accent/20"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-darker border-b border-white/10 py-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg text-white/80 hover:text-white font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    handleCTA();
                  }}
                  className="w-full py-4 rounded-xl font-bold bg-brand-accent text-white shadow-xl shadow-brand-accent/20"
                >
                  Get Early Access
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
