import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { HeroDetailsT } from "../../redux/heroeDetails/heroeDetailsReducer";
// import { HeroInfoT } from "../../redux/heroeDetails/heroeDetailsReducer";
import { Container } from "../../styled/Container";
import HeroImage from "../heroImage/HeroImage";
import { containerProps, Id, Name } from "./heroItem.styles";

type Props = { hero: HeroDetailsT };

const HeroItem: FC<Props & RouteComponentProps> = ({ hero, history }) => {
	return (
		<Container {...containerProps} onClick={() => history.push(`/heroes/${hero.id}`)}>
			<HeroImage hero={hero}>
				<>
					<Id>#{hero.id}</Id>
					<Name>{hero.name}</Name>
				</>
			</HeroImage>
		</Container>
	);
};

export default withRouter(HeroItem);
