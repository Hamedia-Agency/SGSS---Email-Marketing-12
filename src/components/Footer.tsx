"use client";

import React from "react";
import { Shield, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1d2c48] text-white border-t border-white/10 pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fecf31] flex items-center justify-center text-[#1d2c48] font-bold shadow-md">
                <Shield className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                SECURE<span className="text-[#fecf31]">GUARD</span>
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Transforming passive video surveillance into an active, 24/7 incident response system. Unifying AI monitoring with live human voice intervention.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-[#fecf31] font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                24/7 Command Center Live
              </span>
              <span>•</span>
              <span>UL-Listed Monitoring Node</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#fecf31] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#problem" className="hover:text-[#fecf31] transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-[#fecf31] transition-colors">
                  The Solution
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#fecf31] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-hybrid" className="hover:text-[#fecf31] transition-colors">
                  Why Hybrid Security
                </a>
              </li>
            </ul>
          </div>

          {/* Security Solutions */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#fecf31] mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>Commercial Real Estate</li>
              <li>Construction Site Security</li>
              <li>Industrial & Logistics</li>
              <li>Retail Perimeter Defense</li>
              <li>HOA & Gated Communities</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#fecf31] mb-4">
              Contact Center
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fecf31] shrink-0" />
                <a href="tel:18005557348" className="hover:text-white transition-colors">
                  (800) 555-7348
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fecf31] shrink-0" />
                <a href="mailto:dispatch@secureguard.com" className="hover:text-white transition-colors">
                  dispatch@secureguard.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#fecf31] shrink-0 mt-1" />
                <span>National Command Center Headquarters</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Compliance Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Secure Guard Security Services Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Licensing Information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
