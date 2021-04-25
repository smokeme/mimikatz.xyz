import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ open, setOpen, data, setData }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Paste mimikatz output</h2>

          <TextareaAutosize
            value={data}
            rowsMax={35}
            rows={30}
            cols={30}
            colsMan={35}
            onClick={(e) => e.target.select()}
            onChange={(e) => setData(e.target.value)}
            onPaste={(e) => {
              setData(e.clipboardData.getData("Text"));
              setOpen(false);
            }}
          ></TextareaAutosize>
        </div>
      </Fade>
    </Modal>
  );
}
