import pokemonList from "./data/PokemonsList";
import PropTypes from 'prop-types'; // Importer PropTypes

function PokemonCard ({ index }) {  // Recevoir l'index comme prop

  const pokemon = pokemonList[index]; // Utiliser l'index pour accéder au bon Pokémon

// console.log(pokemon.imgSrc ? true : false);

  return  (

    <figure className="card">
      {pokemon.imgSrc ? <img src= {pokemon.imgSrc} alt={pokemon.name}
      className="card-img"/> : <p>???</p> }
      <figcaption>{pokemon.name}</figcaption>
    </figure>

  )
}

PokemonCard.propTypes = { // Définir la validation des props
  index: PropTypes.number.isRequired, // index doit être un nombre et est requis
};

export default PokemonCard 

/** 
 * condition ? exprSiVrai : exprSiFaux;
 * s'il y a une source d'img = condition ? affiche l'img : affiche un paragraphe
 * imgSrc ? <img src= {pokemon.imgSrc} alt={pokemon.name}
      className="card-img"/> : <p>???</p> 
 */