import styled from "styled-components";

type Props = {
	width?: string;
	height?: string;
	bgColor?: string;
	color?: string;
	padding?: string;
	borderRadius?: string;
	margin?: string;
	fontSize?: string;
};

export const Button = styled.button<Props>`
	width: ${({ width }) => (width ? width : "auto")};
	height: ${({ height }) => (height ? height : "auto")};
	background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
	color: ${({ color }) => (color ? color : "#000")};
	padding: ${({ padding }) => padding && padding};
	margin: ${({ margin }) => margin && margin};
	border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
	font-weight: bold;
	text-transform: uppercase;

	outline: none;
	border: none;

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;
