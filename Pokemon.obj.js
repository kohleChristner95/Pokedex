import Pokemon from "/Pokemon.cls.js";

const pokemonArray = [];

pokemonArray.Bulbasaur = new Pokemon('Bulbasaur', ['Grass'], ['Tackle', 'Vine Whip']);
pokemonArray.Ivysaur = new Pokemon('Ivysaur', ['Grass', 'Poison'], ['Tackle', 'Razor Leaf', 'Leech Seed', ])
pokemonArray.Venasaur = new Pokemon('Venasaur', ['Grass/Poison'], ['Solar Beam', 'Razor Leaf', 'Synthesis', 'Poison Powder'])
pokemonArray.Squirtle = new Pokemon('Squirtle', ['Water'], ['Pound', 'Bubble']);
pokemonArray.Wartortle = new Pokemon('Wartortle', ['Water'], ['Pound', 'Water Gun', 'Bubblebeam'])
pokemonArray.Blastoise = new Pokemon('Blastoise', ['Water'], ['Surf', 'Skull Bash', 'Hydro Pump', 'Mega Punch']);
pokemonArray.Charmander = new Pokemon('Charmander', ['Fire'], ['Scratch', 'Ember']);
pokemonArray.Charmeleon = new Pokemon('Charmeleon', ['Fire'], ['Slash', 'Ember', 'Fire Punch']);
pokemonArray.Charizard = new Pokemon('Charizard', ['Fire'], ['Dragon Claw', 'Fly', 'Fire Blast', 'Flamethrower']);

export default pokemonArray;