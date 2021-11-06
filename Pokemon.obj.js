// import Pokemon from "/Pokemon.cls.js";

// const pokemonArray = [];

// const Bulbasaur = new Pokemon('Bulbasaur', ['Grass'], ['Tackle', 'Vine Whip'], "Bulbasaur.png");
// const Ivysaur = new Pokemon('Ivysaur', ['Grass', 'Poison'], ['Tackle', 'Razor Leaf', 'Leech Seed'], "Ivysaur.png")
// const Venasaur = new Pokemon('Venasaur', ['Grass/Poison'], ['Solar Beam', 'Razor Leaf', 'Synthesis', 'Poison Powder'], "Venasaur.png")
// const Squirtle = new Pokemon('Squirtle', ['Water'], ['Pound', 'Bubble'], "Squirtle.png");
// const Wartortle = new Pokemon('Wartortle', ['Water'], ['Pound', 'Water Gun', 'Bubblebeam'], "Wartortle.png")
// const Blastoise = new Pokemon('Blastoise', ['Water'], ['Surf', 'Skull Bash', 'Hydro Pump', 'Mega Punch'], "Blastoise.png");
// const Charmander = new Pokemon('Charmander', ['Fire'], ['Scratch', 'Ember'], "Charmander.png");
// const Charmeleon = new Pokemon('Charmeleon', ['Fire'], ['Slash', 'Ember', 'Fire Punch'], "Charmeleon.png");
// const Charizard = new Pokemon('Charizard', ['Fire'], ['Dragon Claw', 'Fly', 'Fire Blast', 'Flamethrower'], "Charizard.png");

// pokemonArray.push(Bulbasaur, Ivysaur, Venasaur, Squirtle, Wartortle, Blastoise, Charmander, Charmeleon, Charizard);
// export default pokemonArray;

const getPokemonImg = function(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
        // console.log(response)
        return response.json();
    })
    .then((data) => {
        console.log(data.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default)
        // console.log(data)
    })
}
// getPokemonImg('bulbasaur');

var kantoRegion = [];
for (let i = 1; i <= 151; i++) {
    kantoRegion.push(i);
    // console.log(i)
    // console.log(kantoRegion)
}
for (let i = 0; i <= kantoRegion.length; i++) {
    // getPokemonImg(i)
}

export default kantoRegion;