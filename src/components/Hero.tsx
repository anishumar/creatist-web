"use client";

import { motion } from "framer-motion";
import DownloadCTA from "./DownloadCTA";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-royal/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
            Create Together. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-pink-500">Build Together.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creatist is the ultimate platform where creators find collaborators, manage projects, and build amazing work together. Join the community.
          </p>

          <DownloadCTA />
        </motion.div>
      </div>
    </section>
  );
}
