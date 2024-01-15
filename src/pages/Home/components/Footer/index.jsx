import React from "react";
import hill from "../../../../assets/pattern-hills.svg";
import fb from "../../../../assets/icon-facebook.svg";
import ig from "../../../../assets/icon-instagram.svg";
import pint from "../../../../assets/icon-pinterest.svg";
import classes from "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <img src={hill} alt="" />
      <div className={classes.socmed}>
        <img src={fb} alt="" />
        <img src={ig} alt="" />
        <img src={pint} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
