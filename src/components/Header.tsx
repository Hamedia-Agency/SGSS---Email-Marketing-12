"use client";

import React, { useState, useEffect } from "react";
import { Shield, Menu, X, PhoneCall, ChevronRight } from "lucide-react";

interface HeaderProps {
  onOpenAuditModal: () => void;
}

export default function Header({ onOpenAuditModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Problem", href: "#problem" },
    { name: "The Solution", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Hybrid", href: "#why-hybrid" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1d2c48]/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10"
          : "bg-[#1d2c48] py-5 border-b border-white/10"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-[#fecf31] flex items-center justify-center text-[#1d2c48] font-bold shadow-md transition-transform group-hover:scale-105">
            <Shield className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
              SECURE<span className="text-[#fecf31]">GUARD</span>
            </span>
            <span className="block text-[10px] text-gray-300 font-semibold tracking-widest uppercase -mt-1">
              Hybrid Security Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-200 hover:text-[#fecf31] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#fecf31] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:18005557348"
            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
          >
            <PhoneCall className="w-4 h-4 text-[#fecf31]" />
            <span>24/7 Hotline</span>
          </a>
          <button onClick={onOpenAuditModal} className="btn-gold text-xs py-2.5 px-5">
            <span>Book Assessment</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1d2c48] border-b border-white/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-200 hover:text-[#fecf31] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 space-y-3">
            <a
              href="tel:18005557348"
              className="flex items-center justify-center gap-2 text-sm font-medium text-gray-300 bg-white/5 py-3 rounded-lg"
            >
              <PhoneCall className="w-4 h-4 text-[#fecf31]" />
              <span>24/7 Hotline: (800) 555-7348</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="btn-gold w-full text-center py-3"
            >
              Book Assessment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
