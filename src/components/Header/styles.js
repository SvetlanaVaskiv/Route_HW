import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.div`
  height: 12vh;
  background-color: #042537;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LinkSite = styled(Link)`
  font-size: 3em;
  background: -webkit-linear-gradient(349deg, #53d9b3 60.92%, #07209a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
