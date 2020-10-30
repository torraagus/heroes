import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Menu = styled.div`
	display: none;
	:hover {
		cursor: pointer;
	}
	@media (max-width: 1024px) {
		display: block;
	}
`;

export const MenuLine = styled.div`
	background-color: black;
	margin: 5px;
	height: 2px;
	width: 25px;
	transition: all 0.3s ease;
	&.toggle {
		background-color: ${colors.secondary};
	}
	&.toggle.line1 {
		transform: rotate(-45deg) translate(-5px, 5px);
	}
	&.toggle.line2 {
		opacity: 0;
	}
	&.toggle.line3 {
		transform: rotate(45deg) translate(-5px, -5px);
	}
`;