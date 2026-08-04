"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./LeadGenForm.module.css";
import { Shield, CheckCircle, Send } from "lucide-react";

interface LeadGenFormProps {
  hideHeader?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function LeadGenForm({
  hideHeader = false,
  className = "",
  title = "Request a Hybrid Security Audit",
  subtitle = "Tell us a little about your property and current concerns. A member of our team will contact you with a customized hybrid security review.",
  buttonText = "Request a Hybrid Security Audit",
}: LeadGenFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    propertyType: "",
    city: "",
    concern: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Secure Guard Audit Request Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`${styles.successCard} ${className}`}>
        <div className={styles.successIconCircle}>
          <CheckCircle size={36} />
        </div>
        <h3 className={styles.successTitle}>Audit Request Received!</h3>
        <p className={styles.successDesc}>
          Thank you, <strong>{formData.name}</strong>. Our security operations team has received your information for <strong>{formData.companyName || "your property"}</strong>. We will reach out shortly to schedule your Hybrid Security Audit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className={styles.resetBtn}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.formCard} ${className}`}>
      {!hideHeader && (
        <div className={styles.headerArea}>
          <div className={styles.badge}>
            <Shield size={14} className={styles.badgeIcon} />
            Hybrid Audit Request
          </div>
          <h2 className={styles.title}>
            {title}
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Row 1: Name & Company */}
        <div className={styles.row2Col}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Company / Property Name *
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="e.g. Apex Commercial Plaza"
              required
              value={formData.companyName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className={styles.row2Col}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Business Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 000-0000"
              required
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        {/* Row 3: Property Type & City */}
        <div className={styles.row2Col}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Select Property Type...</option>
              <option value="Commercial Office / Plaza">Commercial Office / Plaza</option>
              <option value="Construction Site">Construction Site</option>
              <option value="Retail & Shopping Center">Retail & Shopping Center</option>
              <option value="Industrial / Warehouse">Industrial / Warehouse</option>
              <option value="Residential HOA / Apartment">Residential HOA / Apartment</option>
              <option value="Other">Other Property</option>
            </select>
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              City / Location
            </label>
            <input
              type="text"
              name="city"
              placeholder="e.g. Los Angeles, Irvine, San Diego"
              value={formData.city}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        {/* Row 4: Concern */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Current Security Concern or Objectives
          </label>
          <textarea
            name="concern"
            placeholder="Tell us about your property's security challenges or current camera setup..."
            rows={3}
            value={formData.concern}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
        </div>

        {/* Row 5: Terms */}
        <div className={styles.termsGroup}>
          <input
            type="checkbox"
            name="agreed"
            id="agreed"
            required
            checked={formData.agreed}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <label htmlFor="agreed" className={styles.termsText}>
            I agree to the <Link href="#privacy" className={styles.privacyLink}>privacy terms</Link>. By submitting, I authorize Secure Guard to contact me regarding hybrid security audits.
          </label>
        </div>

        {/* Row 6: Submit Button */}
        <button
          type="submit"
          className={styles.submitBtn}
        >
          <Send size={18} />
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default LeadGenForm;
