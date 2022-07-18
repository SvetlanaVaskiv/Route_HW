import styled from "styled-components";
import { Card } from "@mui/material";
export const OverlayPosted = styled.div`
background-color: rgba(26, 131, 120, 0.53);
height:100%`

export const Post = styled('div', {
    name: "Post",
  })((props) => ({
   backgroundImage:` 
   url(https://image.tmdb.org/t/p/w300${props.path||props.secpath})`,
   minHeight: '180px',
height: 'calc(100vh / 5)',
maxHeight: '500px',
backgroundPosition: 'top center',
backgroundSize: 'cover',
width: '90%',
marginLeft:'5vw',
marginTop: '4vh',
overflow: `${props.overflow||'visible'}`,
"@media(min-width:532px)": {minHeight: '250px'},
"@media(min-width:768px)": {minHeight: '300px'},
"@media(min-width:1200px)": {minHeight:'350px'},
"@media(min-width:1800px)": {minHeight: '500px'}
  }))
  export const SecondPost = styled(Post, {
    name: "SecondPost",
  })((props) => ({
   backgroundImage:` 
   url(https://image.tmdb.org/t/p/w300${props.secpath})`,
   overflow: `${props.overflow}`,
   padding: `${props.padding.mobile}`,
"@media(min-width:532px)": {minHeight: '250px'},
"@media(min-width:768px)": {minHeight: '300px', padding:`${props.padding.laptop}` },
"@media(min-width:1200px)": {minHeight:props.height.laptop},
"@media(min-width:1800px)": {minHeight: '500px'}
  }))
  
  export const LayoutTrilers=styled.div`
 
  `
  export const ListTriller=styled.ul`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin:0 1em;
  `
