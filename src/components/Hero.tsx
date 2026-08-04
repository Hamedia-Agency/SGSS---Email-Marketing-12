"use client";

import React from "react";
import { ShieldCheck, ArrowRight, Activity, Eye, Zap } from "lucide-react";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative bg-[#1d2c48] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Graphic Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#263659_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#fecf31]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#263659]/60 rounded-full blur-2xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
            <span className="pulse-indicator" />
            <span className="text-xs md:text-sm font-semibold tracking-wide text-[#fecf31] uppercase">
              The Secure Guard Advantage
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Don&apos;t Just Detect Threats—
            <span className="block mt-2 text-[#fecf31] underline decoration-[#fecf31]/40 underline-offset-8">
              Stop Them.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            A camera alert is only the beginning. Secure Guard transforms passive surveillance into an{" "}
            <strong className="text-white font-semibold">active, 24/7 incident response system</strong>.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#solution" className="btn-gold text-base py-4 px-8 w-full sm:w-auto">
              <span>See How Hybrid Security Works</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenAuditModal}
              className="btn-dark text-base py-4 px-8 w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/20"
            >
              <ShieldCheck className="w-5 h-5 text-[#fecf31]" />
              <span>Request a Hybrid Security Audit</span>
            </button>
          </div>

          {/* Key Metrics / Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[#fecf31] font-bold text-2xl mb-1">
                <Activity className="w-5 h-5" />
                <span>&lt; 15 Seconds</span>
              </div>
              <span className="text-xs text-gray-300 font-medium">Average Threat Verification</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[#fecf31] font-bold text-2xl mb-1">
                <Eye className="w-5 h-5" />
                <span>24/7 / 365</span>
              </div>
              <span className="text-xs text-gray-300 font-medium">Active Command Center Oversight</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[#fecf31] font-bold text-2xl mb-1">
                <Zap className="w-5 h-5" />
                <span>100%</span>
              </div>
              <span className="text-xs text-gray-300 font-medium">Real-Time Voice Deterrence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
