import React from "react";
import style from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";
import HeroSection from "../../components/HeroSection/Herosection";
import Section from "../../components/Section/Section";
import { fetchFilters } from "../../api/api";

function HomePage() {
   const { data } = useOutletContext();
   const { topAlbums, newAlbums, songs } = data;

   return (
      <div>
         <HeroSection />

         <div className={style.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
            <Section title="Songs" data={songs} type="songs" filterSource={fetchFilters} />
         </div>
      </div>
   );
}

export default HomePage;
