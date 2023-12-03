import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [poke, setPoke] = useState(pokemons);

  const handleChange = (e) => {
    const filteredPokemon = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setPoke(filteredPokemon);
    if (e.target.value.trim() === "") {
      setPoke(pokemons);
    }
  };

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <form>
        <input onChange={handleChange} />
      </form>
      <div className="cards">
        {poke.map((pokemon) => (
          <CardItem
            key={pokemon.name}
            name={pokemon.name}
            sprite={pokemon.sprite}
          />
        ))}
      </div>
    </div>
  );
}
