import React from "react";
import Headphone from "../Assets/vibrating-headphone-1.png";
import Styles from "./HeroImage.module.css";
function HeroImage() {
   return (
      <div className={Styles.ImgContainer}>
         <img className={Styles.ImgSize} src={Headphone} alt="headphones" />
      </div>
   );
}

export default HeroImage;
