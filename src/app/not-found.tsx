"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-brand-accent mb-12"
        >
          <Sparkles size={16} />
          <span className="text-sm font-medium tracking-wide uppercase">Under Refinement</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8 leading-tight">
          We're currently heads down <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-pink-500">
            building the future.
          </span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto">
          We're focusing all our energy on perfecting the core Creatist experience. 
          This page is on our roadmap and will be live very soon. 
          Thank you for your patience and for being part of the journey.
        </p>

      </motion.div>
    </div>
  );
}
