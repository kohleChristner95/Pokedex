import pokemonArray from './Pokemon.obj.js'

const text = document.querySelector('.text')
const picture = document.querySelector('#picture');
const pictureBackdrop = document.querySelector('.smaller-dark-square');
const pokemonEntry = document.querySelectorAll(".pokemon-entry");
const clear = document.getElementById('clear');

clear.style.cursor = "pointer";
const clearText = function () {
    text.textContent = '';
    picture.textContent = '';
}

// Create a for loop that iterates through the pokemon-entry class
for (let i = 0; i < pokemonEntry.length; i++) {
    pokemonEntry[i].style.cursor = "pointer";
    pokemonEntry[i].textContent = [i + 1] + " " + pokemonArray[i].name
    pokemonEntry[i].addEventListener('click', function() {
        let initializePictureText = function () {
            let img = document.createElement("img");
            let src = document.getElementById("picture");
            img.src = pokemonArray[i].pic;
            src.appendChild(img);
            img.src = pokemonArray[i].pic;
            text.textContent = pokemonArray[i].name;
        }
        if (picture.textContent !== 'undefined' && text.textContent !== 'undefined') {
            clearText();
            initializePictureText();
        }
    })
}

clear.addEventListener('click', clearText)