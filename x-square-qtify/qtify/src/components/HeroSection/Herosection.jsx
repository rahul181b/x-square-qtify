import React from "react";
import HeroText from "../HeroText/HeroText";
import HeroImage from "../HeroImage/HeroImage";
import Styles from "./Herosection.module.css";

function HeroSection() {
   return (
      <div className={Styles.container}>
         <div className={Styles.Box}>
            <HeroText />
            <HeroImage />
         </div>
      </div>
   );
}

export default HeroSection;
