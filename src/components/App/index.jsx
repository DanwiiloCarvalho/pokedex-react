import './App.css';
import { Card } from '../Card'
import { useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { Modal } from '../Modal';

export function App() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  const [pokemonsState, setPokemonsState] = useState();

  useEffect(() => {
    async function getPokemons() {
      const jsonResult = await fetch(apiUrl).then(response => response.json());
      const pokemons = jsonResult.results;
      const pokemonsDetails = pokemons.map(pokemon => fetch(pokemon.url).then(pokemon => pokemon.json()));
      /* console.log(await Promise.all(pokemonsDetails)); */
      setPokemonsState(await Promise.all(pokemonsDetails));
    }
    getPokemons().catch(error => console.log(error.message));
  }, []);

  return (
    <main className='container'>
      <h1>Pokedex com React</h1>
      <ul className='pokemon-list'>
        {pokemonsState && pokemonsState.map(pokemon => <Card key={pokemon.name} id={pokemon.id} name={pokemon.name} srcImage={pokemon.sprites.front_default} types={pokemon.types}/>)}
      </ul>
      {!pokemonsState && <Loading />}
      <Modal />
    </main>
  )
}