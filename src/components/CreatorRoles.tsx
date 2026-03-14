"use client";

import { motion, useScroll, useTransform, useSpring, useMotionTemplate, MotionValue } from "framer-motion";
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

interface RoleItemProps {
  role: string;
  index: number;
  smoothProgress: MotionValue<number>;
  step: number;
}

function RoleItem({ role, index, smoothProgress, step }: RoleItemProps) {
  const center = index * step;
  const start = center - step * 1.2;
  const end = center + step * 1.2;

  // Opacity: peak at center, fade out on both sides
  const opacity = useTransform(
    smoothProgress,
    [start, center, end],
    [0, 1, 0]
  );

  // Scale: moving from background to foreground
  const scale = useTransform(
    smoothProgress,
    [start, center, end],
    [0.5, 1, 2]
  );

  // Minimal blur to save GPU
  const blurValue = useTransform(
    smoothProgress,
    [start, center, end],
    [4, 0, 8]
  );
  
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  // Z-Translation: Safe range to avoid clipping camera planes
  const z = useTransform(
    smoothProgress,
    [start, center, end],
    [-400, 0, 500]
  );

  // Subtle X-drift
  const x = useTransform(
    smoothProgress,
    [start, center, end],
    [index % 2 === 0 ? 5 : -5, 0, index % 2 === 0 ? 15 : -15]
  );

  return (
    <motion.div
      className="absolute text-5xl md:text-[10rem] lg:text-[14rem] font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/20 whitespace-nowrap will-change-transform py-32"
      style={{ 
        opacity, 
        scale,
        filter,
        z,
        x,
      }}
    >
      <span className="bg-clip-text bg-gradient-to-br from-brand-accent via-pink-500 to-royal-light inline-block drop-shadow-[0_10px_30px_rgba(250,45,72,0.2)] pb-8 font-semibold tracking-tighter">
        {role}
      </span>
    </motion.div>
  );
}

export default function CreatorRoles() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Ultra-stable spring for high-speed scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 50,
    mass: 0.2,
    restDelta: 0.001
  });

  const step = 1 / (roles.length - 1);

  return (
    <section 
      id="roles" 
      ref={containerRef} 
      className="relative h-[500vh] bg-transparent text-white overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          
          <motion.div 
            style={{
              opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
            }}
            className="absolute top-[20%] text-white/30 font-medium tracking-[0.2em] uppercase text-sm md:text-base z-10"
          >
            Built for every
          </motion.div>

          <div style={{ perspective: "1500px" }} className="relative w-full h-full flex items-center justify-center">
            {roles.map((role, i) => (
              <RoleItem 
                key={role} 
                role={role} 
                index={i} 
                smoothProgress={smoothProgress} 
                step={step} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
