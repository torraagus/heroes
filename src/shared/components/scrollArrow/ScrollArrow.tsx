import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import useScroller from "../../hooks/UseScroller";
import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

const Arrow = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  outline: none;
  z-index: 1;
  cursor: pointer;
  animation: fadeIn 1s;
  transition: opacity 1s;
  opacity: 0.5;
  border-radius: 45px;
  background-color: ${colors.fourth};
  color: ${colors.primary};
  border: 1px solid ${colors.secondary};
  -webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
  -moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
  box-shadow: 5px 5px 5px 0px #651a1b27;
  :hover {
    opacity: 1;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
  @media screen and (max-width: 768px) {
    opacity: 1;
    animation: none;
    transition: none;
  }
`;

const ScrollArrow = () => {
  const { showScroll, scrollTop } = useScroller();

  return (
    <Arrow>
      <MdKeyboardArrowUp
        onClick={scrollTop}
        size={60}
        style={{ display: showScroll ? "flex" : "none" }}
      />
    </Arrow>
  );
};

export default ScrollArrow;
