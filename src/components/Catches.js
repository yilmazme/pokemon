import React from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function Catches() {

    const catches = useSelector((state) => state.pokemonsReducer.catches);

    return (
        <div>
            {
                catches.map((el)=>{
                    return<p key={el.id}>{el.id}</p>
                })
            }
        </div>
    )
}
