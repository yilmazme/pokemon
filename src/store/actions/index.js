//Bu sabitler string değerlerini tekrar tekrar yazmamak için
export const GET_ALL = "GET_ALL";
export const ERROR = "ERROR";
export const CATCH = "CATCH";
export const RELEASE = "RELEASE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "NOT_FAVORITE";

export const getPokemons = (val) => {
  return {
    type: GET_ALL,
    payload: val,
  };
};

export const handleErrror = (val) => {
  return {
    type: ERROR,
    payload: val,
  };
};


export const catchPokemon = (val) => {
  return {
    type: CATCH,
    payload:val
  };
};

export const releasePokemon = (val) => {
  return {
    type: RELEASE,
    payload:val
  };
};
export const addFavorite = (val) => {
  return {
    type: ADD_FAVORITE,
    payload:val
  };
};

export const removeFavorite = (val) => {
  return {
    type: REMOVE_FAVORITE,
    payload:val
  };
};

