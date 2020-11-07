import { combineReducers } from "redux";
import heroesReducer, { SearchHeroesState } from "./searchHeroes/searchHeroesReducer";
import loadingReducer, { LoadingBarState } from "./loadingBar/loadingReducer";
import heroeDetailsReducer, { HeroDetailsStateT } from "./heroeDetails/heroeDetailsReducer";

export interface RootState {
	heroes: SearchHeroesState;
	loader: LoadingBarState;
	heroeDetails: HeroDetailsStateT;
}

const rootReducer = combineReducers({
	heroes: heroesReducer,
	loader: loadingReducer,
	heroeDetails: heroeDetailsReducer,
});

export default rootReducer;
