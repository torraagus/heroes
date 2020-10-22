import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
	margin: 2rem 0 2rem 0;
	width: 55vw;

	@media (max-width: 1366px) {
		width: 65vw;
	}

	@media (max-width: 1024px) {
		width: 90vw;
		margin: 2rem 0 0 0;
	}
`;

export const Container = styled.div`
	margin: 1rem 0 0 0;
`;

export const Title = styled.h2``;

export const Error = styled.p`
	color: red;
`;

export const ReadAll = styled.p`
	margin: 1rem 0 0 0;
	font-weight: bold;
	color: ${colors.primary};

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;
