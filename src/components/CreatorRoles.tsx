"use client";

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

const roles = [
  "Actor",
  "Videographer",
  "Photographer",
  "Editor",
  "Vocalist",
  "Dancer",
  "Composer"
];

export default function CreatorRoles() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const step = 1 / (roles.length - 1);

  return (
    <section 
      id="roles" 
      ref={containerRef} 
      className="relative h-[600vh] bg-transparent text-white overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          
          <motion.div 
            style={{
              opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
            }}
            className="absolute top-[20%] text-white/30 font-medium tracking-[0.2em] uppercase text-sm md:text-base z-10"
          >
            Built for every
          </motion.div>

          <div style={{ perspective: "1000px" }} className="relative w-full h-full flex items-center justify-center">
            {roles.map((role, i) => {
              const center = i * step;
              const start = center - step * 1.5;
              const end = center + step * 1.5;

              const opacity = useTransform(
                smoothProgress,
                [start, center - step * 0.2, center, center + step * 0.2, end],
                [0, 0.3, 1, 0.3, 0]
              );

              const scale = useTransform(
                smoothProgress,
                [start, center, end],
                [0.5, 1, 2.5]
              );

              const blurValue = useTransform(
                smoothProgress,
                [start, center, end],
                [20, 0, 40]
              );
              
              const filter = useMotionTemplate`blur(${blurValue}px)`;

              const z = useTransform(
                smoothProgress,
                [start, center, end],
                [-500, 0, 800]
              );

              const xOffset = (i % 2 === 0 ? 20 : -20) * (1 - Math.abs(i * step - 0.5) * 2);
              const x = useTransform(
                smoothProgress,
                [start, center, end],
                [xOffset, 0, xOffset * 2]
              );

              return (
                <motion.div
                  key={role}
                  className="absolute text-7xl md:text-[12rem] lg:text-[16rem] font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/20 whitespace-nowrap will-change-transform py-32"
                  style={{ 
                    opacity, 
                    scale,
                    filter,
                    z,
                    x,
                  }}
                >
                  <span className="bg-clip-text bg-gradient-to-br from-brand-accent via-pink-500 to-royal-light inline-block drop-shadow-[0_10px_30px_rgba(250,45,72,0.3)] pb-8">
                    {role}
                  </span>
                </motion.div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
}
