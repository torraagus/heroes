import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Title = styled.h4`
	color: ${colors.secondary};
	text-transform: uppercase;
	letter-spacing: 2;
`;

export const Form = styled.form`
	margin: 0 1rem 0 0;

	@media (max-width: 768px) {
		overflow-x: auto;
		padding: 0 0 0.5rem 0;
	}
`;

export const FilterName = styled.p`
	font-size: 14px;
	color: ${colors.primary};
	padding: 0.25rem 0;
	/* letter-spacing: 3px; */
	text-transform: capitalize;

	@media (max-width: 768px) {
		margin: 0 0.5rem;
	}
`;

export const Options = styled.select`
	height: 36px;
	width: 100%;
	border-radius: 10px;
	outline: none;
	margin: 0.25rem 0 0.5rem 0;
`;

export const Option = styled.option`
	text-transform: capitalize;
`;

export const containerProps = {
	width: "100%",
	padding: ".5rem 0 0 0",
	display768: "flex",
	alignItems768: "center",
};
