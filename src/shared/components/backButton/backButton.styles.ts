import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const Icon = styled(BiArrowBack)`
	font-size: 24px;
	opacity: 50%;

	:hover {
		cursor: pointer;
		opacity: 100%;
	}
`;

export const props = {
	width: "70vw",
	width1366: "90vw",

	minHeight: "auto",
	margin: "0 0 1rem 0",
};
