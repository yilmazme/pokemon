import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemonsReducer";

const allReducers = combineReducers({
  // toggleShowReducer: toggleShowReducer,
  pokemonsReducer: pokemonsReducer
});

export default allReducers;
