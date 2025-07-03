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
      initial={{ opacity: 2 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 1.0 }}
    >
      {displayedText}
      <span className="animate-pulse text-blue-500">|</span>
    </motion.h1>
  );
}
