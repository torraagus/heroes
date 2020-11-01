  
import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";
import { SearchIcon, CloseIcon } from "../navBar/navBar.styles";

export const Form = styled.form`
	display: flex;
	@media (max-width: 1024px) {
		width: 100%;
	}
	${SearchIcon} {
		margin-left: 0;
	}
	${CloseIcon} {
		padding: 0 0 0 0.5rem;
	}
`;

export const SearchInput = styled.input`
	height: 40px;
	width: 300px;
	text-indent: 0.5rem;
	outline: none;
	border: 1px solid #ccc;
	border-radius: 10px;
	:focus {
		border: 1px solid ${colors.primary};
	}
	@media (max-width: 1024px) {
		width: inherit;
	}
`;