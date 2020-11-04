import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Container } from "../../styled/Container";
import HeroImage from "../heroImage/HeroImage";
import { wrapperProps, heroProps, HeroId, HeroName } from "./compareHeroes.styles";
import CompareHeroesForm from "./CompareHeroesForm";
import Powerstats from "./Powerstats";

const CompareHeroes = ({ hero, history }) => {
	return (
		<>
			<CompareHeroesForm />
			<Container {...wrapperProps}>
				{hero.error && <p style={{ color: "red" }}>{hero.error}</p>}
				{hero.details.comparison?.map((hero, i) => (
					<Container {...heroProps} key={hero.id + i} onClick={() => history.push(`heroes/${hero.id}`)}>
						<HeroImage hero={hero}>
							<HeroId>#{hero.id}</HeroId>
							<HeroName>{hero.name}</HeroName>
							<Powerstats hero={hero} />
						</HeroImage>
					</Container>
				))}
			</Container>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		hero: state.heroeDetails,
	};
};

export default compose(connect(mapStateToProps), withRouter)(CompareHeroes);
