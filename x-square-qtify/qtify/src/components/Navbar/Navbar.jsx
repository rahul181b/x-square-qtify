import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import InputSearchBar from "../InputSearchBar/InputSearchBar";
function Navbar() {
   return (
      <>
         <div className={styles.Navbar}>
            <Logo />
            <InputSearchBar />
            <Button />
         </div>
      </>
   );
}

export default Navbar;
