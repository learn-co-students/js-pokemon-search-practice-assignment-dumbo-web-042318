const baseUrl = "http://localhost:3000/pokemons"

class Adapter {

  static getPokemon() {
    return fetch(baseUrl)
    .then(r => r.json())
  }

}
