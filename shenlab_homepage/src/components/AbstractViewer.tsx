import React, { useState } from "react";
import { Dialog, IconButton, Button, Divider } from "@mui/material";
import styles from "../styles/Publish.module.css";
import SearchIcon from "@mui/icons-material/Search";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
const AbstractViewer = ({
  title,
  authors,
  journal,
  abstract,
  url,
  highlight,
}: {
  title: string;
  authors: string;
  abstract: string;
  journal: string;
  url: string;
  highlight?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let dialogTitle = title;
  if (dialogTitle.endsWith(".")) {
    dialogTitle = dialogTitle.slice(0, -1);
  }
  return (
    <>
      <div className={styles.row}>
        <li className={highlight ? styles.highlight : ""}>
          <span dangerouslySetInnerHTML={{ __html: authors }}></span>{" "}
          <span dangerouslySetInnerHTML={{ __html: title }}></span>{" "}
          <span dangerouslySetInnerHTML={{ __html: journal }}></span>{" "}
          <IconButton
            aria-label="detail"
            // href={url}
            size="small"
            onClick={handleOpen}
          >
            <SearchIcon />
          </IconButton>
        </li>
      </div>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h5" component="div" gutterBottom>
            {dialogTitle}
          </Typography>
          <Typography variant="subtitle1" component="div" gutterBottom>
            {/* {dialogTitle} */}
            <span dangerouslySetInnerHTML={{ __html: authors }}></span>{" "}
            <span dangerouslySetInnerHTML={{ __html: journal }}></span>{" "}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Divider />
          <DialogContentText>
            <Button href={url}>
              <Typography variant="subtitle1" component="div" gutterBottom>
                Full text link
              </Typography>
            </Button>
            {abstract && abstract !== "AAA" && (
              <>
                <Typography variant="h6" component="div" gutterBottom>
                  Abstract
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  {abstract}
                </Typography>
              </>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AbstractViewer;
