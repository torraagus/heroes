import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const CategoryTitle = styled.h2`
	padding: 1rem 0 0.5rem 0;
`;

export const Property = styled.div`
	margin: 0.25rem 0;
`;

export const PropertyName = styled.p``;

type PropertyValueProps = {
	textTransform?: string;
};

export const PropertyValue = styled.p<PropertyValueProps>`
	text-transform: ${({ textTransform }) => textTransform && textTransform};
	font-weight: bold;
	margin: 0.25rem 0;
	color: ${colors.primary};
`;

const Image = styled.img`
	width: 300px;
	border-radius: 15px;

	@media (max-width: 384px) {
		width: 250px;
	}
`;

const Name = styled.h1`
	width: 100%;
	margin: 1rem 0 0 0;
	padding: 1rem 0 0 0.5rem;
	color: ${colors.primary};
`;

const Id = styled.h4`
	padding: 0 0 0 0.5rem;
	color: ${colors.light};
`;

const mainWrapperProps = {
	height: "auto",
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

	display: "flex",
	flexDir: "column",
	alignItems: "flex-start",
	padding: "0 0 2rem 0",
};

const mainContainerProps = {
	width: "70vw",
	width1366: "90vw",

	height: "auto",
	display: "flex",
	flexDir768: "column",
	margin: "1rem 0 0 0",
	padding: "1rem 0 0 0",
	borderTop: `1px solid ${colors.light}`,
};

const leftContainerProps = {
	height: "auto",
	width: "55vw",
	width1366: "70vw",
	width1024: "60vw",
	width768: "90vw",

	display: "flex",
	flexDir: "column",
};

const rightContainerProps = {
	height: "auto",
	width: "15vw",
	width1366: "20vw",
	width1024: "30vw",
	width768: "90vw",

	display: "flex",
	flexDir: "column",
};

export default {
	mainWrapperProps,
	wrapperProps,
	mainContainerProps,
	leftContainerProps,
	rightContainerProps,
	Name,
	Image,
	Id,
};
