import styled from "styled-components";

export const HeroId = styled.p``;
export const HeroName = styled.p`
	font-weight: bold;
`;

export const wrapperProps = {
	minHeight: "auto",
	display: "flex",
	bgColor: "inherit",
	justifyContent: "center",

	width768: "auto",
	flexDir768: "column",
};

export const containerProps = {
	minHeight: "auto",
	width: "auto",
	padding: "1rem",
	bgColor: "white",
	margin: ".25rem",
	borderRadius: "15px",
	hover: true,
};
