import styled from "styled-components";
import { StyleList } from "../MovieItem/styles";

export const SecondStyleList = styled(StyleList)`
width: 100px;
  background-color: #fff;
  position:relative;
  margin-top:0.5em;
  @media (min-width: 768px) {
    width: 200px;
    margin-top:3em;

  };
   @media (min-width: 1000px) {
    width: 165px;
    margin-top:3em;

  };
  @media (min-width: 1500px) {
    width: 230px;
    margin-top:3em;

  }
`;
export const IconItem=styled.div`
background-color:#55e6e3;
position: absolute;
top:75px;
border-radius: 5px;
left:40px;
@media (min-width: 767px) {
    top:90px;
    left:70px;
};
@media (min-width: 1500px) {
    top:140px;
    left:80px;

  }
`
export const Names= styled('h1',{
    name:"Names",
})((props)=>({
fontSize: props.fonts.mobile,
'@media (min-width: 768px)': {fontSize: props.fonts.laptop}
}))
export const TrailersPost=styled.img`
border-radius: 12px 12px 0 0;

`