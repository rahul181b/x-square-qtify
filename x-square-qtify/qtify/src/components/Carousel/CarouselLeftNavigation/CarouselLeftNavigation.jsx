import React, { useEffect } from "react";

import { useSwiper, SwiperSlide } from "swiper/react";

import styles from "./CarouselLeftNavigation.module.css";
import { useState } from "react";
import { ReactComponent as LeftArrow } from "../../Assets/LeftArrow.svg";

function CarouselLeftNavigation() {
   const swiper = useSwiper();
   const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

   useEffect(() => {
      swiper.on("slideChange", function () {
         setIsBeginning(swiper.isBeginning);
      });
   }, []);

   return (
      <div className={styles.leftNavigation}>
         {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
      </div>
   );
}

export default CarouselLeftNavigation;
