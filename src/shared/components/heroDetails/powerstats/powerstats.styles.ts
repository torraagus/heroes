import styled from "styled-components";
import { colors } from "../../../../browser/styles/colors";

export const Powerstat = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.25rem 0;
	padding: 0.25rem 1rem;
	border-radius: 15px;
	background-color: ${colors.primary};
`;
export const Name = styled.p`
	color: white;
	text-transform: capitalize;
`;
export const Value = styled.p`
	color: ${colors.terciary};
	font-weight: bold;
`;
