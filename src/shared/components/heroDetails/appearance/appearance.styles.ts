import styled from "styled-components";
import { colors } from "../../../../browser/styles/colors";

export const Property = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.25rem 0;
	padding: 0.25rem 1rem;
	border-radius: 15px;
	border-bottom: 1px solid ${colors.light};
`;
export const Name = styled.p``;
export const Value = styled.p`
	color: ${colors.secondary};
	font-weight: bold;
	text-align: end;
`;
