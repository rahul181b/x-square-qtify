import { Navigation } from "swiper/modules";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
// Import Swiper styl
import "swiper/css";
import "swiper/css/navigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
   const swiper = useSwiper();
   useEffect(() => {
      swiper.slideTo(0);
   }, [data]);

   return <></>;
};

function Carousel({ data, renderComponent }) {
   return (
      <div className={styles.wrapper}>
         <Swiper
            style={{ padding: "0px 20px" }}
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={"auto"}
            allowTouchMove
            onSlideChange={() => console.log("slide change")}>
            <Controls data={data} />
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
            {data.map((ele) => (
               <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}

export default Carousel;
