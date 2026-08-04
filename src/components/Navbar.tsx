"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.navLogo} id="nav-logo">
          <img
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/691d0ba7c2cf864910f19e13.png"
            alt="Secure Guard Security Services Logo"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="#problem" className={styles.navLink}>
              The Problem
            </Link>
          </li>
          <li>
            <Link href="#solution" className={styles.navLink}>
              The Solution
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className={styles.navLink}>
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#why-hybrid" className={styles.navLink}>
              Why Hybrid
            </Link>
          </li>
          <li>
            <button
              onClick={onOpenConsultation}
              className={styles.navCta}
              id="nav-cta"
            >
              Request Hybrid Security Audit
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <Link
            href="#problem"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            The Problem
          </Link>
          <Link
            href="#solution"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            The Solution
          </Link>
          <Link
            href="#how-it-works"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#why-hybrid"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Why Hybrid
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenConsultation) onOpenConsultation();
            }}
            className={styles.mobileCta}
          >
            Request Hybrid Security Audit
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
