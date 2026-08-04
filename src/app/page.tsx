"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveSimulator from "@/components/LiveSimulator";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CtaSection from "@/components/CtaSection";
import AuditModal from "@/components/AuditModal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-[#2a2829] flex flex-col font-sans">
      {/* Header / Navbar */}
      <Header onOpenAuditModal={handleOpenAuditModal} />

      {/* Hero Section */}
      <Hero onOpenAuditModal={handleOpenAuditModal} />

      {/* Live Interactive Command Center Simulator Widget */}
      <LiveSimulator />

      {/* The Problem Section */}
      <ProblemSection onOpenAuditModal={handleOpenAuditModal} />

      {/* The Solution Section */}
      <SolutionSection onOpenAuditModal={handleOpenAuditModal} />

      {/* How It Works Section */}
      <HowItWorksSection onOpenAuditModal={handleOpenAuditModal} />

      {/* Why Choose Hybrid Section */}
      <WhyChooseSection onOpenAuditModal={handleOpenAuditModal} />

      {/* Pre-Footer Final CTA Section */}
      <CtaSection onOpenAuditModal={handleOpenAuditModal} />

      {/* Footer */}
      <Footer />

      {/* Interactive Audit Request Modal */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAuditModal} />

      {/* Back to Top with Scroll Progress */}
      <ScrollToTop />
    </main>
  );
}
