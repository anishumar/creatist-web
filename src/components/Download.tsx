"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Download() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleAppStoreClick = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000);
  };

  return (
    <section id="download" className="py-32 bg-dark-darkest relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-royal/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Be the First to <br />
            Experience Creatist
          </h2>
          <p className="text-white/80 text-xl mb-12">
            We're currently in private beta. Join the waitlist to receive exclusive early access and help shape the future of creative collaboration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* App Store (Interactive Coming Soon) */}
            <motion.button 
              whileTap={{ scale: 0.98 }}
              onClick={handleAppStoreClick}
              className="flex items-center gap-5 px-7 h-24 bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md border border-white/10 text-white rounded-[24px] transition-all w-full sm:w-[280px] shadow-xl group relative overflow-hidden"
            >
              <div className="relative w-11 h-11 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src="/icons/app-store.svg" 
                  alt="App Store" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <div className="h-4 flex items-center">
                  <AnimatePresence mode="wait">
                    {showComingSoon ? (
                      <motion.div
                        key="active"
                        initial={{ y: 2, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -2, opacity: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent"
                      >
                        Soon
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        className="text-[10px] font-bold uppercase tracking-[0.2em]"
                      >
                        Coming Soon
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="text-2xl font-bold tracking-tight">App Store</div>
              </div>
            </motion.button>

            {/* TestFlight Join Beta */}
            <a 
              href="https://testflight.apple.com/join/GAvshvEp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 px-7 h-24 bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md border border-white/10 hover:border-brand-accent/40 text-white rounded-[24px] transition-all w-full sm:w-[280px] shadow-xl hover:shadow-brand-accent/5 group"
            >
              <div className="relative w-11 h-11 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src="/icons/testflight.svg" 
                  alt="TestFlight" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <div className="h-4 flex items-center">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Join Beta</div>
                </div>
                <div className="text-2xl font-bold tracking-tight">TestFlight</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
