import React, { useEffect } from "react";

import { useSwiper, SwiperSlide } from "swiper/react";

import styles from "./CarouselRightNavigation.module.css";
import { useState } from "react";
import { ReactComponent as RightArrow } from "../../Assets/RightArrow.svg";

function CarouselRightNavigation() {
   const swiper = useSwiper();
   const [isEnd, setIsEnd] = useState(swiper.isEnd);

   useEffect(() => {
      swiper.on("slideChange", function () {
         setIsEnd(swiper.isEnd);
      });
   }, []);

   return (
      <div className={styles.rightNavigation}>
         {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
      </div>
   );
}

export default CarouselRightNavigation;
