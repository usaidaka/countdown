import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useSearchParams } from "react-router-dom";
import classes from "./style.module.scss";

export default function BasicModal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [date, setDate] = React.useState("2024-01-24");
  const [time, setTime] = React.useState("17:00:00");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ date: `${date} ${time}` });
    location.reload(true);
    handleClose();
  };

  return (
    <div className={classes["modal-container"]}>
      <button className={classes["open-modal"]} onClick={handleOpen}>
        Set Count Down Date
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes["modal-head"]}>
          <h1>Please, input your launching date</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="date"
              name=""
              id=""
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().slice(0, -14)}
            />
            <input type="time" onChange={(e) => setTime(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
