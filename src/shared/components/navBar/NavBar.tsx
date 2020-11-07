import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	Nav,
	Logo,
	BlackScreen,
	SearchIcon,
	MenuItem,
	Wrapper,
	Button,
	Menu,
	Item,
	BtnsWrapper,
} from "./navBar.styles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import items from "./items";

type Props = {
	onSearch?: () => void;
};

const NavBar: React.FC<RouteComponentProps & Props> = ({ history, onSearch }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLAnchorElement>(null);

	const handleOnClick = (path?: string, isSearch?: boolean) => {
		setIsOpen(false);
		isSearch ? onSearch() : history.push(path);
	};

	useLayoutEffect(() => {
		setTimeout(() => {
			if (location.hash === "#compare") ref.current.click();
		}, 0);
	}, []);

	return (
		<>
			<BlackScreen show={isOpen} onClick={() => setIsOpen(false)} />
			<Wrapper>
				<Nav>
					<Logo onClick={() => handleOnClick("/", false)}>Heroes</Logo>
					<Menu className={isOpen ? "isActive" : ""}>
						{items.map((item) =>
							item.name !== "Home" ? (
								<MenuItem key={item.name} onClick={() => setIsOpen(false)}>
									<Item ref={item.name === "Compare heroes" ? ref : null} href={item.path}>
										{item.name}
									</Item>
								</MenuItem>
							) : (
								<MenuItem key={item.name} onClick={() => handleOnClick(item.path, false)}>
									{item.name}
								</MenuItem>
							)
						)}
						<BtnsWrapper>
							<SearchIcon onClick={() => handleOnClick("", true)} />
						</BtnsWrapper>
					</Menu>
					<BurguerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
				</Nav>
			</Wrapper>
		</>
	);
};

export default withRouter(NavBar);
