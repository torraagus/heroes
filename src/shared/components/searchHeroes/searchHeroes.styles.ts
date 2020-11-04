import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const HomeBtn = styled.button`
	border-radius: 10px;
	border: none;
	background-color: #eee;
	color: ${colors.primary};
	font-weight: bold;
	text-transform: uppercase;
	padding: 0.5rem 1rem;
	font-size: 11px;
	outline: none;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;

export const Error = styled.i`
	color: red;
`;

export const mainWrapperProps = {
	height: "auto",
	display: "flex",
	flexDir: "column",
	justifyContent: "center",
	alignItems: "center",
	bgColor: "#fff",
	padding: "1rem 0",
	margin: "10vh 0 0 0",
};

export const wrapperProps = {
	width: "70vw",
	width1366: "90vw",

	height: "auto",
	display: "flex",

	flexDir768: "column",
};

export const leftContainerProps = {
	width: "20vw",
	width1366: "30vw",
	width768: "90vw",

	height: "auto",
	display: "flex",
	flexDir: "column",
};

export const rightContainerProps = {
	width: "50vw",
	width1366: "60vw",
	width768: "90vw",

	padding768: "2rem 0",

	height: "auto",
	display: "flex",
	flexDir: "column",
	justifyContent: "center",
	alignItems: "center",
};

export const searchFormProps = {
	flexDir: "column",
	borderBottom: `1px solid ${colors.primary}`,
	margin: "0 1rem 1rem 0",
	padding: "0 0 1rem 0",
	minWidth: "auto",
};
