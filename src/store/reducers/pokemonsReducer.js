import { GET_ALL } from "../actions/index";
import { ERROR } from "../actions/index";

const initialState = {
  pokemons: [],
  error: null,
};

export const pokemonsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL:
      return { ...state, pokemons: payload };
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
