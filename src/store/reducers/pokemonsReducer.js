import { GET_ALL,IS_CATCH, ERROR } from "../actions/index";
import {  } from "../actions/index";

const initialState = {
  pokemons: [],
  error: null,
  catches:[]
};

export const pokemonsReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL:
      return {...state, pokemons:payload};
    case ERROR:
      return { ...state, error: payload };
    case IS_CATCH:
      return { ...state, catches: payload };
    default:
      return state;
  }
};
