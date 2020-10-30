import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const HomeBtn = styled.button`
  border-radius: 10px;
  border: none;
  background-color: #eee;
  color: ${colors.primary};
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-size: 11px;
  outline: none;

  :hover {
    cursor: pointer;
    opacity: 75%;
  }

  :active {
    cursor: pointer;
    opacity: 90%;
  }
`;

export const Error = styled.i`
  color: red;
`;

export const props = {
  height: "auto",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
  bgColor: "#fff",
  padding: "1rem 0",
  margin: '10vh 0 0 0'
};
