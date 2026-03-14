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
    <section id="product" className="bg-transparent">
      {showcaseItems.map((item, index) => (
        <div key={index} className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className={`flex flex-col items-center gap-12 lg:gap-24`}>
              {/* Text segment hidden */}
              <div className="hidden w-full lg:w-[45%] text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="px-6 py-3 glass border border-white/10 rounded-2xl text-white/80 font-medium">
                      Built for Creators
                    </div>
                    <div className="px-6 py-3 glass-bright border border-brand-accent/20 rounded-2xl text-brand-accent font-medium">
                      Seamless Flow
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="w-full relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group w-full"
                >
                  <div className="relative mx-auto w-full glass shadow-[0_50px_100px_rgba(0,0,0,0.6)] rounded-[40px] p-2 lg:p-4 rotate-1 group-hover:rotate-0 transition-transform duration-700">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={1000}
                      height={2000}
                      className="w-full h-auto object-cover rounded-[32px]"
                      priority={index === 0}
                    />
                  </div>
                  
                  {/* Decorative Glow */}
                  <div className={`absolute -inset-10 ${index % 2 === 0 ? 'bg-brand-accent/10' : 'bg-brand/10'} blur-[100px] -z-10 group-hover:opacity-40 transition-opacity duration-700`} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
