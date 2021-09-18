import React, { useEffect } from "react";
import { getPokemons, handleErrror, catchPokemon, releasePokemon, addFavorite, removeFavorite } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "../styles/Pokemons.module.css";

export default function Pokemons() {
  const pokemons = useSelector((state) => state.pokemonsReducer.pokemons);
  const error = useSelector((state) => state.pokemonsReducer.error);
  const catches = useSelector((state) => state.pokemonsReducer.catches);
  const favorites = useSelector((state) => state.pokemonsReducer.favorites);
  const catchesIds = catches.map((ele)=>ele.id).concat(favorites.map((ele)=>ele.id))
  const dispatch = useDispatch();


  const fetchData = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => {
        let results = res.data.results;
        let promisesArray = results.map(result => {
          return axios.get(result.url).then(response => response.data);
        })
        return Promise.all(promisesArray);
      }).then((data) => dispatch(getPokemons(data)))
      .catch(err=>dispatch(handleErrror(err.message)));
  }

  useEffect(() => {
      fetchData()
  }, [])

 

const handleCatch= async(id)=>{
  let catched  = await pokemons.filter((el)=>{
     return el.id === id
  })
  dispatch(catchPokemon(catches.concat(catched)))
}

const handleRelease= async(id)=>{
  let catched  = await catches.filter((el)=>{
    return el.id !== id
  })
  dispatch(releasePokemon(catched))
}

const handleFavoriteRelease= async(id)=>{
  let released  = await favorites.filter((el)=>{
    return el.id !== id
  })
  let catched  = await favorites.filter((el)=>{
    return el.id === id
  })
  dispatch(catchPokemon(catches.concat(catched)))
  dispatch(removeFavorite(released))
}

const handleFavorite= async(id)=>{
  let favorite  = await catches.filter((el)=>{
     return el.id === id
  })
  let released  = await catches.filter((el)=>{
    return el.id !== id
 })
 dispatch(releasePokemon(released))
  dispatch(addFavorite(favorites.concat(favorite)))
}
  console.log("stored error:", error);
console.log(catchesIds)
  return (
    <div className={style.mainContainer}>
      {pokemons.length === 0 ? <p>{error}</p> :
        <div className={style.cardsContainer}>
          {
            pokemons.map((pok, ind) => {
              return (
                <div key={pok.id} className={catchesIds.includes(pok.id)? style.catched:style.card}>
                  <img src={pok.sprites["front_default"]} alt="sssss" />
                  <p>{pok.species.name}</p>
                  <p>{pok.id}</p>
                  <button onClick={()=>handleCatch(pok.id)}>Catch</button>
                </div>
              );
            })
          }
        
        </div>
      }
      <div className={style.chart}>
      <div className={style.catchContainer}>
      {catches && catches.map((el)=>{
            return (
              <div className={style.catchCard} key={el.id}>
                <img src={el.sprites["front_default"]} alt="sssss" />
                
                  <button onClick={()=>handleRelease(el.id)}>Release</button>
                  <button onClick={()=>handleFavorite(el.id)}>Add Favorites</button>
            </div>
            )
          })}
      </div>
      <div className={style.favoriteContainer}>
      {favorites && favorites.map((el)=>{
            return (
              <div className={style.catchCard} key={el.id}>
                <img src={el.sprites["front_default"]} alt="sssss" />
        
                  <button onClick={()=>handleFavoriteRelease(el.id)}>Release</button>
            </div>
            )
          })}
      </div>
      </div>
    </div>
  );
}
