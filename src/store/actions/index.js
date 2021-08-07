export const increase = (val) =>{
    return {
        type: "INCREASE",
        payload: val
    }
}


export const decrease = (val)=>{
    return {
        type: "DECREASE",
        payload: val
    }
}

export const toggleShow = ()=>{
 return {
        type: "ISSHOW"
    }
}