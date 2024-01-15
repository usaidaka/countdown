import React from "react";
import { useRef } from "react";
import classes from "./style.module.scss";
import { useState, useEffect } from "react";
import TimeCard from "../TimeCard";
import CountDate from "../BasicModal";
import stars from "../../../../assets/bg-stars.svg";

const Main = () => {
  const [timerDays, setTimeDays] = useState("0");
  const [timerHours, setTimeHours] = useState("0");
  const [timerMinutes, setTimeMinutes] = useState("0");
  const [timerSeconds, setTimeSeconds] = useState("0");

  const timerTemplate = [
    { time: timerDays, name: "DAYS" },
    { time: timerHours, name: "HOURS" },
    { time: timerMinutes, name: "MINUTES" },
    { time: timerSeconds, name: "SECONDS" },
  ];

  let interval = useRef();
  const queryParams = new URLSearchParams(window.location.search);
  let date = queryParams.get("date");

  const startTimer = () => {
    interval = setInterval(() => {
      if (!date) {
        date = "2024-01-24 17:00:00";
      }
      const now = new Date().getTime();
      const distance = new Date(date) - now;

      let days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
      if (days.length === 1) {
        days = `0${days}`;
      }
      let hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );

      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      <img src={stars} alt="" className={classes.background} />
      <main>
        <div className={classes.message}>
          <h1> WE'RE LAUNCHING SOON </h1>
          <CountDate />
        </div>
        <TimeCard datas={timerTemplate} />
      </main>
    </div>
  );
};

export default Main;
