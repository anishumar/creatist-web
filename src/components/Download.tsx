"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Download() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [waitlistConfig, setWaitlistConfig] = useState({ 
    testflight: { is_live: false, message: "The queue is full, join the waitlist", link: "" },
    app_store: { is_live: false, message: "Coming Soon", link: "" }
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/waitlist/config`);
        if (response.ok) {
          const data = await response.json();
          setWaitlistConfig(data);
        }
      } catch (error) {
        console.error("Error fetching waitlist config:", error);
      }
    };
    fetchConfig();
  }, []);

  const handleAppStoreClick = () => {
    if (waitlistConfig.app_store.is_live) {
      window.open(waitlistConfig.app_store.link, "_blank");
    } else {
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
      
      window.dispatchEvent(new CustomEvent("trigger-status-message", { 
        detail: { message: waitlistConfig.app_store.message } 
      }));
    }
  };

  const handleTestFlightClick = () => {
    if (waitlistConfig.testflight.is_live) {
      window.open(waitlistConfig.testflight.link, "_blank");
    } else {
      window.dispatchEvent(new CustomEvent("trigger-status-message", { 
        detail: { message: waitlistConfig.testflight.message } 
      }));
      window.dispatchEvent(new CustomEvent("trigger-navbar-pulse"));
    }
  };

  return (
    <section id="download" className="py-32 bg-transparent relative overflow-hidden">
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
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8">
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
              className="flex items-center gap-5 px-7 h-24 glass-button text-white rounded-[32px] w-full sm:w-[280px] hover:scale-[1.02] group relative overflow-hidden transition-all duration-300"
            >
              <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src="/icons/app-store.svg" 
                  alt="App Store" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <div className="h-4 flex items-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                    Coming Soon
                  </div>
                </div>
                <div className="text-2xl font-medium tracking-tight">App Store</div>
              </div>
            </motion.button>

            {/* TestFlight Join Beta */}
            <motion.button 
              whileTap={{ scale: 0.98 }}
              onClick={handleTestFlightClick}
              className="flex items-center gap-5 px-7 h-24 glass-button hover:border-brand-accent/40 text-white rounded-[32px] w-full sm:w-[280px] hover:scale-[1.02] group transition-all duration-300"
            >
              <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src="/icons/testflight.svg" 
                  alt="TestFlight" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <div className="h-4 flex items-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Join Beta</div>
                </div>
                <div className="text-2xl font-medium tracking-tight">TestFlight</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
