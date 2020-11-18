import { AppearanceI } from "../../components/heroDetails/appearance/appareance.properties";
import { BiographyI } from "../../components/heroDetails/biography/biography.properties";
import { ConnectionsT } from "../../components/heroDetails/connections/connections.properties";
import { PowerstatsT } from "../../components/heroDetails/powerstats/powerstats.properties";
import { WorkT } from "../../components/heroDetails/work/work.properties";
import {
	FETCH_HERO_DETAILS_FAILURE,
	FETCH_HERO_DETAILS_REQUEST,
	FETCH_HERO_DETAILS_SUCCESS,
} from "./heroeDetailsTypes";

type ActionT = {
	type: string;
	payload: HeroDetailsT | [HeroDetailsT, HeroDetailsT] | string;
};

// export type HeroInfoT = {
// 	id: string;
// 	name: string;
// 	image: { url: string };
// 	combat: string;
// 	intelligence: string;
// 	strength: string;
// 	durability: string;
// 	power: string;
// 	speed: string;
// };

// export type HeroComparisonT = {
// 	comparison: [HeroDetailsT, HeroDetailsT];
// };

export type HeroDetailsT = {
	id: string;
	name: string;
	image: { url: string };
	biography?: BiographyI;
	work?: WorkT;
	connections?: ConnectionsT;
	powerstats?: PowerstatsT;
	appearance?: AppearanceI;
};

export type HeroDetailsStateT = {
	loading: boolean;
	details: Partial<HeroDetailsT> | [HeroDetailsT, HeroDetailsT];
	error: string;
};

const initialState = {
	loading: true,
	details: {},
	error: "",
};

const reducer = (state: Partial<HeroDetailsStateT> = initialState, action: ActionT) => {
	switch (action.type) {
		case FETCH_HERO_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_HERO_DETAILS_SUCCESS:
			return {
				loading: false,
				details: action.payload,
				error: "",
			};
		case FETCH_HERO_DETAILS_FAILURE:
			return {
				loading: false,
				details: {},
				error: action.payload,
			};
		case "CLEAR_STATE":
			return initialState;

		default:
			return state;
	}
};

export default reducer;
