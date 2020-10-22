import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 90vh;
	align-items: center;
	justify-content: center;
`;

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
	color: ${colors.primary};
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
