import React from "react";
import Search from "../Assets/Search-icon.png";
import Styles from "./InputSearchBar.module.css";
function InputSearchBar({ searchData }) {
   return (
      <div className={Styles.divFlex}>
         <input
            className={Styles.SearchBar}
            type="text"
            placeholder="Search a album of your choice"></input>
         <button className={Styles.Rectangle}>
            <img src={Search} alt="search" width={20} height={20} />
         </button>
      </div>
   );
}

export default InputSearchBar;
