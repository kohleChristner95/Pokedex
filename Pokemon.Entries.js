import pokemonArray from './Pokemon.obj.js'

const text = document.querySelector('.text')
const picture = document.querySelector('#picture');
const pictureBackdrop = document.querySelector('.smaller-dark-square');
// const pokemonEntry = document.querySelectorAll(".pokemon-entry");
const pokemonEntryDiv = document.createElement('div');
pokemonEntryDiv.className = "pokemon-entry";
const innerScroll = document.querySelector('.Inner');
innerScroll.appendChild(pokemonEntryDiv)
console.log(innerScroll)
const clear = document.getElementById('clear');
// console.log(innerScroll, pokemonEntry)

// console.log(document.body)

clear.style.cursor = "pointer";
const clearText = function () {
    text.textContent = '';
    picture.textContent = '';
}

// Create a for loop that iterates through the pokemon-entry class
// for (let i = 0; i < pokemonEntry.length; i++) {
//     pokemonEntry[i].style.cursor = "pointer";
//     pokemonEntry[i].textContent = [i + 1] + " " + pokemonArray[i].name // Lists the number and the pokemon name
//     pokemonEntry[i].addEventListener('click', function() {
//         let initializePictureText = function () {
//             let img = document.createElement("img");
//             let src = document.getElementById("picture");
//             img.src = pokemonArray[i].pic;
//             src.appendChild(img);
//             text.textContent = pokemonArray[i].name;
//         }
//         if (picture.textContent !== 'undefined' && text.textContent !== 'undefined') {
//             clearText();
//             initializePictureText();
//         }
//     })
// }

clear.addEventListener('click', clearText)
