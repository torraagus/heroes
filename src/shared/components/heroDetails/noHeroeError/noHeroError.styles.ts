import styled from "styled-components";
import { colors } from "../../../../browser/styles/colors";

export const Title = styled.h2`
	color: red;
`;

export const Description = styled.p`
	text-align: center;
	/* text-transform: capitalize; */
`;

export const Button = styled.button`
	padding: 0.5rem 1rem;
	background-color: ${colors.primary};
	color: white;
	border-radius: 15px;
	margin: 1rem;
	outline: none;
	border: none;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:acitve {
		cursor: pointer;
		opacity: 90%;
	}
`;
