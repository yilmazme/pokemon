import { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { toggleShow } from "../store/actions"

export default function Fetch(){

    const isShow  = useSelector(state=>state.isShow);
    const dispatch = useDispatch();

    useEffect(()=>{   
            dispatch(toggleShow())
    },[])


    return(
        <div>
            {isShow && <h3>hello from fetch</h3>}
            <button onClick={()=>{dispatch(toggleShow())}}>Toggle from fetch</button>
        </div>
    )
}