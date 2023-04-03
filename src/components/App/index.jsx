import './App.css';
import { Card } from '../Card'
import { useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { Modal } from '../Modal';

export function App() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  const [pokemonsState, setPokemonsState] = useState();
  const [modalOpened, setModalOpened] = useState(false);
  const [modalPokemonName, setModalPokemonName] = useState();
  const [modalPokemonId, setModalPokemonId] = useState();
  const [modalPokemonDescription, setModalPokemonDescription] = useState();

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

  function handleModal(pokemonId) {
    if (!modalOpened) {
      setModalOpened(true);

      //Requisição a API para obter o texto
      async function getPokemonSpecies(id) {
        const urlPokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/' + id;
        const pokemonSpecies = await fetch(urlPokemonSpecies).then(response => response.json());
        
        
        setModalPokemonName(pokemonSpecies.name);
        setModalPokemonId(pokemonSpecies.id);
        setModalPokemonDescription(pokemonSpecies.flavor_text_entries[1].flavor_text);
      }

      getPokemonSpecies(pokemonId);

    } else {
      setModalOpened(false);
      setModalPokemonId('');
      setModalPokemonName('');
      setModalPokemonDescription('');
    }
    document.body.classList.toggle('hidden');
  }

  return (
    <main className='container'>
      <h1>Pokedex com React</h1>
      <ul className='pokemon-list'>
        {pokemonsState && pokemonsState.map(pokemon => <Card key={pokemon.name} id={pokemon.id} name={pokemon.name} srcImage={pokemon.sprites.front_default} types={pokemon.types} handleModal={handleModal}/>)}
      </ul>
      {!pokemonsState && <Loading />}
      {modalOpened && <Modal handleModal={handleModal} id={modalPokemonId} name={modalPokemonName} description={modalPokemonDescription} />}    
    </main>
  )
}