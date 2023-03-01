import React from "react";
import styles from "./Footer.module.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/Cards") return null;
  return (
    <div className={styles.footer}>
      <p className={styles.text}>
        &copy; Irk Bitig 2023 | Designed &amp; Developed by Mehmethan
      </p>
    </div>
  );
}

export default Footer;
