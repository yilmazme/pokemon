import React, { useEffect } from "react";
import { getPokemons, handleErrror, catchPokemon, releasePokemon, addFavorite, removeFavorite } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "../styles/Pokemons.module.css";
import pokeball from "../photos/pokeball.png";
import blue from "../photos/blue.png";
import red from "../photos/red.png";
import arrow from "../photos/arrow.png"
import Fade from "react-reveal/Fade";



export default function Pokemons() {
  const pokemons = useSelector((state) => state.pokemonsReducer.pokemons);
  const error = useSelector((state) => state.pokemonsReducer.error);
  const catches = useSelector((state) => state.pokemonsReducer.catches);
  const favorites = useSelector((state) => state.pokemonsReducer.favorites);
  const catchesIds = catches.map((ele) => ele.id).concat(favorites.map((ele) => ele.id))
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
      .catch(err => dispatch(handleErrror(err.message)));
  }

  useEffect(() => {
    fetchData()
  }, [])



  const handleCatch = async (id) => {
    let catched = await pokemons.filter((el) => {
      return el.id === id
    })
    dispatch(catchPokemon(catches.concat(catched)))
  }

  const handleRelease = async (id) => {
    let catched = await catches.filter((el) => {
      return el.id !== id
    })
    dispatch(releasePokemon(catched))
  }

  const handleFavoriteRelease = async (id) => {
    let released = await favorites.filter((el) => {
      return el.id !== id
    })
    let catched = await favorites.filter((el) => {
      return el.id === id
    })
    dispatch(catchPokemon(catches.concat(catched)))
    dispatch(removeFavorite(released))
  }

  const handleFavorite = async (id) => {
    let favorite = await catches.filter((el) => {
      return el.id === id
    })
    let released = await catches.filter((el) => {
      return el.id !== id
    })
    dispatch(releasePokemon(released))
    dispatch(addFavorite(favorites.concat(favorite)))
  }
  console.log("stored error:", error);
  console.log(catchesIds)
  return (
    <div className={style.mainContainer}>
      <div className={style.span}>
        <div className={style.usage}><p>Catch: </p><img className={style.pokeballStatic} src={pokeball} alt="pokeball" /></div>
        <div className={style.usage}><p>Release:</p> <img className={style.arrow} src={arrow} alt="arrow" /></div>
        <div className={style.usage}><p>Add to Favorites: </p><img className={style.red} src={red} alt="red" /></div>
        <div className={style.usage}><p>Remove from Favorites:</p> <img className={style.blue} src={blue} alt="blue" /></div>
        <div className={style.usage}>
        <p className={style.count}>Catches: {catches.length + favorites.length}</p>
        <p className={style.count}>Favorites: {favorites.length}</p>
        </div>
      </div>
      {pokemons.length === 0 ? <p>{error}</p> :
        <div className={style.cardsContainer}>

          {
            pokemons.map((pok, ind) => {
              return (
                <Fade key={pok.id} >
                  <div className={catchesIds.includes(pok.id) ? style.catched : style.card}>
                    <img src={pok.sprites["front_default"]} alt="sssss" />
                    <p>{pok.species.name}</p>
                    <p>{pok.id}</p>
                    <img className={style.pokeball} onClick={() => handleCatch(pok.id)} src={pokeball} alt="pokeballl" />
                  </div>
                </Fade>
              );
            })
          }

        </div>
      }
      <div className={style.chart}>
        <div className={style.catchContainer}>
          
          {catches && catches.map((el) => {
            return (
              <Fade key={el.id} >
                <div className={style.catchCard} key={el.id}>
                <p style={{fontSize:"10px", margin:"0"}}>{el.species.name.toUpperCase()}</p>
                  <img src={el.sprites["front_default"]} alt="sssss" />
                  <div className={style.cardBtns}>
                    <img className={style.arrow} onClick={() => handleRelease(el.id)} src={arrow} alt="arrow" />
                    <img className={style.red} onClick={() => handleFavorite(el.id)} src={red} alt="red" />
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>
        <div className={style.favoriteContainer}>
          {favorites && favorites.map((el) => {
            return (
              <Fade key={el.id} >
                <div className={style.catchCard} key={el.id}>
                <p style={{fontSize:"10px",margin:"0"}}>{el.species.name.toUpperCase()}</p>
                  <img src={el.sprites["front_default"]} alt="sssss" />
                  <div className={style.cardBtns}>
                    <img className={style.blue} onClick={() => handleFavoriteRelease(el.id)} src={blue} alt="blue" />
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>
      </div>
    </div>
  );
}
