"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Turnstile } from '@marsidev/react-turnstile';

interface EarlyAccessFormProps {
  id: string;
  listenToEvents?: boolean;
}

export default function EarlyAccessForm({ id, listenToEvents = false }: EarlyAccessFormProps) {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!listenToEvents) return;

    const handleTrigger = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowInput(true);
    };

    window.addEventListener("trigger-early-access", handleTrigger);

    if (window.location.hash === "#get-early-access") {
      handleTrigger();
    }

    return () => window.removeEventListener("trigger-early-access", handleTrigger);
  }, [listenToEvents]);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      window.dispatchEvent(new CustomEvent("trigger-status-message", {
        detail: { message: "Please enter a valid email address." }
      }));
      return;
    }
    if (email && !isLoading) {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/waitlist/join`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            email, 
            cf_turnstile_response: turnstileToken || undefined 
          }),
        });

        const result = await response.json();
        if (result.message === "success") {
          setIsSubmitted(true);
          window.dispatchEvent(new CustomEvent("trigger-status-message", { 
            detail: { message: "Successfully joined the waitlist!" } 
          }));
        } else {
          window.dispatchEvent(new CustomEvent("trigger-status-message", { 
            detail: { message: result.detail || "Something went wrong. Please try again." } 
          }));
        }
      } catch (error) {
        console.error("Error joining waitlist:", error);
        window.dispatchEvent(new CustomEvent("trigger-status-message", { 
          detail: { message: "Unable to connect to the server. Please check your connection." } 
        }));
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto" style={{ height: '84px' }}>
      <AnimatePresence mode="wait" initial={false}>
        {!showInput ? (
          <motion.button
            key={`${id}-button`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            onClick={() => setShowInput(true)}
            className="px-10 py-5 rounded-[32px] font-semibold tracking-tight text-xl glass-button-primary flex items-center gap-3 whitespace-nowrap"
          >
            Get Early Access
          </motion.button>
        ) : isSubmitted ? (
          <motion.div
            key={`${id}-success`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-3xl text-white"
          >
            <CheckCircle2 className="text-brand-accent" size={28} />
            <span className="text-xl font-medium whitespace-nowrap">You're on the list!</span>
          </motion.div>
        ) : (
          <motion.form
            key={`${id}-form`}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25
            }}
            onSubmit={handleSubmit}
            className="relative group w-full glass shadow-2xl rounded-[32px] p-2"
          >
            <div className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="pl-6 text-white/40 group-focus-within:text-brand-accent transition-colors"
              >
                <Mail size={24} />
              </motion.div>
              <input
                autoFocus
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-grow pl-4 pr-32 py-4 bg-transparent text-xl text-white outline-none transition-all placeholder:text-white/20"
              />
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                type="submit"
                disabled={isLoading}
                className={`absolute right-2 px-8 py-4 rounded-[24px] font-medium text-lg text-white transition-all duration-300 ${
                  isLoading
                    ? "bg-white/20 cursor-not-allowed pointer-events-none"
                    : "bg-brand-accent hover:bg-brand-accent/90"
                }`}
              >
                Join
              </motion.button>
            </div>
            
            {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
              <div className="flex justify-center pt-2">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => {
                    console.log("Turnstile generated token successfully!");
                    setTurnstileToken(token);
                  }}
                  onError={() => console.error("Turnstile verification error in widget.")}
                  options={{ theme: 'dark' }}
                />
              </div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
