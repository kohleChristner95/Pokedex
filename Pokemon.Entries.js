import pokemonArray from './Pokemon.obj.js'

let entry;

for (let index = 0; index < pokemonArray.length; index++) {
    entry = index + 1
    console.log(entry);
    console.log(document.getElementsById('pokemon-entry').textContent);
    document.getElementsById('pokemon-entry').textContent = entry
}