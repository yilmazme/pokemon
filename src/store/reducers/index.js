import {combineReducers} from "redux";
import counterReducer from "./counter";
import toggleShowReducer from "./toggleShow";


 const allReducers = combineReducers({
    counter:counterReducer,
    isShow: toggleShowReducer,
})

export default allReducers;