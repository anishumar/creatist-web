"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/in/app/creatist/id6749386120";

export default function Download() {
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
            Download Creatist on the App Store and start building with the best talent in the industry.
          </p>

          <div className="flex items-center justify-center">
            <motion.a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-5 px-7 h-24 glass-button hover:border-brand-accent/40 text-white rounded-[32px] w-full sm:w-[280px] hover:scale-[1.02] group transition-all duration-300"
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
                    Download on the
                  </div>
                </div>
                <div className="text-2xl font-medium tracking-tight">App Store</div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
