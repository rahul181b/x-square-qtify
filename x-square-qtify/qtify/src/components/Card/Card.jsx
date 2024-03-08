import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import img from "../Assets/albumCard.png";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function Card({ data, type }) {
   const getCard = (type) => {
      switch (type) {
         case "album": {
            const { likes, image, title, follows, slugs, songs } = data;

            return (
               <Tooltip title={`${songs.length} Songs`} placement="top" arrow>
                  <Link to={`/album/${slugs}`}>
                     <div className={styles.wraper}>
                        <div className={styles.card}>
                           <img src={image} alt="banner" />
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
                           <p>{title}</p>
                        </div>
                     </div>
                  </Link>
               </Tooltip>
            );
         }

         case "songs": {
            const { image, likes, title, songs } = data;
            return (
               <div className={styles.wraper}>
                  <div className={styles.card}>
                     <img src={image} alt="banner" loading="lazy" />
                     <div className={styles.banner}>
                        <div>
                           <Chip className={styles.pill} label={`${likes} Likes`} />
                        </div>
                     </div>
                  </div>
                  <div className={styles.titleWrapper}>
                     <p>{title}</p>
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
