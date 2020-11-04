import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

type FormProps = {
	display?: string;
	flexDir?: string;
	justifyContent?: string;
	alignItems?: string;
	borderBottom?: string;
	margin?: string;
	padding?: string;
};

export const Form = styled.form<FormProps>`
	display: ${({ display }) => (display ? display : "block")};
	flex-direction: ${({ flexDir }) => flexDir && flexDir};
	justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
	align-items: ${({ alignItems }) => alignItems && alignItems};
	margin: ${({ margin }) => margin && margin};
	padding: ${({ padding }) => padding && padding};
	border-bottom: ${({ borderBottom }) => borderBottom && borderBottom};

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

type SubmitProps = {
	margin: string;
};

export const Submit = styled.input<SubmitProps>`
	margin: ${({ margin }) => margin && margin};
	height: 40px;
	border-radius: 10px;
	padding: 0.5rem;
	background-color: ${colors.secondary};
	color: white;
	text-transform: uppercase;
	border: none;
	font-weight: bold;
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

type InputProps = {
	minWidth?: string;
};

export const Input = styled.input<InputProps>`
	min-width: ${({ minWidth }) => minWidth && minWidth};
	text-indent: 1rem;
	height: 40px;
	outline: none;
	border-radius: 10px;
	border: 1px solid #444;
	margin: 1rem 0 0 0;

	:focus {
		border: 1px solid ${colors.secondary};
	}
`;
