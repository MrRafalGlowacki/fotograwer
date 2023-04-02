import React from "react";
import tatry from "../Images/tatry11.jpg";
import gory from "../Images/gory.jpg";
import css from "./FotoToEngrave.module.css";
import { TbCornerDownRightDouble } from "react-icons/tb";
import { Paper } from "@mui/material";

const FotoToEngrave = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Dowolne zdjęcie wygrawerowane w granicie.</h2>
      <p className={css.paragraph}>
        Możemy wygrawerować dowolne twoje zdjęcie w granicie.
      </p>
      <Paper
        elevation={3}
        sx={{
          display: "grid",
          maxWidth: "30vw",
          justifySelf: "right",
          overflow: "hidden",
        }}
      >
        <img src={tatry} className={css.lands} alt="mountain landscape" />
        <TbCornerDownRightDouble className={css.arrow} />
      </Paper>
      <Paper elevation={3} sx={{ maxWidth: "35vw", overflow: "hidden" }}>
        <img
          src={gory}
          className={css.engr}
          alt="engraved mountain landscape"
        />
      </Paper>
    </div>
  );
};

export default FotoToEngrave;
