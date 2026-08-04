"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { LeadGenForm } from "@/components/LeadGenForm";
import { LeadGenModal } from "@/components/LeadGenModal";
import BackToTop from "@/components/BackToTop";
import { 
  ShieldCheck, 
  Eye, 
  AlertCircle, 
  CheckCircle, 
  ArrowRight,
  Shield,
  FileCheck,
  Megaphone,
  Radar,
  Zap,
  Lock,
  Award,
  HelpCircle,
  Moon,
  Clock
} from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Request a Hybrid Security Audit");

  const handleOpenConsultation = (title?: string) => {
    if (title) setModalTitle(title);
    else setModalTitle("Request a Hybrid Security Audit");
    setModalOpen(true);
  };

  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="/hero_security_bg.png"
            alt="Secure Guard Hybrid Security"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} id="hero-title">
              Don&apos;t Just Detect Threats— <br />
              <span className={styles.heroTitleAccent}>
                Stop Them.
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              A camera alert is only the beginning. Secure Guard transforms passive surveillance into an active, 24/7 incident response system.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="#solution"
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                <Shield className="w-5 h-5 inline mr-2" />
                See How Hybrid Security Works
              </a>
              <button
                onClick={() => handleOpenConsultation("Request a Hybrid Security Audit")}
                className={styles.btnSecondary}
              >
                Request a Hybrid Security Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: THE PROBLEM (REDESIGNED) ===== */}
      <section className={styles.trustGapSection} id="problem">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              The &quot;Alert Fatigue&quot; Reality
            </h2>
            <div className={styles.titleDivider} />
          </div>

          <p className={styles.problemIntroText}>
            Most security systems stop at the notification. When your phone pings with a motion alert, you are left with a critical problem:
          </p>

          {/* 3 Question Cards Grid */}
          <div className={styles.questionGrid}>
            <div className={styles.questionCard}>
              <div className={styles.questionIconBox}>
                <HelpCircle size={26} />
              </div>
              <h3 className={styles.questionText}>
                Is it a real threat or a false alarm?
              </h3>
            </div>

            <div className={styles.questionCard}>
              <div className={styles.questionIconBox}>
                <Moon size={26} />
              </div>
              <h3 className={styles.questionText}>
                Who do you call at 2:00 AM?
              </h3>
            </div>

            <div className={styles.questionCard}>
              <div className={styles.questionIconBox}>
                <Clock size={26} />
              </div>
              <h3 className={styles.questionText}>
                How long will it take for a patrol to arrive?
              </h3>
            </div>
          </div>

          {/* Conclusion Banner Box */}
          <div className={styles.conclusionBanner}>
            <p className={styles.conclusionQuoteText}>
              &ldquo;Without a coordinated response, a camera is just a recording device. You need a security partner that knows exactly what to do next.&rdquo;
            </p>
          </div>
        </div>
      </section>


      {/* ===== SECTION: THE SOLUTION ===== */}
      <section className={styles.secureTrackSection} id="solution">
        <div className="container">
          <div className={styles.sectionHeaderLight}>
            <h2 className={styles.sectionTitleLight}>
              The Secure Guard Hybrid Advantage
            </h2>
            <p className={styles.sectionSubtextLight}>
              We unify advanced video monitoring with human expertise. We don&apos;t just alert you to a problem; we manage the resolution from start to finish.
            </p>
          </div>

          <div className={styles.solutionGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <Eye size={24} className={styles.pillarIcon} />
                <span>Live Verification</span>
              </div>
              <p className={styles.pillarDesc}>
                Our command center staff reviews live video immediately to filter out false alarms and confirm real security threats.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <Megaphone size={24} className={styles.pillarIcon} />
                <span>Active Deterrence</span>
              </div>
              <p className={styles.pillarDesc}>
                Trained professionals use real-time voice intervention to challenge trespassers the moment they enter your property.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <ShieldCheck size={24} className={styles.pillarIcon} />
                <span>Coordinated Response</span>
              </div>
              <p className={styles.pillarDesc}>
                We handle the logistics so you don&apos;t have to—notifying your designated contacts, coordinating with on-site security, and dispatching mobile patrols or emergency services when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: HOW IT WORKS ===== */}
      <section className={styles.howHelpsSection} id="how-it-works">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              How It Works
            </h2>
            <div className={styles.titleDivider} />
          </div>

          <div className={styles.howItWorksGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepBadge}>
                <Radar size={22} />
              </div>
              <h3 className={styles.stepTitle}>Detect</h3>
              <p className={styles.stepDesc}>
                AI-powered cameras identify suspicious activity.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepBadge}>
                <Eye size={22} />
              </div>
              <h3 className={styles.stepTitle}>Verify</h3>
              <p className={styles.stepDesc}>
                Our expert team reviews the live stream in seconds.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepBadge}>
                <Zap size={22} />
              </div>
              <h3 className={styles.stepTitle}>Act</h3>
              <p className={styles.stepDesc}>
                We intervene verbally or dispatch support instantly.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepBadge}>
                <FileCheck size={22} />
              </div>
              <h3 className={styles.stepTitle}>Resolve</h3>
              <p className={styles.stepDesc}>
                You get a full report of the incident and the action taken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: WHY CHOOSE HYBRID? ===== */}
      <section className={styles.featuresSection} id="why-hybrid">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose Hybrid?
            </h2>
            <div className={styles.titleDivider} />
          </div>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <ShieldCheck size={28} />
              </div>
              <h3 className={styles.featureCardTitle}>Reduced Liability</h3>
              <p className={styles.featureCardDesc}>
                Professional handling of security events minimizes risks and property loss.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Award size={28} />
              </div>
              <h3 className={styles.featureCardTitle}>24/7 Professional Oversight</h3>
              <p className={styles.featureCardDesc}>
                Your property is watched by trained eyes, not just algorithms.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Lock size={28} />
              </div>
              <h3 className={styles.featureCardTitle}>Operational Peace of Mind</h3>
              <p className={styles.featureCardDesc}>
                Stop worrying about monitoring your phone—we take care of the heavy lifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER / FINAL CTA SECTION ===== */}
      <section className={styles.transparencySection} id="lead-form">
        <div className="container">
          <div className={styles.transparencyGrid}>
            <div className={styles.transparencyColLeft}>
              <h2 className={styles.sectionTitleLeft}>
                Ready to elevate your security?
              </h2>
              <p className={styles.bodyTextLeft}>
                Stop waiting for someone else to call the police. Partner with a security service that takes action.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => handleOpenConsultation("Request a Hybrid Security Audit")}
                  className={styles.btnGoldAction}
                >
                  <ShieldCheck size={20} />
                  Request a Hybrid Security Audit
                </button>
              </div>
            </div>

            <div>
              <LeadGenForm
                title="Request a Hybrid Security Audit"
                subtitle="Fill out your property details below. A Secure Guard operations specialist will contact you with a customized security plan."
                buttonText="Request a Hybrid Security Audit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA onOpenConsultation={() => handleOpenConsultation("Request a Hybrid Security Audit")} />

      {/* ===== FOOTER ===== */}
      <Footer />

      {/* ===== LEAD GENERATION MODAL ===== */}
      <LeadGenModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />

      {/* ===== BACK TO TOP ===== */}
      <BackToTop />
    </main>
  );
}
