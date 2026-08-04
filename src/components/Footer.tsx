import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <img
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a0262de60a7a52fdc112210.png"
            alt="SGSS Logo"
            className={styles.logoImg}
            style={{ height: '76px' }}
          />
        </div>
        <div className={styles.footerLinks}>
          <Link href="#problem" className={styles.footerLink}>
            The Problem
          </Link>
          <Link href="#solution" className={styles.footerLink}>
            The Hybrid Advantage
          </Link>
          <Link href="#how-it-works" className={styles.footerLink}>
            How It Works
          </Link>
          <Link href="#why-hybrid" className={styles.footerLink}>
            Why Choose Hybrid
          </Link>
        </div>
        <p className={styles.footerCopy}>
          © {new Date().getFullYear()} Secure Guard Security Services. All rights reserved. Secure Guard is a registered provider of active 24/7 hybrid security solutions.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
