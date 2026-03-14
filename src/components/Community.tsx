"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { CheckCircle2, Mail, Users, Globe, Sparkles } from "lucide-react";

export default function Community() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/waitlist/join`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error joining waitlist:", error);
        alert("Unable to connect to the server.");
      } finally {
        setIsLoading(false);
      }
    }
  };

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

          <motion.div layout className="flex flex-col items-center justify-center max-w-xl mx-auto w-full min-h-[100px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {!showInput ? (
                <motion.button
                  key="button"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowInput(true)}
                  className="px-16 py-6 rounded-[32px] font-semibold tracking-tight text-2xl glass-button-primary shadow-[0_20px_50px_rgba(250,45,72,0.3)]"
                >
                  Get Early Access
                </motion.button>
              ) : isSubmitted ? (
                <motion.div
                  key="success"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-6 px-12 py-8 glass-bright border border-white/20 rounded-[40px] text-white shadow-2xl"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={28} />
                  </div>
                  <span className="text-2xl font-semibold tracking-tight">You're on the list!</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  layout
                  initial={{ opacity: 0, width: "300px" }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="relative group w-full glass-bright border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.5)] rounded-[40px] p-3"
                >
                  <div className="flex items-center">
                    <div className="pl-6 text-white/40 group-focus-within:text-brand-accent transition-colors">
                      <Mail size={28} />
                    </div>
                    <input
                      autoFocus
                      type="email"
                      placeholder="Your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-4 pr-40 py-5 bg-transparent text-2xl text-white outline-none transition-all placeholder:text-white/20 font-medium"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-3 px-10 py-5 rounded-[32px] font-semibold text-xl glass-button disabled:opacity-50"
                    >
                      {isLoading ? "..." : "Join"}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
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
