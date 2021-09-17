//Bu sabitler string değerlerini tekrar tekrar yazmamak için
export const GET_ALL = "GET_ALL";
export const IS_SHOW = "IS_SHOW";
export const ERROR = "ERROR";

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


export const toggleShow = () => {
  return {
    type: IS_SHOW,
  };
};