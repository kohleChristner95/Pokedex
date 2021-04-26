import pokemonArray from './Pokemon.obj.js'

let entry;

// Create a for loop that iterates throught the pokemon-entry class
let number = document.querySelector(".pokemon-entry");
console.log(number)

for (let i = 0; i < pokemonArray.length; i++) {
    number.textContent = pokemonArray[i].name
    console.log(pokemonArray[i].name, i, pokemonArray[i].moves);
}