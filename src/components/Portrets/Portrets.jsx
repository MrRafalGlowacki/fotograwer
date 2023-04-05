import { Paper } from "@mui/material";
import React from "react";
import port1 from "../Images/port1.jpg";
import port2a from "../Images/port2a.jpg";
import port2b from "../Images/port2b.jpg";
import port3 from "../Images/port3.jpg";
import board from "../Images/tablicaNoName.jpg";
import css from "./Portrets.module.css";

const Portrets = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Portrety wygrawerowane w granicie</h2>
      <p className={css.paragraph}>
        Możliwość wykonania dowolnych poprawek na starych zdjęciach
      </p>
      <Paper
        elevation={3}
        sx={{
          width: "12vw",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifySelf: "center",
          gridColumnStart: "3",
        }}
      >
        <img className={css.port1} src={port1} alt="old photograph" />{" "}
      </Paper>
      <Paper
        elevation={3}
        sx={{
          width: "12vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          justifySelf: "center",
        }}
      >
        <img className={css.port2a} src={port2a} alt="old photograph" />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          width: "12vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          justifySelf: "center",
        }}
      >
        <img className={css.port2b} src={port2b} alt="old photograph" />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          width: "12vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          justifySelf: "center",
        }}
      >
        <img className={css.port3} src={port3} alt="old photograph" />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          width: "50vw",
          overflow: "hidden",
          justifySelf: "center",
          gridRowStart: "5",
          gridRowEnd: "5",
          gridColumnStart: "1",
          gridColumnEnd: "-1",
        }}
      >
        <img className={css.board} src={board} alt="memory board" />
      </Paper>
    </div>
  );
};

export default Portrets;
