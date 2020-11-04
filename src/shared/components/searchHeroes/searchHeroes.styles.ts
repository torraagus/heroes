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
	minHeight: "auto",
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

	minHeight: "auto",
	display: "flex",

	flexDir768: "column",
};

export const leftContainerProps = {
	width: "20vw",
	width1366: "38vw",
	width768: "90vw",

	height: "fit-content",
	display: "flex",
	flexDir: "column",
	borderRadius: "15px",
	margin: "0 1rem 0 0",
	padding: "1rem 1rem 3rem 1rem",
	padding768: "0",

	shadow: true,
	shadow768: false,
};

export const rightContainerProps = {
	width: "50vw",
	width1366: "52vw",
	width768: "90vw",

	padding768: "2rem 0",

	minHeight: "auto",
	display: "flex",
	flexDir: "column",
	justifyContent: "center",
	alignItems: "center",
	alignItems768: "flex-start",
};

export const searchFormProps = {
	flexDir: "column",
	borderBottom: `1px solid ${colors.primary}`,
	margin: "0 1rem 1rem 0",
	padding: "0 0 1rem 0",
	minWidth: "auto",
};

export const loaderContainerProps = {
	minHeight: "40px",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "1rem 0",
};
