import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import img from "../Assets/albumCard.png";
import { Tooltip } from "@mui/material";

function Card({ data, type }) {
   const getCard = (type) => {
      switch (type) {
         case "album": {
            const { likes, image, title, follows, slugs, songs } = data;

            return (
               <Tooltip title={`${songs.length} Songs`} placement="top" arrow>
                  <a href={`/album/${slugs}`}>
                     <div className={styles.wraper}>
                        <div className={styles.card}>
                           <img src={img} alt="banner" />
                           <div className={styles.banner}>
                              <div>
                                 <Chip
                                    className={styles.pill}
                                    size="small"
                                    label={`${follows} Follows`}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className={styles.titleWrapper}>
                           <p>New Bollywood</p>
                        </div>
                     </div>
                  </a>
               </Tooltip>
            );
         }

         case "song": {
            return (
               <div className={styles.wraper}>
                  <div className={styles.card}>
                     <img src={img} alt="banner" />
                     <div className={styles.banner}>
                        <div>
                           <Chip className={styles.pill} label="100 Follows" />
                        </div>
                     </div>
                  </div>
                  <div className={styles.titleWrapper}>
                     <p>New Bollywood</p>
                  </div>
               </div>
            );
         }

         default: {
            return <></>;
         }
      }
   };
   return getCard(type);
}

export default Card;
