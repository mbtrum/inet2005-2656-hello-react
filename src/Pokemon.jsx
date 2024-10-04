import { useState, useEffect } from 'react';
import './App.css'
import pokemonLogo from '/pokemon_logo.png'

export default function Pokemon() {
  const [bio, setBio] = useState(null);
  const [inputSearch, setInputSearch] = useState('ditto');
  const [character, setCharacter] = useState('ditto');
  
  useEffect(() => {
    // Fetch data from API
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + character); 

      if(response.ok){
        const data = await response.json();
        if (!ignore) { 
          setBio(data);
        }
      } else {
        setBio(null);
      }
    }

    let ignore = false;
    fetchData();
    return () => {
       ignore = true;
    }
  }, [character]);

  function search(e) {
    e.preventDefault();
    setCharacter(inputSearch);
  }

  return (
    <>
      <img src={pokemonLogo} alt="Pokemon Search" />
      <form>
        <input type="text" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />&nbsp;&nbsp;
        <button type="submit" onClick={search}>Search</button>
      </form>
      { bio ?
        <div>
          <img src={ bio.sprites.front_default } alt={ bio.name }></img>         
          <h1>{ bio.name }</h1>  
          <p>Weight: { bio.weight }lbs</p>
          <p>Height: { bio.height }ft</p>
          <p>Base experience: { bio.base_experience }</p>
          <h2>Abilities:</h2>
          <ul>
            {bio.abilities.map((item) => {
                return <li>{ item.ability.name }</li>
            })}
          </ul>
        </div> :
        <p className="error">Invalid name. Try again.</p>
        }
    </>    
  );
}
