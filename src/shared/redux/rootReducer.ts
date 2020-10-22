import { combineReducers } from "redux";
import heroesReducer from './searchHeroes/searchHeroesReducer'
import loadingReducer from './loadingBar/loadingReducer'

const rootReducer = combineReducers({
    heroes: heroesReducer,
    loader: loadingReducer
});

export default rootReducer;
