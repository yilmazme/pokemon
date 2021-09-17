import React, { useEffect } from "react";
import { getPokemons,handleErrror} from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "../styles/Pokemons.module.css";

export default function Pokemons() {
  const pokemons = useSelector((state) => state.pokemonsReducer.pokemons);
  const error = useSelector((state) => state.pokemonsReducer.error);
  const dispatch = useDispatch();


  //  const fetchData = async ()=>{
  //   let pokArray = []
  //   let res1 = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  //   let array1 = res1.data.results
  //   array1.forEach((element) => {
  //    axios.get(element.url).then(res=>pokArray.push(res.data)) 
  //   });
  //   return pokArray
  // }
  // useEffect(async()=>{
  //     let res = await fetchData()
  //     await dispatch(getPokemons(res))
  //     console.log(res)
 
  // },[])


  useEffect(() => {
    let pokemonsArray = []
   
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res1) => res1.data.results.forEach((el)=>{
        axios.get(el.url)
        .then((res2)=>{
          pokemonsArray.push(res2.data)
          //dispatch(getPokemons(res2.data))
        })  
      })
      )
      .then(dispatch(getPokemons(pokemonsArray)))
      .catch((error) => dispatch(handleErrror(error.message)));
   }, [dispatch]);

  console.log("stored error:", error);

  return (
    <div style={{ textAlign: "center", color: "black" }}>
      <h2>Pokemons:</h2>
      {pokemons.length===0? <p>{error}</p>:
       <div className={style.cardsContainer}>
            {
               pokemons.map((pok, ind) => {
                return (
                  <div key={ind} className={style.card}>
                    <img src={pok.sprites["front_default"]} alt="sssss"/>
                    <p>{pok.species.name}</p>
                  </div>
                );
              })
            }
       </div>
       }
    </div>
  );
}
