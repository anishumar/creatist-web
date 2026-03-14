"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
          // Handle error - maybe show an error message
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error joining waitlist:", error);
        alert("Unable to connect to the server. Please check your connection.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-darkest">
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
          {/* Launch Celebration badge removed */}
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Create Together. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-pink-500">Build Together.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creatist is the ultimate platform where creators find collaborators, manage projects, and build amazing work together. Join the community.
          </p>

          <motion.div layout className="flex flex-col items-center justify-center w-full max-w-xl mx-auto min-h-[80px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {!showInput ? (
                <motion.button
                  key="button"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowInput(true)}
                  className="px-10 py-5 bg-brand-accent hover:opacity-90 text-white rounded-3xl font-black text-xl transition-all shadow-2xl shadow-brand-accent/30 flex items-center gap-3 whitespace-nowrap"
                >
                  Get Early Access
                </motion.button>
              ) : isSubmitted ? (
                <motion.div
                  key="success"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-3xl text-white"
                >
                  <CheckCircle2 className="text-brand-accent" size={28} />
                  <span className="text-xl font-bold whitespace-nowrap">You're on the list!</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onSubmit={handleSubmit}
                  className="relative group w-full"
                >
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/30 group-focus-within:text-brand-accent transition-colors">
                    <Mail size={24} />
                  </div>
                  <input
                    autoFocus
                    type="email"
                    placeholder="Your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-16 pr-32 py-5 bg-white/10 border-2 border-white/10 focus:border-brand-accent/30 rounded-[2.5rem] text-xl text-white outline-none transition-all placeholder:text-white/20"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 px-6 bg-brand-accent hover:opacity-90 text-white rounded-[2rem] font-bold text-lg transition-all shadow-lg"
                  >
                    Join
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
