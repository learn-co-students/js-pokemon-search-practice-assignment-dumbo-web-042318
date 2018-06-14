
document.addEventListener("DOMContentLoaded", function() {

  // function pokemonData() {
  //   fetch("http://localhost:3000/pokemons")
  //     .then(r => r.json())
  //     .then(console.log)
  //   }

  pokemonData()


  // const pokemonData = pokemon.pokemons
  // let pokeObjectsArray = [];
  //
  // let instance;
  //
  // for(const poke of pokemonData){
  //   instance = new Pokemon(poke.name, poke.sprites)
  //
  // }

  // console.log(pokeObjectsArray)

})

function createPokemonCards(){

}

// function searchPokemon(){
//   const searchPokemon = $(`[attribute*=${searchValue}]`)
//   console.log(searchPokemon);
// }

class Pokemon {
  constructor(name, sprites){
    this.name = name
    this.sprites = sprites
  }

  render(){
    return `<li><h1>${this.name}<h1><img src="${this.sprites.front}"</li>`
  }
}
