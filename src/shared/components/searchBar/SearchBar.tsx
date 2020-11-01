import React, { FC, useEffect, useRef, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Nav, Logo, SearchIcon, CloseIcon, Wrapper, BlackScreen } from "../navBar/navBar.styles";
import { Form, SearchInput } from "./searchBar.styles";

type Props = {
	onClose: () => void;
	width: number;
};

const SearchBar: FC<RouteComponentProps<any> & Props> = ({ onClose, history, width }) => {
	const [query, setQuery] = useState<string>("");
	const [isSearching, setIsSearching] = useState<boolean>(true);
	const searchInput = useRef<HTMLInputElement>(null);

	const search = (e) => {
		e.preventDefault();
		setIsSearching(false);
		onClose();
		history.push({
			pathname: "/search",
			search: query,
		});
	};

	const handleOnClose = () => {
		setIsSearching(false);
		onClose();
	};

	useEffect(() => {
		searchInput.current.focus();
	}, []);

	return (
		<>
			<BlackScreen show={isSearching} onClick={() => handleOnClose()} />
			<Wrapper>
				<Nav>
					{width > 1024 && <Logo onClick={() => history.push("/")}>Heroes</Logo>}
					<Form onSubmit={(e) => search(e)}>
						<SearchIcon onClick={(e) => search(e)} />
						<SearchInput
							ref={searchInput}
							type="text"
							placeholder={"Search for a movie..."}
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<CloseIcon onClick={() => handleOnClose()} />
					</Form>
				</Nav>
			</Wrapper>
		</>
	);
};

export default withRouter(SearchBar);