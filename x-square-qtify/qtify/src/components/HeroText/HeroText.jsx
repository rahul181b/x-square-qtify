import React from "react";
import Styles from "./HeroText.module.css";

function HeroText() {
   return (
      <div className={Styles.TextBox}>
         <p className={Styles.text}>100 Thousand Songs, ad-free</p>
         <p className={Styles.text}>Over thousands podcast episodes</p>
      </div>
   );
}

export default HeroText;
