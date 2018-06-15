class Pokemon {
    constructor(name, front, back, id) {
        //The Pokemon class should be able to be called like: `new Pokemon(/* some arguments */)`
        this.name = name
        this.spriteFront = front 
        this.spriteBack = back
        this.id = id
    }

    render(element) {
        //Instances of Pokemon should have a method called 'render' that returns a string representing an `li` HTML element containing the Pokemon's name and image.
        const div = document.createElement('div')
        div.className = 'pokemon-container'
        div.innerHTML = `<div class='pokemon-frame' id='pokemon-${this.id}'> <h1 class='center-text'> ${this.name}</h1> <div><img src='${this.spriteFront}'></div><p class='center-text flip-image'>flip card</p></div>`
        element.appendChild(div)
        console.log(element);
    }
}