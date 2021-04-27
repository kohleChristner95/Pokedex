import Pokemon from "/Pokemon.cls.js";

const pokemonArray = [];

const Bulbasaur = new Pokemon('Bulbasaur', ['Grass'], ['Tackle', 'Vine Whip']);
const Ivysaur = new Pokemon('Ivysaur', ['Grass', 'Poison'], ['Tackle', 'Razor Leaf', 'Leech Seed', ])
const Venasaur = new Pokemon('Venasaur', ['Grass/Poison'], ['Solar Beam', 'Razor Leaf', 'Synthesis', 'Poison Powder'])
const Squirtle = new Pokemon('Squirtle', ['Water'], ['Pound', 'Bubble']);
const Wartortle = new Pokemon('Wartortle', ['Water'], ['Pound', 'Water Gun', 'Bubblebeam'])
const Blastoise = new Pokemon('Blastoise', ['Water'], ['Surf', 'Skull Bash', 'Hydro Pump', 'Mega Punch']);
const Charmander = new Pokemon('Charmander', ['Fire'], ['Scratch', 'Ember']);
const Charmeleon = new Pokemon('Charmeleon', ['Fire'], ['Slash', 'Ember', 'Fire Punch']);
const Charizard = new Pokemon('Charizard', ['Fire'], ['Dragon Claw', 'Fly', 'Fire Blast', 'Flamethrower']);

pokemonArray.push(Bulbasaur, Ivysaur, Venasaur, Squirtle, Wartortle, Blastoise, Charmander, Charmeleon, Charizard)

export default pokemonArray;