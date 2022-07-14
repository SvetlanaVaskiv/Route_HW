import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle= styled.div`
height: 12vh;
background-color:#042537;
display: flex;
justify-content: space-around;
align-items: center;
`
export const LinkSite = styled(Link)`
font-size: 3em;
background:-webkit-linear-gradient(349deg, #07209a, #09815f);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`