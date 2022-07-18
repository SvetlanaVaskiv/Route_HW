import { CardMedia } from "@mui/material";
import styled from "styled-components";
import { StyleList } from "../MovieItem/styles";

export const SecondStyleList = styled(StyleList)`
width: 130px;
  background-color: #fff;
  @media (min-width: 768px) {
    width: 200px;
  }
`;
export const Names= styled('h1',{
    name:"Names",
})((props)=>({
fontSize: props.fonts.mobile,
'@media (min-width: 768px)': {fontSize: props.fonts.laptop}
}))
export const TrailersPost=styled.img`
border-radius: 12px 12px 0 0;

`