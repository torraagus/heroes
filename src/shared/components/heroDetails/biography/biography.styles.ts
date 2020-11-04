import styled from "styled-components";
import { colors } from "../../../../browser/styles/colors";

export const AliasesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Alias = styled.p`
	font-weight: bold;
	background-color: ${colors.primary};
	padding: 0.25rem 0.5rem;
	margin: 0.5rem 0.25rem 0 0;
	color: white;
`;
