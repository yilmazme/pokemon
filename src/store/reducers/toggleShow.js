const toggleShowReducer = (state=false, action)=>{
    switch (action.type) {
        case "ISSHOW":
            return !state;
        default:
            return state;
    }
}

export default toggleShowReducer;