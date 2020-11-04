import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { clearHeroeDetails, fetchHeroeDetails } from "../../redux/heroeDetails/heroeDetailsAction";
import St from "./heroDetails.styles";
import { Container } from "../../styled/Container";
import Loader from "../loader/Loader";
import Error from "./noHeroeError/Error";
import BackButton from "../backButton/BackButton";
import Biography from "./biography/Biography";
import Work from "./work/Work";
import Connections from "./connections/Connections";
import Powerstats from "./powerstats/Powerstats";
import Appareance from "./appareance/Appareance";
import { isEmpty } from "../../utils";

const HeroeDetails = ({ hero, fetchHeroe, clearState, location }) => {
	useEffect(() => {
		fetchHeroe(location.pathname.split("/").pop());
		return () => {
			clearState();
		};
	}, []);

	return hero.loading ? (
		<Loader />
	) : hero.error !== "" ? (
		<Error error={hero.error} />
	) : !isEmpty(hero.details) ? (
		<Container {...St.mainWrapperProps}>
			<Container {...St.wrapperProps}>
				<BackButton back />
				<St.Image src={hero.details.image?.url} />
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
						<Appareance appearance={hero.details.appearance} />
					</Container>
				</Container>
			</Container>
		</Container>
	) : null;
};

const mapStateToProps = (state) => {
	return {
		hero: state.heroeDetails.details.comparison ? { error: "", loading: true, details: {} } : state.heroeDetails,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchHeroe: (id: string) => dispatch(fetchHeroeDetails(id)),
		clearState: () => dispatch(clearHeroeDetails()),
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(HeroeDetails);
