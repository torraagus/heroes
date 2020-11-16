import { colors } from "../../../browser/styles/colors";
import { getRandomInt } from "../../utils/utils";
import { START_LOADING_BAR, FULL_LOADING_BAR } from "./loadingTypes";

type ActionT = {
	type: string;
};

export type LoadingBarState = {
	progress: number;
	color: string;
};

const initialState = {
	progress: 0,
	color: colors.primary,
};

const reducer = (state: LoadingBarState = initialState, action: ActionT) => {
	switch (action.type) {
		case START_LOADING_BAR:
			return { ...state, progress: getRandomInt(1, 60) };
		case FULL_LOADING_BAR:
			return { ...state, progress: 100 };
		default:
			return state;
	}
};

export default reducer;
