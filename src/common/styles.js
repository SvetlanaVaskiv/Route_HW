import { CircularProgress, Box } from "@mui/material";
import styled from "styled-components";
import { SIZE } from "./consts";

export const StyledCircularProgress= styled(CircularProgress,{
name: "StyledCircularProgress",
})((props)=>({
    height: props.SIZES=SIZE.laptop,
    width: props.SIZES=SIZE.laptop,
    "@media(max-width:767px)": {height: props.SIZES=SIZE.mobile,
        width: props.SIZES=SIZE.mobile,},
}))

export const StyledRating= styled('div',{
    name:'StyledRating',
})((props)=>({
    fontWeight:'700',
lineHeight: '1.66',
letterSpacing: '0.03333em',
color: '#2e7d32',
    fontSize:props.fontsizes.laptop,
    "@media(max-width:767px)": {fontSize: props.fontsizes.mobile},
}))


export const BoxLayout=styled(Box,{
    name: 'BoxLayout',
})((props)=>({
position: 'relative',
display: 'inline-flex',
backgroundColor:'black',
borderRadius:'50%',
fontWeight:'700',
top:'56px',
right: props.right.laptopRight,
zIndex: '500',
"@media(max-width:700px)": {right: props.right.mobileRight},
}))