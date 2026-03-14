"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

export default function Community() {
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
    <section id="community" className="py-32 bg-dark-darkest relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-royal to-dark-accent rounded-[40px] p-12 md:p-24 border border-white/5 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Join the next generation of <br className="hidden md:block" />
              creators collaborating worldwide.
            </h2>
            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
              Don't create in isolation. Connect with the best talent in the industry and build something legendary.
            </p>

            <motion.div layout className="flex flex-col items-center justify-center max-w-xl mx-auto w-full min-h-[80px]">
              <AnimatePresence mode="popLayout" initial={false}>
                {!showInput ? (
                  <motion.button
                    key="button"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowInput(true)}
                    className="px-12 py-5 bg-brand-accent text-white hover:opacity-90 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-brand-accent/20 whitespace-nowrap"
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
                      className="w-full pl-16 pr-32 py-5 bg-dark-darkest/50 border-2 border-white/10 focus:border-brand-accent/50 rounded-2xl text-xl text-white outline-none transition-all"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-2 bottom-2 px-6 bg-brand-accent hover:opacity-90 text-white rounded-xl font-bold text-lg transition-all"
                    >
                      Join
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-royal/40 rounded-full blur-[100px]" />
    </section>
  );
}
