import React, { useState } from "react";
import { Dialog, DialogContent, IconButton, Button } from "@mui/material";
// import ZoomInIcon from "@mui/icons-material/ZoomIn";

const ImageViewer = ({ imageUrl }: { imageUrl: string }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button fullWidth onClick={handleOpen}>
        <img src={imageUrl} style={{ maxHeight: 400, maxWidth: "100%" }} />
      </Button>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogContent>
          <img src={imageUrl} alt="Large Image" style={{ maxWidth: "100%" }} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageViewer;
