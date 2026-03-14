"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const showcaseItems = [
  {
    title: "Explore the Creator Community",
    description: "Search and discover talented creators by role and build your dream collaboration team.",
    image: "/screenshots/Slice 1.png",
    bg: "bg-royal",
    reverse: false
  },
  {
    title: "Creators nearby & top-rated",
    description: "Find high-quality collaborators in your vicinity or browse the global community of top-tier talent.",
    image: "/screenshots/Slice 3.png",
    bg: "bg-dark-darkest",
    reverse: true
  },
  {
    title: "Project Vision Boards",
    description: "Organize ideas, manage creative projects, and collaborate with your team in one place.",
    image: "/screenshots/Slice 6.png",
    bg: "bg-royal",
    reverse: false
  }
];

export default function Screenshots() {
  return (
    <section id="product" className="bg-dark-darkest">
      {showcaseItems.map((item, index) => (
        <div key={index} className={`py-24 ${item.bg} overflow-hidden`}>
          <div className="container mx-auto px-6">
            <div className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              <div className="w-full lg:w-[40%] text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium">
                      Built for Creators
                    </div>
                    <div className="px-6 py-3 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent font-medium">
                      Seamless Flow
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="w-full lg:w-[60%] relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="relative mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={1000}
                      height={2000}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  
                  {/* Decorative Glow */}
                  <div className={`absolute -inset-4 ${index % 2 === 0 ? 'bg-brand-accent/20' : 'bg-brand/20'} blur-3xl -z-10`} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
