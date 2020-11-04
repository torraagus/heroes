import styled from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";
import { colors } from "../../../browser/styles/colors";

export const Id = styled.h4`
	padding: 0.5rem 0 0 0;
`;
export const Name = styled.small`
	text-align: center;
`;

export const LoaderIcon = styled(BiLoaderAlt)`
	font-size: 24px;
	color: ${colors.primary};
	animation: rotate 1s infinite linear;

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const containerProps = {
	width: "auto",
	minHeight: "auto",
	flexDir: "column",
	alignItems: "center",
	justifyContent: "center",
	display: "flex",
	padding: ".5rem .25rem",
	hover: true,
};
