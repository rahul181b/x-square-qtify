import LogoImg from "../Assets/logo.png";
import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
   return <img className={styles.logo} src={LogoImg} alt="logo " width={67} />;
}
