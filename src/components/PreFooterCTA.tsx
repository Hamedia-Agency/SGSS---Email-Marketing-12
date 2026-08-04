"use client";

import React from "react";
import styles from "./PreFooterCTA.module.css";
import { ShieldCheck, Calendar, Phone } from "lucide-react";

interface PreFooterCTAProps {
  onOpenConsultation?: () => void;
}

export function PreFooterCTA({ onOpenConsultation }: PreFooterCTAProps) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.badge}>
          <ShieldCheck size={16} />
          Active Incident Response
        </div>
        <h2 className={styles.heading}>
          Ready to elevate your security?
        </h2>
        <div className={styles.subtext}>
          <p>
            Stop waiting for someone else to call the police. Partner with a security service that takes action.
          </p>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={onOpenConsultation}
            className={styles.btnPrimary}
          >
            <Calendar size={18} />
            Request a Hybrid Security Audit
          </button>
          <a
            href="tel:1-888-908-7818"
            className={styles.btnSecondary}
          >
            <Phone size={18} />
            Speak to a Specialist (1-888-908-7818)
          </a>
        </div>
      </div>
    </section>
  );
}

export default PreFooterCTA;
