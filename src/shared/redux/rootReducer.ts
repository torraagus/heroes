import { combineReducers } from "redux";
import heroesReducer from './searchHeroes/searchHeroesReducer'
import loadingReducer from './loadingBar/loadingReducer'
import heroeDetailsReducer from './heroeDetails/heroeDetailsReducer'

const rootReducer = combineReducers({
    heroes: heroesReducer,
    loader: loadingReducer,
    heroeDetails: heroeDetailsReducer
});

export default rootReducer;
