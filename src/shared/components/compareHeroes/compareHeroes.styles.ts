import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

type FormProps = {
  display?: string;
  flexDir?: string;
  justifyContent?: string;
  alignItems?: string;
};

export const Form = styled.form<FormProps>`
  display: ${({ display }) => (display ? display : "block")};
  flex-direction: ${({ flexDir }) => flexDir && flexDir};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

type SubmitProps = {
  margin: string;
};

export const Submit = styled.input<SubmitProps>`
  margin: ${({ margin }) => margin && margin};
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0.5rem;
  background-color: ${colors.primary};
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
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

export const Input = styled.input`
  text-indent: 1rem;
  height: 40px;
  width: 140px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #444;
  margin: 1rem 10px 0 0;

  :nth-child(2) {
      margin: 1rem 0 0 0;
  }

  :focus {
    border: 1px solid ${colors.secondary};
  }
`;
