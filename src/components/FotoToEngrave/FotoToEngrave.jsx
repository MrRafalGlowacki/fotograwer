import React from "react";
import tatry from "../Images/tatry11.jpg";
import gory from "../Images/gory.jpg";
import css from "./FotoToEngrave.module.css";
import { TbCornerDownRightDouble } from "react-icons/tb";

const FotoToEngrave = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Dowolne zdjęcie wygrawerowane w granicie.</h2>
      <TbCornerDownRightDouble className={css.arrow} />
      <p className={css.paragraph}>
        Możemy wygrawerować dowolne twoje zdjęcie w granicie.
      </p>
      <img src={tatry} className={css.lands} alt="mountain landscape" />
      <img src={gory} className={css.engr} alt="engraved mountain landscape" />
    </div>
  );
};

export default FotoToEngrave;
