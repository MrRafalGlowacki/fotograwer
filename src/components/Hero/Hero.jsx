import React from "react";
import logo from "../../components/Images/hero.jpg";
import css from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={css.container}>
      <img src={logo} alt="hero bacground" className={css.logo} />
      <div className={css.hero}>Fotograwer</div>
      <div className={css.sub} >PORTRETY I GRAFIKI W GRANICIE</div>
    </div>
  );
};

export default Hero;
