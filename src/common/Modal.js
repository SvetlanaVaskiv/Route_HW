

import {  useState } from "react";
import icon from '../assets/play_icon.png'
import Modal from '@mui/material/Modal';
import { Trailers } from "./Trailers";
import { IconItem } from "../components/TrailerItem/styles";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export const ModalTrailler = ({moveId}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

return(


    <Modal
     open={open}
     onClose={handleClose}
    moveId={moveId}>
    <Trailers moveId={moveId}/>
     
     <p>
       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
     </p>
    </Modal>
     
       
   
)
}