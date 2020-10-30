import styled from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";
import { colors } from "../../../browser/styles/colors";

export const LoaderIcon = styled(BiLoaderAlt)`
  font-size: 24px;
  color: ${colors.primary};
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerProps = {
  height: "auto",
  width: "128px",
  flexDir: "column",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  padding: ".25rem .25rem",
  hover: true,
};
