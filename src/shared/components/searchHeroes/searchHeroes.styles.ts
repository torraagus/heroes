import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

const MobileError = styled.div`
	display: none;
	width: 90vw;
	padding: 1rem;

	@media (max-width: 768px) {
		display: block;
	}
`;

const mainWrapperProps = {
	minHeight: "auto",
	display: "flex",
	flexDir: "column",
	justifyContent: "center",
	alignItems: "center",
	bgColor: "#fff",
	padding: "1rem 0",
	margin: "10vh 0 0 0",
};

const wrapperProps = {
	width: "70vw",
	width1366: "90vw",

	minHeight: "auto",
	display: "flex",

	flexDir768: "column",
};

const leftContainerProps = {
	width: "20vw",
	width1366: "30vw",
	width1024: "35vw",
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

const rightContainerProps = {
	width: "50vw",
	width1366: "60vw",
	width1024: "55vw",
	width768: "90vw",

	padding768: "2rem 0",

	minHeight: "auto",
	display: "flex",
	flexDir: "column",
	justifyContent: "center",
	alignItems: "center",
	alignItems768: "center",
};

const searchFormProps = {
	flexDir: "column",
	borderBottom: `1px solid ${colors.primary}`,
	margin: "0 1rem 1rem 0",
	padding: "0 0 1rem 0",
	minWidth: "auto",
};

const loaderContainerProps = {
	minHeight: "40px",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "1rem 0",
};

export default {
	mainWrapperProps,
	wrapperProps,
	leftContainerProps,
	rightContainerProps,
	searchFormProps,
	loaderContainerProps,
	MobileError,
};
