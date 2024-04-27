import './App.css'
import PokemonCard from './Components/PokemonCard';
import pokemonList from './Components/data/PokemonsList';
import {useState} from 'react'

function App() 
{
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // Fonction pour gérer le clic sur le bouton précédent 
  const handlePrevious = () => {
    setPokemonIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  // Fonction pour gérer le clic sur le bouton suivant
  const handleNext = () => {
    setPokemonIndex(prevIndex => (prevIndex < pokemonList.length - 1 ? prevIndex + 1 : prevIndex));
  };

  
  return (
    <>
      <div>
        <PokemonCard index={pokemonIndex} />
        <button onClick={handlePrevious}>Précédent</button>
        <button onClick={handleNext}>Suivant</button>
      </div>
    </>
  )
}

export default App
