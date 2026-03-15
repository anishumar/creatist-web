"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Users, Globe, Sparkles } from "lucide-react";
import EarlyAccessForm from "./EarlyAccessForm";

export default function Community() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="community" 
      ref={containerRef}
      className="py-60 bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8 max-w-4xl leading-tight">
            Join the next generation of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 animate-shimmer bg-[length:200%_100%]">
              creators collaborating worldwide.
            </span>
          </h2>

          <p className="text-white/60 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Don't create in isolation. Connect with the best talent in the industry and build something legendary.
          </p>

          <EarlyAccessForm id="community" />
        </motion.div>
      </div>
      
      {/* Immersive Background Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 - 50 + "%",
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: ["-10%", "10%"],
              x: ["-5%", "5%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px]"
          />
        ))}
      </div>
    </section>
  );
}
