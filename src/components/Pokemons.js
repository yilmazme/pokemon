import React, { useEffect } from "react";
import { getPokemons } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Pokemons() {
  const pokemons = useSelector((state) => state.pokemonsReducer.pokemons);
  const error = useSelector((state) => state.pokemonsReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => dispatch(getPokemons(res.data.results)))
      .catch((err) => console.log("Hurra:", err));
  }, [dispatch]);

  console.log("stored error:", error);

  return (
    <div style={{ textAlign: "center", color: "black" }}>
      <h2>Pokemons:</h2>
      {pokemons &&
        pokemons.map((pok) => {
          return (
            <div key={pok.name}>
              <p>{pok.name}</p>
            </div>
          );
        })}
    </div>
  );
}
