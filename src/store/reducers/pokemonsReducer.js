import { GET_ALL,CATCH, RELEASE,ADD_FAVORITE, REMOVE_FAVORITE, ERROR } from "../actions/index";
import {  } from "../actions/index";

const initialState = {
  pokemons: [],
  error: null,
  catches:[],
  favorites: []
};

export const pokemonsReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL:
      return {...state, pokemons:payload};
    case ERROR:
      return { ...state, error: payload };
    case CATCH:
      return { ...state, catches: payload };
    case RELEASE:
      return { ...state, catches: payload };
    case ADD_FAVORITE:
        return {...state, favorites: payload};
    case REMOVE_FAVORITE:
        return {...state, favorites: payload}
    default:
      return state;
  }
};
