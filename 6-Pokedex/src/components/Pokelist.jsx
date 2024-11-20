import { useEffect, useState } from "react";
import { PokeCard } from "./Pokecard";
import "./Pokelist.css"

export function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);
  const getAllpokemon = async () => {
    const respuesta = await fetch(
      "https://pokeapi.co./api/v2/pokemon?limit=1025&offset=0"
    );
    const data = await respuesta.json();

    function createPokeObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokeObject(data.results);
  };

  useEffect(() => {
    getAllpokemon();
  }, []);
  return (
    <div className="app-container">
      <div className="poke-container">
        <div className="all-container">
          {allPokemons.map((pokemonStatus) => (
            <PokeCard
              key={pokemonStatus.id}
              id={pokemonStatus.id.toString().padStart(3, "0")}
              name={pokemonStatus.name}
              image={
                pokemonStatus.sprites.other["official-artwork"].front_default
              }
              type={pokemonStatus.types[0].type.name}
              weight={pokemonStatus.weight}
              height={pokemonStatus.height}
              stats={pokemonStatus.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStatus.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
