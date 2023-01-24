import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import Logo from "../Logo";
import SocialButton from "../SocialButton";
import Menu from "./Menu";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoFrame}>
          <Logo />
          <div className={styles.address}>
            {`Wisconsin Ave, Suite 700
Chevy Chase, Maryland 20815`}
          </div>
        </div>
        <div className={styles.companyFrame}>
          <h4>Company</h4>
          <Menu />
        </div>
        <div className={styles.mediaFrame}>
          <h4>Social media</h4>
          <div className={styles.socials}>
            <SocialButton type="facebook" href="http://www.facebook.com" />
            <SocialButton type="unknown" href="http://www.unknown.com" />
            <SocialButton type="twitter" href="http://www.twitter.com" />
            <SocialButton type="linkedin" href="http://www.linkedin.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
