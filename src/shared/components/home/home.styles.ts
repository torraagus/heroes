import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Title = styled.h1``;

export const apiContainer = {
	minHeight: "100vh",
	display: "flex",
	flexDir: "column",
	justifyContent: "center",
	alignItems: "center",
	bgColor: colors.primary,
	color: "#fff",
};

export const footerContainer = {
	height: "8vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	bgColor: "#444",
	color: "#bbb",
};
