import styled from "styled-components";
import { Card } from "@mui/material";

/*export const OverlayPosted = styled.div`
background-color: rgba(22, 32, 218, 0.86);
height:100%
`*/
export const Post = styled(Card, {
    name: "OverlayPost",
  })((props) => ({
   backgroundImage:`repeating-linear-gradient(179deg, rgba(3, 37, 65, 0.8) 94.12%, rgba(3, 37, 65, 0) 96.22%), 
   url(https://image.tmdb.org/t/p/w300${props.path})`,
   minHeight: '300px',
height: 'calc(100vh / 2.5)',
maxHeight: '360px',
backgroundPosition: 'top center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
color: '#fff'
  }))

