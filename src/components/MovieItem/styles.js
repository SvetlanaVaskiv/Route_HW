import { CardMedia } from "@mui/material";
import styled from "styled-components";

export const StyleList = styled.li`

  list-style: none;
  display: flex;
  width: 140px;
  flex-direction: column;
  font-family: serif;
  font-size: 18px;
  color: #38396a;
  margin: 0 0.5rem;
  border-radius: 12px;
  background-color: #fff;
  @media (min-width: 768px) {
    width: 200px;
  }
`;
export const PostLi = styled.img`
  object-fit: cover;
  height: 50%;
  border-radius: 12px;
  z-index:100;
`;

export const LayoutProgressive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 4.3em;
  z-index:100;
  
`;
