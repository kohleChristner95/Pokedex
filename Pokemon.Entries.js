import pokemonArray from './Pokemon.obj.js'

let entry;
const text = document.querySelector('.text')
const picture = document.querySelector('.picture');
const pictureBackdrop = document.querySelector('.smaller-dark-square');
const pokemonEntry = document.querySelectorAll(".pokemon-entry");

// Create a for loop that iterates through the pokemon-entry class
for (let i = 0; i < pokemonEntry.length; i++) {
    pokemonEntry[i].textContent = [i + 1] + " " + pokemonArray[i].name
    pokemonEntry[i].addEventListener('click', function() {
        text.textContent = pokemonArray[i].name;
    })
}