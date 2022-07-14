import styled from "styled-components";
import { Card } from "@mui/material";

/*export const OverlayPosted = styled.div`
background-color: rgba(22, 32, 218, 0.86);
height:100%
`*/
export const Post = styled(Card, {
    name: "Post",
  })((props) => ({
   backgroundImage:`repeating-linear-gradient(179deg, rgba(3, 37, 65, 0) 93.7%, rgba(3, 37, 65, 0.8) 94.12%), 
   url(https://image.tmdb.org/t/p/w300${props.path||props.secPath})`,
   minHeight: '180px',
height: 'calc(100vh / 5)',
maxHeight: '500px',
backgroundPosition: 'top center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
width: '90vw',
position:'relative',
left:"5%",
"@media(min-width:532px)": {minHeight: '250px'},
"@media(min-width:768px)": {minHeight: '300px'},
"@media(min-width:1200px)": {minHeight: '350px'},
"@media(min-width:1800px)": {minHeight: '500px'}
  }))
