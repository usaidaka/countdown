import React from "react";
import classes from "./style.module.scss";

const TimeCard = ({ datas }) => {
  return (
    <div className={classes["time-container"]}>
      {datas?.map((data, idx) => (
        <div className={classes["time-wrapper"]} key={idx}>
          <div className={classes.time}>
            <span className={classes["dot-left"]}></span>
            <h1>{data.time}</h1>
            <span className={classes["dot-right"]}></span>
          </div>
          <h3>{data.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default TimeCard;
