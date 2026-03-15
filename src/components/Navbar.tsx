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
  const [isPulsing, setIsPulsing] = useState(false);
  const [isTinted, setIsTinted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    const handlePulse = () => {
      setIsPulsing(true);
      setIsTinted(true);
      setTimeout(() => setIsPulsing(false), 2000);
    };
    window.addEventListener("trigger-navbar-pulse", handlePulse);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("trigger-navbar-pulse", handlePulse);
    };
  }, []);

  const handleCTA = () => {
    if (pathname !== "/") {
      router.push("/#get-early-access");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("trigger-early-access"));
    }
  };

  const pulseVariants: any = {
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 12px rgba(250,45,72,0.3)",
        "inset 0 1px 1px rgba(255,255,255,0.5), 0 8px 32px rgba(250,45,72,0.6)",
        "inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 12px rgba(250,45,72,0.3)"
      ],
      transition: {
        duration: 0.5,
        repeat: 3,
        ease: "easeInOut"
      }
    },
    idle: { scale: 1 }
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 mt-6 rounded-[20px] glass overflow-hidden ${
        scrolled ? "w-[95%] md:w-[85%] py-3" : "w-[98%] md:w-[95%] py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-[22.5%] overflow-hidden flex-shrink-0">
            <Image 
              src="/icons/Creatist Logo.svg" 
              alt="Creatist Logo" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <span className="text-2xl font-medium tracking-tight text-white">Creatist</span>
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
          <motion.button 
            variants={pulseVariants}
            animate={isPulsing ? "pulse" : "idle"}
            onClick={handleCTA}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-500 ${
              isTinted ? "glass-button-primary" : "glass-button"
            }`}
          >
            Get Early Access
          </motion.button>
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
            <div className="flex flex-col items-center gap-6 px-6">
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
                <motion.button 
                  variants={pulseVariants}
                  animate={isPulsing ? "pulse" : "idle"}
                  onClick={() => {
                    setIsOpen(false);
                    handleCTA();
                  }}
                  className={`w-full py-4 rounded-2xl font-medium transition-all duration-500 ${
                    isTinted ? "glass-button-primary" : "glass-button"
                  }`}
                >
                  Get Early Access
                </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
