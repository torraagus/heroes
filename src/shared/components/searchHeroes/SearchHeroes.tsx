import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch, compose } from "redux";
import { colors } from "../../../browser/styles/colors";
import { clearState, searchHeroes, loadMore } from "../../redux";
import { Container } from "../../styled/Container";
import { isEmpty } from "../../utils";
import BackButton from "../backButton/BackButton";
import HeroList from "../heroList/HeroList";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";
import SearchFilters from "../searchFilters/SearchFilters";
import SearchForm from "./SearchForm";
import {
	searchFormProps,
	mainWrapperProps,
	wrapperProps,
	leftContainerProps,
	rightContainerProps,
} from "./searchHeroes.styles";

type Props = {
	heroesData: {
		pagesTotal: number;
		heroes: [{ id: string; name: string }];
		loading: { search: boolean; more: boolean };
		error: string;
	};
	searchHeroes(
		query: string,
		page: number,
		filters: { by: string; value: string }[]
	): (dispatch: Dispatch<AnyAction>) => void;
	loadMore(
		query: string,
		page: number,
		filters: { by: string; value: string }[]
	): (dispatch: Dispatch<AnyAction>) => void;
	clearState(): (dispatch: Dispatch<AnyAction>) => void;
};

const HeroesContainer: FC<Props & RouteComponentProps> = ({
	heroesData,
	searchHeroes,
	loadMore,
	clearState,
	location,
}) => {
	const [filters, setFilters] = useState<{ by: string; value: string }[]>([]);
	const [page, setPage] = useState(1);
	const query = location.search.substr(1);

	useEffect(() => {
		return () => {
			clearState();
		};
	}, []);

	useEffect(() => {
		setPage(1);
		searchHeroes(query, 1, filters);
	}, [query, filters]);

	useEffect(() => {
		if (page > 1) loadMore(query, page, filters);
	}, [page]);

	if (heroesData.loading.search) {
		return <Loader />;
	} else {
		return (
			<Container {...mainWrapperProps}>
				<BackButton path="/" />
				<Container {...wrapperProps}>
					<Container {...leftContainerProps}>
						<SearchForm search={query} {...searchFormProps} />
						<SearchFilters filters={filters} onFilterSelected={(f) => setFilters([...f])} />
					</Container>
					<Container {...rightContainerProps}>
						{!isEmpty(heroesData.heroes) && (
							<>
								<HeroList heroes={heroesData.heroes} />
								{heroesData.loading.more ? (
									<p style={{ height: 40, lineHeight: "40px", padding: "1rem 0" }}>Loading...</p>
								) : (
									<Pagination page={page} onPageChange={(page) => setPage(page)} pagesTotal={heroesData.pagesTotal} />
								)}
							</>
						)}
						{heroesData.error === "" && isEmpty(heroesData.heroes) && (
							<>
								<HeroList heroes={[]} />
								<h3>No heroes found</h3>
								<i style={{ textAlign: "center" }}>Change the filters or make another search.</i>
							</>
						)}
						{heroesData.error !== "" && (
							<>
								<h3>Error</h3>
								<i style={{ textAlign: "center" }}>
									No heroes match <b style={{ color: colors.fourth }}>{query}</b>. Please change the hero name.
								</i>
							</>
						)}
					</Container>
				</Container>
			</Container>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		heroesData: state.heroes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchHeroes: (query: string, page: number, filters: { by: string; value: string }[]) =>
			dispatch(searchHeroes(query, page, filters)),
		loadMore: (query: string, page: number, filters: { by: string; value: string }[]) =>
			dispatch(loadMore(query, page, filters)),
		clearState: () => dispatch(clearState()),
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(HeroesContainer);
