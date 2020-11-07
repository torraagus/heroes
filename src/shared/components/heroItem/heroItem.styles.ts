import styled from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";
import { colors } from "../../../browser/styles/colors";
import { ContainerProps } from "../../styled/Container";

export const Id = styled.h4`
	padding: 0.5rem 0 0 0;
`;
export const Name = styled.small`
	text-align: center;
`;

export const LoaderIcon = styled(BiLoaderAlt)`
	font-size: 24px;
	color: ${colors.primary};
	animation: rotate 0.5s infinite linear;

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const containerProps: ContainerProps = {
	width: "auto",
	minHeight: "auto",
	flexDir: "column",
	alignItems: "center",
	justifyContent: "center",
	display: "flex",
	padding: ".5rem .25rem",
	hover: true,
	animation: "scale .5s ease-out",
	animationName: "scale",
	frames: `
		0% {
			transform: scale(0);
		}
		75% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	`,
};
