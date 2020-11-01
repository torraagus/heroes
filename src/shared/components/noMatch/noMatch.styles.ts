import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const props = {
  display: "flex",
  flexDir: "column",
  alignItems: 'center',
  justifyContent: 'center'
};

export const Code = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: ${colors.primary};
`;
export const Message = styled.p`
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 1rem;
  background-color: ${colors.secondary};
  outline: none;
  border: none;
  border-radius: 15px;
  color: white;
  margin: 2rem 0;

  :hover {
    cursor: pointer;
    opacity: 75%;
  }

  :active {
    cursor: pointer;
    opacity: 90%;
  }
`;
