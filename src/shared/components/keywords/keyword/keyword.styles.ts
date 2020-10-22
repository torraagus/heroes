import styled from "styled-components";
import { colors } from "../../../../browser/styles/colors";

export const Name = styled.p`
	background-color: ${colors.primary};
	color: white;
	padding: 0.5rem;
	width: fit-content;
	margin: 0.25rem 0.25rem 0 0;
	border-radius: 10px;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;
