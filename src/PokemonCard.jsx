import { useEffect, useState } from "react";

const PokemonCard = (props) => {
  const [pokemonCard, setPokemonCard] = useState({});

  useEffect(() => fetchPokemonCard(), []);

  const fetchPokemonCard = async () => {
    const result = await fetch(props.url);
    const pokemon = await result.json();
    console.log(pokemon);
    addPokemonCard(pokemon);
  };

  const addPokemonCard = (pokemon) => {
    setPokemonCard(pokemon);
  };

  return (
    <div className="pokecard">
      <p>
        {pokemonCard.id}.{pokemonCard.name}
      </p>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonCard.id}.png`}
      />
      {pokemonCard.types.map((elemento) => (
        <li>{elemento.type.name}</li>
      ))}
    </div>
  );
};

export default PokemonCard;
