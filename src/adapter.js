class Adapter {

    static getAll(){
        const baseUrl = 'http://localhost:3000/pokemons'

        return fetch(baseUrl)
            .then(resp => resp.json())
    }

    
}