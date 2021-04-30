import pokemonArray from './Pokemon.obj.js'

const text = document.querySelector('.text')
const picture = document.querySelector('#picture');
const pictureBackdrop = document.querySelector('.smaller-dark-square');
const pokemonEntry = document.querySelectorAll(".pokemon-entry");
const clear = document.getElementById('clear');

clear.style.cursor = "pointer";

// Create a for loop that iterates through the pokemon-entry class
for (let i = 0; i < pokemonEntry.length; i++) {
    pokemonEntry[i].style.cursor = "pointer";
    pokemonEntry[i].textContent = [i + 1] + " " + pokemonArray[i].name
    pokemonEntry[i].addEventListener('click', function() {
        let img = document.createElement("img");
        let src = document.getElementById("picture");
        img.src = "Bulbasaur.png";
        src.appendChild(img);

        text.textContent = pokemonArray[i].name;
    })
}

clear.addEventListener('click', clearText => {
    text.textContent = '';
    picture.textContent = '';
})