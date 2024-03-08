import React, { useEffect, useState } from "react";

import style from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Section({ title, data, filterSource, type }) {
   const [filters, setFilters] = useState([{ key: "all", label: "all" }]);
   const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
   const [carousalToggle, setcarousalToggle] = useState(true);

   useEffect(() => {
      if (filterSource) {
         filterSource().then((response) => {
            const { data } = response;
            setFilters([...filters, ...data]);
            console.log("filters are" + filters);
            console.log("data is " + data);
         });
      }
   }, []);

   const showFilters = filters.length > 1;

   const CardsToRender = data.filter((card) =>
      showFilters && selectedFilterIndex !== 0
         ? card.genre.key === filters[selectedFilterIndex].key
         : card
   );

   const handleToggle = () => {
      setcarousalToggle((prevState) => !prevState);
   };
   return (
      <div>
         <div className={style.header}>
            <h3>{title}</h3>
            {!showFilters && (
               <h4 className={style.toggleText} onClick={handleToggle}>
                  {!carousalToggle ? "Collapse" : "Show All"}
               </h4>
            )}
         </div>
         {showFilters && (
            <div className={style.filterWrapper}>
               <Filters
                  filters={filters}
                  selectedFilterIndex={selectedFilterIndex}
                  setSelectedFilterIndex={setSelectedFilterIndex}
               />
            </div>
         )}
         {data.length === 0 ? (
            <CircularProgress />
         ) : (
            <div className={style.cardWrapper}>
               {!carousalToggle ? (
                  <div className={style.wrapper}>
                     {CardsToRender.map((ele) => (
                        <Card data={ele} type={type} />
                     ))}
                  </div>
               ) : (
                  <Carousel
                     data={CardsToRender}
                     renderComponent={(data) => <Card data={data} type={type} />}
                  />
               )}
            </div>
         )}
      </div>
   );
}

export default Section;
