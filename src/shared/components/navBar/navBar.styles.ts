import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";
import { BiSearch } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

interface BlackScreenProps {
	show: boolean;
}

export const SearchIcon = styled(BiSearch)`
	font-size: 24px;
	padding: 0.5rem;
	color: white;
	border: none;
	border-radius: 90px;
	outline: none;
	background-color: ${colors.primary};
	margin: 0 0.5rem 0 0.5rem;
	:hover {
		cursor: pointer;
		opacity: 75%;
	}
	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;

export const CloseIcon = styled(RiCloseFill)`
	font-size: 24px;
	padding: 0.5rem;
	color: ${colors.light};
	:hover {
		cursor: pointer;
		color: ${colors.primary};
		opacity: 75%;
	}
	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;

export const Wrapper = styled.div`
	position: fixed;
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	min-height: 60px;
	z-index: 3;
	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;
`;

export const BlackScreen = styled.div<BlackScreenProps>`
	position: absolute;
	display: none;
	height: 600vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;
	@media (max-width: 1024px) {
		display: ${({ show }) => (show ? "block" : "none")};
	}
`;

export const Logo = styled.div`
	color: ${colors.fourth};
	font-weight: 900;
	letter-spacing: 3px;
	font-size: 16px;
	text-transform: uppercase;
	padding: 0.25rem 1rem;
	background-color: ${colors.primary};
	border-radius: 10px;
	:hover {
		cursor: pointer;
	}
`;

export const Nav = styled.nav`
	width: 70%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1366px) {
		width: 90%;
	}
`;

export const Menu = styled.ul`
	list-style: none;
	display: flex;
	&.isActive {
		transform: translateX(0%);
	}
	@media (max-width: 1024px) {
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 60px;
		right: 0;
		height: 90vh;
		width: 60%;
		background-color: white;
		transform: translateX(100%);
		transition: transform 0.3s ease;
	}
	@media (max-width: 384px) {
		width: 80%;
	}
`;

export const MenuItem = styled.li`
	padding: 0.5rem;
	:hover {
		border-bottom: 1px solid ${colors.primary};
		cursor: pointer;
	}
	:active {
		opacity: 75%;
		cursor: pointer;
	}
	@media (max-width: 1024px) {
		padding: 1rem 0;
		width: 100%;
		border-bottom: 1px solid ${colors.terciary};
		text-align: center;
		:hover {
			color: ${colors.primary};
		}
	}
`;

export const Item = styled.a`
  color: ${colors.secondary};
  text-decoration: none;
  padding: 1rem 0 1rem 0;
  width: 100%;
  :hover {
    cursor: pointer;
    color: ${colors.primary};
  }
  @media (max-width: 768px) {
    border-bottom: 1px solid #eee;
  }
`;

export const Button = styled.button`
	width: 100px;
	outline: none;
	background-color: ${colors.primary};
	color: white;
	border: none;
	font-weight: bold;
	border-radius: 15px;
	height: 40px;
	:hover {
		cursor: pointer;
		opacity: 75%;
	}
	:active {
		cursor: pointer;
		opacity: 90%;
	}
`;

export const BtnsWrapper = styled.li`
	display: flex;
	@media (max-width: 1024px) {
		padding: 1rem 0;
	}
`;