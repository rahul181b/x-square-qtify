import React, { useState } from "react";

import style from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

function Section({ title, data, type }) {
   const [carousalToggle, setcarousalToggle] = useState(true);

   const handleToggle = (carousalToggle) => {
      setcarousalToggle((prevState) => !prevState);
   };
   return (
      <div>
         <div className={style.header}></div>
         <h3>{title}</h3>
         <h4 className={style.toggleText} onClick={handleToggle}>
            {!carousalToggle ? "Cpllapse All" : "Show All"}
         </h4>
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
                  <div></div>
               )}
            </div>
         )}
      </div>
   );
}

export default Section;
