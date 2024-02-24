import LogoImg from "../Assets/logo.png";
import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
   return (
      <div className={styles.logoContainer}>
         <img className={styles.logo} src={LogoImg} alt="logo " width={67} />
      </div>
   );
}
