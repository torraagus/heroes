import React, { Dispatch, FC, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, compose } from "redux";
import { clearHeroeDetails, fetchHeroeDetails } from "../../redux/heroeDetails/heroeDetailsAction";
import St from "./heroDetails.styles";
import { Container } from "../../styled/Container";
import Loader from "../loader/Loader";
import NoHeroError from "./noHeroeError/NoHeroError";
import BackButton from "../backButton/BackButton";
import Biography from "./biography/Biography";
import Work from "./work/Work";
import Connections from "./connections/Connections";
import Powerstats from "./powerstats/Powerstats";
import Appearance from "./appearance/Appearance";
import { isEmpty } from "../../utils/utils";
import { HeroDetailsStateT } from "../../redux/heroeDetails/heroeDetailsReducer";
import { RootState } from "../../redux/rootReducer";
import { ThunkDispatch } from "redux-thunk";

type Props = {
	hero: HeroDetailsStateT;
	fetchHeroe: (id: string) => (dispatch: Dispatch<AnyAction>) => void;
	clearState: () => (dispatch: Dispatch<AnyAction>) => void;
};

const HeroeDetails: FC<Props & RouteComponentProps> = ({ hero, fetchHeroe, clearState, location }) => {
	useEffect(() => {
		fetchHeroe(location.pathname.split("/").pop());
		return () => {
			clearState();
		};
	}, []);

	return hero.loading ? (
		<Loader />
	) : (
		<Container {...St.mainWrapperProps}>
			{hero.error !== "" && <NoHeroError title="Error" desc={hero.error} showBtn />}
			{!isEmpty(hero.details) && !Array.isArray(hero.details) && (
				<Container {...St.wrapperProps}>
					<>
						<BackButton back />
						<St.Image src={hero.details.image.url} />
						<St.Name>{hero.details.name}</St.Name>
						{hero.details.id && <St.Id>Heroe #{hero.details.id}</St.Id>}
						<Container {...St.mainContainerProps}>
							<Container {...St.leftContainerProps}>
								<Biography biography={hero.details.biography} heroName={hero.details.name} />
								<Work work={hero.details.work} />
								<Connections connections={hero.details.connections} />
							</Container>
							<Container {...St.rightContainerProps}>
								<Powerstats powerstats={hero.details.powerstats} />
								<Appearance appearance={hero.details.appearance} />
							</Container>
						</Container>
					</>
				</Container>
			)}
		</Container>
	);
};

const mapStateToProps = (state: RootState) => {
	return {
		hero: state.heroeDetails.details instanceof Array ? { error: "", loading: true, details: {} } : state.heroeDetails,
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, undefined, undefined>) => {
	return {
		fetchHeroe: (id: string) => dispatch(fetchHeroeDetails(id)),
		clearState: () => dispatch(clearHeroeDetails()),
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(HeroeDetails);
