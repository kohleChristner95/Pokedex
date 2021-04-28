import pokemonArray from './Pokemon.obj.js'

let entry;

// Create a for loop that iterates throught the pokemon-entry class
let pokemonEntry = document.querySelectorAll(".pokemon-entry");

for (let i = 0; i < pokemonEntry.length; i++) {
    pokemonEntry[i].textContent = pokemonArray[i].name
    console.log(pokemonArray[i].name)
}