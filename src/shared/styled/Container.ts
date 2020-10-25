import styled from "styled-components";

type ContainerProps = {
  width?: string;
  height?: string;
  display?: string;
  flexDir?: string;
  justifyContent?: string;
  alignItems?: string;
  bgColor?: string;
  color?: string;
  padding?: string;
  flexWrap?: string;
  hover?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? width : "100vw")};
  min-height: ${({ height }) => (height ? height : "100vh")};
  display: ${({ display }) => (display ? display : "block")};
  flex-direction: ${({ flexDir }) => flexDir && flexDir};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  color: ${({ color }) => (color ? color : "#000")};
  padding: ${({ padding }) => padding && padding};
  flex-wrap: ${({ flexWrap }) => flexWrap && flexWrap};

  :hover {
    cursor: ${({ hover }) => hover && "pointer"};
    opacity: ${({ hover }) => hover && "75%"};
    border-radius: ${({ hover }) => hover && "15px"};
  }
`;
