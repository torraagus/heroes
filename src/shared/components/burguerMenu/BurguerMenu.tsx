import React, { FC } from "react";
import { Menu, MenuLine } from "./burguerMenu.styles";

interface Props {
	isOpen: boolean;
	toggleMenu: () => void;
}

const BurguerMenu: FC<Props> = ({ isOpen, toggleMenu }): JSX.Element => {
	return (
		<Menu onClick={toggleMenu}>
			<MenuLine className={`${isOpen ? "toggle" : ""} line1`} />
			<MenuLine className={`${isOpen ? "toggle" : ""} line2`} />
			<MenuLine className={`${isOpen ? "toggle" : ""} line3`} />
		</Menu>
	);
};

export default BurguerMenu;