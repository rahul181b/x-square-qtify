import React, { useState } from "react";

import style from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
   const [carousalToggle, setcarousalToggle] = useState(true);

   const handleToggle = () => {
      setcarousalToggle((prevState) => !prevState);
   };
   return (
      <div>
         <div className={style.header}>
            <h3>{title}</h3>
            <h4 className={style.toggleText} onClick={handleToggle}>
               {!carousalToggle ? "Collapse" : "Show All"}
            </h4>
         </div>
         {data.length === 0 ? (
            <CircularProgress />
         ) : (
            <div className={style.cardWrapper}>
               {!carousalToggle ? (
                  <div className={style.wrapper}>
                     {data.map((ele) => (
                        <Card data={ele} type={type} />
                     ))}
                  </div>
               ) : (
                  <Carousel
                     data={data}
                     renderComponent={(data) => <Card data={data} type={type} />}
                  />
               )}
            </div>
         )}
      </div>
   );
}

export default Section;
