"use client";

import { motion } from "framer-motion";

/**
 * Primary call to action. Scrolls to the download section, which owns the
 * App Store link.
 */
export default function DownloadCTA() {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto" style={{ height: '84px' }}>
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={scrollToDownload}
        className="px-10 py-5 rounded-[32px] font-semibold tracking-tight text-xl glass-button-primary flex items-center gap-3 whitespace-nowrap"
      >
        Download Now
      </motion.button>
    </div>
  );
}
