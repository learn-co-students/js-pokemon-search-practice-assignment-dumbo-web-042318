// POKEMON CLASS /////////////////////////////////////////////////////////////
function Pokemon(obj) {
  this.name = obj.name, this.front = obj.sprites.front, this.back = obj.sprites.back;
}

Pokemon.prototype = {
  constructor: Pokemon,

  renderPokemon: function() {
    return `<div class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div>
          <div>
            <img src="${this.front}" alt="${this.name} front" />
          </div>
        </div>
        <p class="center-text flip-image" data-pokename="${this.name}" data-action="front">flip card</p>
      </div>`
  },
}

Pokemon.findName = function(pokemonName) {
  return new this(pokedex.find((entry) => entry.name === pokemonName))
}

Pokemon.findAll = function() {
  if (input.value === "") {
    return []
  }
  return pokedex.filter((pokedexEntry) => pokedexEntry.name.match(input.value))
}
// DOM FUNCTIONS ///////////////////////////////////////////////////////////////////
function flip(e, pokemon) {
  let img = e.target.parentElement.querySelector("img"), 
    data = e.target.dataset;
  img.src = data.action === "front" ? pokemon.back : pokemon.front
  data.action = data.action === "front" ? "back" : "front"
}


//  PAGE ELEMENTS //////////////////////////////////////////////////////////////////////
const holder = document.getElementById("pokemon-container"),
  input = document.querySelector("input");

//  EVENTS /////////////////////////////////////////////////////////////////////////////
input.addEventListener("keyup",(e) =>{
  holder.innerHTML = ""
  Pokemon.findAll().forEach((p) => {
    holder.innerHTML += Pokemon.findName(p.name).renderPokemon()
  })
  e.preventDefault();
});

holder.addEventListener("click", function(e) {
  if (e.target.textContent === "flip card") {
    flip(e, Pokemon.findName(e.target.dataset.pokename))
  }
});
