import React, { FC, useEffect, useState } from "react";
import SearchFilters, { Filter } from "../searchFilters/SearchFilters";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch, compose } from "redux";
import { clearState, searchHeroes, fetchMoreHeroes } from "../../redux";
import { Container } from "../../styled/Container";
import { isEmpty } from "../../utils";
import { SearchHeroesState } from "../../redux/searchHeroes/searchHeroesReducer";
import { RootState } from "../../redux/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import { LoaderIcon } from "../heroItem/heroItem.styles";
import BackButton from "../backButton/BackButton";
import NoHeroError from "../heroDetails/noHeroeError/NoHeroError";
import HeroList from "../heroList/HeroList";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";
import SearchForm from "./SearchForm";
import St from "./searchHeroes.styles";

type Props = {
	heroesData: SearchHeroesState;
	searchHeroes(query: string, page: number, filters: Filter[]): (dispatch: Dispatch<AnyAction>) => void;
	fetchMore(query: string, page: number, filters: Filter[]): (dispatch: Dispatch<AnyAction>) => void;
	clearState(): (dispatch: Dispatch<AnyAction>) => void;
};

const HeroesContainer: FC<Props & RouteComponentProps> = ({
	heroesData,
	searchHeroes,
	fetchMore,
	clearState,
	location,
}) => {
	const [filters, setFilters] = useState<Filter[]>([]);
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
		if (page > 1) fetchMore(query, page, filters);
	}, [page]);

	return heroesData.loading.search ? (
		<Loader />
	) : (
		<Container {...St.mainWrapperProps}>
			<BackButton path="/" />
			{heroesData.error === "" && isEmpty(heroesData.heroes) && (
				<NoHeroError mobile title="No heroes found" desc="Change the filters or make another search." />
			)}
			{heroesData.error !== "" && (
				<NoHeroError mobile title="Bad query" desc={`No heroes match ${query}. Please make another search.`} />
			)}
			<Container {...St.wrapperProps}>
				<Container {...St.leftContainerProps}>
					<SearchForm search={query} {...St.searchFormProps} />
					<SearchFilters filters={filters} onFilterSelected={(f) => setFilters([...f])} />
				</Container>
				<Container {...St.rightContainerProps}>
					{!isEmpty(heroesData.heroes) && (
						<>
							<HeroList heroes={heroesData.heroes} />
							{heroesData.loading.fetchMore ? (
								<Container {...St.loaderContainerProps}>
									<LoaderIcon />
								</Container>
							) : (
								<Pagination page={page} onPageChange={(page) => setPage(page)} pagesTotal={heroesData.pagesTotal} />
							)}
						</>
					)}
					{heroesData.error === "" && isEmpty(heroesData.heroes) && (
						<>
							<HeroList heroes={[]} />
							<NoHeroError title="No heroes found" desc="Change the filters or make another search." />
						</>
					)}
					{heroesData.error !== "" && (
						<>
							<NoHeroError title="Bad query" desc={`No heroes match ${query}. Please make another search.`} />
						</>
					)}
				</Container>
			</Container>
		</Container>
	);
};

const mapStateToProps = (state: RootState) => {
	return {
		heroesData: state.heroes,
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, undefined, undefined>) => {
	return {
		searchHeroes: (query: string, page: number, filters: Filter[]) => dispatch(searchHeroes(query, page, filters)),
		fetchMore: (query: string, page: number, filters: Filter[]) => dispatch(fetchMoreHeroes(query, page, filters)),
		clearState: () => dispatch(clearState()),
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(HeroesContainer);
