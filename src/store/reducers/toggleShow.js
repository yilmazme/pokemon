import { IS_SHOW } from "../actions";

export const toggleShowReducer = (state = false, action) => {
  switch (action.type) {
    case IS_SHOW:
      return !state;
    default:
      return state;
  }
};
