import React, { useState } from "react";
import routes from "./routes";
import NoMatch from "./components/noMatch/NoMatch";
import LoadingBar from "react-top-loading-bar";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./components/navBar/NavBar";
import ScrollArrow from "./components/scrollArrow/ScrollArrow";
import useWindowSize from "./hooks/useWindow";
import SearchBar from "./components/searchBar/SearchBar";
import { RootState } from "./redux/rootReducer";

type Props = {
	loader: { color: string; progress: number };
};

const App: React.FC<Props> = ({ loader }): JSX.Element => {
	const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
	const { width } = useWindowSize();

	return (
		<>
			<LoadingBar color={loader.color} progress={loader.progress} />
			<Switch>
				{routes.map(({ path, exact, noNavBar, component: C, ...rest }) => (
					<Route
						key={path}
						path={path}
						exact={exact}
						render={(props) => (
							<>
								{searchBarActive && <SearchBar width={width} onClose={() => setSearchBarActive(false)} />}
								{!searchBarActive && <NavBar onSearch={() => setSearchBarActive(true)} />}
								<C {...props} {...rest} />
							</>
						)}
					/>
				))}
				<Route render={(props) => <NoMatch {...props} />} />
			</Switch>
			<ScrollArrow />
		</>
	);
};

const mapStateToProps = (state: RootState) => {
	return {
		loader: state.loader,
	};
};

export default connect(mapStateToProps)(App);
