import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypewriterText({ text = "" }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text || typeof text !== "string") return;

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const nextChar = text.charAt(prev.length);
        if (!nextChar) {
          clearInterval(interval);
          return prev;
        }
        return prev + nextChar;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-white leading-snug font-mono whitespace-nowrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      <span className="animate-pulse text-emerald-400">|</span>
    </motion.h1>
  );
}
