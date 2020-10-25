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