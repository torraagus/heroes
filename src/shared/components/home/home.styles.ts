import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";
interface IWrapper {
	bg?: string;
	height?: number;
	vCenter?: boolean;
	isFirst?: boolean;
}

export const Wrapper = styled.div<IWrapper>`
	width: -webkit-fill-available;
	padding-top: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: start;
	background-color: ${colors.terciary};
`;
