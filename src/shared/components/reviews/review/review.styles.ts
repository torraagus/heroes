import styled from "styled-components";
import { colors } from "../../../../browser/styles/colors";

export const Container = styled.div`
	border-bottom: 2px solid ${colors.primary};
	border-left: 1px solid ${colors.primary};
	padding: "1rem 0 1rem 0";
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	box-shadow: 5px 5px 5px 0px #651a1b27;
	padding: 1rem;
	border-radius: 15px;
`;
export const Content = styled.p`
	-webkit-user-modify: read-write-plaintext-only;
`;
export const Author = styled.a`
	display: block;
	margin: 1rem 0 1rem 0;
	text-decoration: none;
	font-weight: bold;
	color: ${colors.secondary};

	:hover {
		cursor: pointer;
		opacity: 75%;
	}

	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;
