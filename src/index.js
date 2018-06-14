document.addEventListener('DOMContentLoaded', init)

function init(){
  Adapter.getPokemon()
    .then(createPokemon)
    .then(renderPokemonCards)
}

function createPokemon(pokemonObjs){
  return pokemonObjs.map((pokemon) => new Pokemon(pokemon))
}

function renderPokemonCards(pokemonObjs){
  const pokemonDivContainer = document.querySelector("#pokemon-container")
  const pokemonCardTemplates = pokemonObjs
    .map((pokemon) => pokemon.render())
    .join('')

  const pokemonCardTemplatesDiv = `<div>${pokemonCardTemplates}</div>`

  pokemonDivContainer.innerHTML = pokemonCardTemplatesDiv
}

document.addEventListener('click', togglePokemonCard)

function togglePokemonCard(e){
  if (e.target.className === "center-text flip-image"){
    let pokemonName = e.target.dataset.pokename
    let pokemonImg = document.querySelector(`img#${pokemonName}-image`)
    let imageContainer = pokemonImg.parentElement
    const flipPokemon = Pokemon.find(pokemonName)
    if (pokemonImg.src.includes("back")) {
      imageContainer.innerHTML = `<img id="${flipPokemon.name}-image" src="${flipPokemon.sprites.front}">`
    } else {
      imageContainer.innerHTML = `<img id="${flipPokemon.name}-image" src="${flipPokemon.sprites.back}">`
    }
  }
}

document.addEventListener('keydown', searchPokemon)

function searchPokemon(e){
  let searchValue = document.querySelector("#pokemon-search-input").value
  let searchArray = Pokemon.search(searchValue)
  renderPokemonCards(searchArray)
}

const Pokemon = (function createPokemonClass(){
    let all = [];
    return class Pokemon {
      constructor({name, sprites}){
        this.name = name
        this.sprites = sprites
        all.push(this)
      }

      render(){
        return `
        <div class="pokemon-container">
            <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
                <h1 class="center-text">${this.name}</h1>
                <div style="width:239px;margin:auto">
                  <div style="width:96px;margin:auto">
                    <img id="${this.name}-image" src="${this.sprites.front}">
                  </div>
                </div>
                <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
            </div>
        </div>
        `
        }

      static find(name){
        return all.find(pokemon => pokemon.name === name)
      }

      static search(text){
        return all.filter(pokemon => pokemon.name.includes(text))
      }
    }
})()
