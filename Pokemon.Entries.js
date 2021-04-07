import pokemonArray from './Pokemon.obj.js'

let entry;

// Create a for loop that iterates throught the pokemon-entry class

let number = document.getElementsByClassName("pokemon-entry");
for (let i = 0; i < number.length; i++) {
    console.log(pokemonArray[i])
}