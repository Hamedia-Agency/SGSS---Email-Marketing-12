"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  const strokeDashoffset = 100 - scrollProgress;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#1d2c48] text-[#fecf31] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group border border-white/20"
    >
      {/* SVG Progress Ring */}
      <svg className="w-12 h-12 absolute inset-0 -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-white/10"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-[#fecf31] transition-all duration-150"
          strokeDasharray="100, 100"
          strokeDashoffset={strokeDashoffset}
          strokeWidth="3"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
