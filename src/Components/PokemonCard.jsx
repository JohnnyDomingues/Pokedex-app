function PokemonCard () {

  const pokemon = pokemonList[1];
console.log(pokemon.imgSrc ? true : false);
  return  (

    <figure className="card">
      {pokemon.imgSrc ? <img src= {pokemon.imgSrc} alt={pokemon.name}
      className="card-img"/> : <p>???</p> }
      <figcaption>{pokemon.name}</figcaption>
    </figure>

  )
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    
  },
]

export default PokemonCard 


/** 
 * condition ? exprSiVrai : exprSiFaux;
 * s'il y a une source d'img = condition ? affiche l'img : affiche un paragraphe
 * imgSrc ? <img src= {pokemon.imgSrc} alt={pokemon.name}
      className="card-img"/> : <p>???</p> 
 */