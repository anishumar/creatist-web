"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Info } from "lucide-react";

export default function StatusMessage() {
  const [status, setStatus] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });

  useEffect(() => {
    const handleMessage = (event: any) => {
      const message = event.detail?.message || "";
      const duration = event.detail?.duration || 4000;

      setStatus({ message, visible: true });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, visible: false }));
      }, duration);
    };

    window.addEventListener("trigger-status-message", handleMessage);
    return () => window.removeEventListener("trigger-status-message", handleMessage);
  }, []);

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <AnimatePresence>
        {status.visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="px-8 py-4 glass rounded-[32px] border border-white/20 shadow-2xl bg-black/40 backdrop-blur-xl"
          >
            <p className="text-white font-medium text-lg whitespace-nowrap">
              {status.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
