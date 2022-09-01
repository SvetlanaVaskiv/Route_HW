import { IconItem, Names, SecondStyleList, TrailersPost } from "./styles";
import icon from "../../assets/play_icon.png";
import { useState } from "react";
import { Modal, Box } from "@mui/material";
import { Trailers } from "../../common/Trailers";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TrailerItem = ({ title, id, poster_path }) => {
  const fontsizes = {
    mobile: "8px",
    laptop: "12px",
  };
  const moveId = id;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <SecondStyleList>
        <TrailersPost src={`https://image.tmdb.org/t/p/w300${poster_path}`} />

        <IconItem>
          <img onClick={handleOpen} src={icon} alt="Click to watch a trailer" />
        </IconItem>

        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Trailers moveId={moveId} />
          </Box>
        </Modal>

        <Names fonts={fontsizes}>{title}</Names>
      </SecondStyleList>
    </>
  );
};
