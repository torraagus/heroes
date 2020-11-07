import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Arrow = styled.div`
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
