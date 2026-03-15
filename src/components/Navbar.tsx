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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      transition: { duration: 0.5, repeat: 3, ease: "easeInOut" }
    },
    idle: { scale: 1 }
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 rounded-[20px] glass overflow-hidden transition-all duration-500 ${
        scrolled ? "w-[95%] md:w-[85%]" : "w-[98%] md:w-[95%]"
      }`}
    >
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-3" : "py-4"}`}>
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

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden border-t border-white/[0.08]"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.25, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-medium text-white/80 py-4 border-b border-white/[0.08]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.06, duration: 0.25, ease: "easeOut" }}
              >
                <button
                  onClick={() => { setIsOpen(false); handleCTA(); }}
                  className="w-full text-left text-xl font-medium text-white/80 py-4"
                >
                  Get Early Access
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
