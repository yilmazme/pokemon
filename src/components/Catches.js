import React from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function Catches() {
    const catches = useSelector((state) => state.pokemonsReducer.catches);


    return (
        <div>
            Hola
            {
                catches.map((el)=>{
                    return<div key={el.id}>{el.name}</div>
                })
            }
        </div>
    )
}
