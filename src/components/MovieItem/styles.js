import { CardMedia } from "@mui/material";
import styled from "styled-components";

export const StyleList = styled.li`

  list-style: none;
  padding: 10px;
  display: flex;
  width: 140px;
  flex-direction: column;
  font-family: serif;
  font-size: 18px;
  color: #38396a;

  @media (min-width: 768px) {
    width: 200px;
  }
`;
export const PostLi = styled(CardMedia)`
  object-fit: contain;
  height: 50%;
  border-radius: 12px;
`;
export const LayoutItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 4.3em;
  right: 0.5em;
`;
