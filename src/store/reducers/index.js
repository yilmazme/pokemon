import { combineReducers } from "redux";
import { toggleShowReducer } from "./toggleShow";
import { pokemonsReducer } from "./pokemonsReducer";

const allReducers = combineReducers({
  toggleShowReducer: toggleShowReducer,
  pokemonsReducer: pokemonsReducer,
});

export default allReducers;
