import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import Card from './components/Card';
import NavBar from './components/Navbar';
import './App.css';


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemonData)
  }

  console.log(pokemonData);
  return (
    <div>
      { 
        loading ? <h1>Menunggu...</h1> : (
          <>
            <NavBar />

            <div className="btn">
              <button onClick={prev}>Kiri</button>
              <button onClick={next}>Kanan</button>
            </div>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
            <div className="btn">
              <button onClick={prev}>Kiri</button>
              <button onClick={next}>Kanan</button>
            </div>

            <footer>
              &copy; { new Date().getFullYear() } Copyright :  <a href="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS </a> <br/>
              Created with Visual Studio Code by <a href="https://www.instagram.com/harcengaming" rel='noreferrer' target='_blank'> Harcen Gaming </a>
            </footer>
          </>
        )
      }
    </div>
  );
}

export default App;
