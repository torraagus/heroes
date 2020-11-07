import React, { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { HeroDetailsStateT } from "../../redux/heroeDetails/heroeDetailsReducer";
import { RootState } from "../../redux/rootReducer";
import { Container } from "../../styled/Container";
import HeroImage from "../heroImage/HeroImage";
import { wrapperProps, containerProps, HeroId, HeroName } from "./compareHeroes.styles";
import CompareHeroesForm from "./CompareHeroesForm";
import Powerstats from "./Powerstats";

type Props = { hero: HeroDetailsStateT };

const CompareHeroes: FC<Props & RouteComponentProps> = ({ hero, history }) => {
	return (
		<>
			<CompareHeroesForm />
			<Container {...wrapperProps}>
				{hero.error && <p style={{ color: "red" }}>{hero.error}</p>}
				{Array.isArray(hero.details) &&
					hero.details.map((hero, i) => (
						<Container {...containerProps} key={hero.id + i} onClick={() => history.push(`heroes/${hero.id}`)}>
							<HeroImage hero={hero}>
								<HeroId>#{hero.id}</HeroId>
								<HeroName>{hero.name}</HeroName>
								<Powerstats powerstats={hero.powerstats} />
							</HeroImage>
						</Container>
					))}
			</Container>
		</>
	);
};

const mapStateToProps = (state: RootState) => {
	return {
		hero: state.heroeDetails,
	};
};

export default compose(connect(mapStateToProps), withRouter)(CompareHeroes);
