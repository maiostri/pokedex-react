import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const PKM_NUMBER = 10;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${PKM_NUMBER}`;

  const [pokeList, setPokeList] = useState([]);

  useEffect(() => fetchPokedex(), []);

  const fetchPokedex = async () => {
    const result = await fetch(url);
    const pokemons = await result.json();
    addPokemons(pokemons.results);
    console.log(pokemons.results);
  };

  const addPokemons = (pokemons) => {
    setPokeList(pokemons);
  };

  return (
    <div className="pokelist">
      {pokeList.map((pokemon) => (
        <PokemonCard url={pokemon.url} />
      ))}
    </div>
  );
};

export default Pokedex;
