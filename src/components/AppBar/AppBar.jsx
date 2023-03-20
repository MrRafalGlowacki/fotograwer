import React from "react";
import css from "./AppBar.module.css";
import { FcTouchscreenSmartphone } from "react-icons/fc";

const AppBar = () => {
  return (
    <header className={css.border}>
      <div className={css.header}>
        <a href="index.html" className={css.logo}>
          Foto<span className={css.span}>grawer</span>
        </a>

        <div>
          <a href="tel:+48505512362" className={css.phone}>
            <FcTouchscreenSmartphone />
            +48 505 512 362
          </a>
        </div>
        <div className={css.icon}>
          <svg width="24" height="16">
            <use href="images/icons.svg#menu_mobile"></use>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
