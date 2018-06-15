const db = [] 

document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.querySelector('#pokemon-search-input')
    const container = document.querySelector('#pokemon-container')

    let pokemon;
    let pokemonId;
    let img;

    searchInput.addEventListener('keyup', filterPokemon)
    searchInput.addEventListener('keydown', () => container.innerHTML = '')
    document.addEventListener('click', flipText)

    Adapter.getAll()
        .then( data => db.push(...data))
        // .then( allPokemon => allPokemon.forEach( 
        //     pokemon => {
        //         new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back)
        //     }
        // ))
    
    function filterPokemon(){
        db.filter( pokemon => {
            return pokemon.name.includes(this.value)
        }).forEach( pokemon => {
            new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back, pokemon.order).render(container)
        })
        if (this.value === " ") {
            container.innerHTML = '<p><center>There are no Pokémon here</center></p>'
        }
    }

    function flipText(e) {
        if (e.target.className.includes('flip')) {
            pokemonId = e.target.parentElement.id
            pokemon = db.find( pokemon => pokemon.order == pokemonId.slice(8))
            img = document.querySelector(`#${pokemonId} div img`)
            if (img.src === pokemon.sprites.front) {
                img.src = pokemon.sprites.back
            } else if (img.src  == pokemon.sprites.back) {
                img.src = pokemon.sprites.front
            }
        }
    }
})





    
// 8. Implement a filter functionality for your Pokemon list.
// 9. Implement a flip functionality on each Pokemon.

