// pages
const main = document.querySelector("#main");
const page2 = document.querySelector("#generatepokemon");
const page3 = document.querySelector("#savedpokemon");

// elements
let pokemonGenerator = document.querySelector("#letsgo");
let yourPokemon = document.querySelector("#yourpokemon");
let again = document.querySelector("#again");
let save = document.querySelector("#save");
let listEl = document.querySelector("#list");

// Pushed Pokemon
var pushedPokemon = [];

// hide pages until it is called
page2.style.display = 'none';
page3.style.display = 'none';

//click event for the letsgo button that displays random pokemon from the list
pokemonGenerator.addEventListener('click', function(){
    main.style.display = 'none';
    page2.style.display = 'flex';

    generaterandomPokemon();
});


// generate random pokemon
function generaterandomPokemon(){ 
    const pokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
   
    init();

    pushedPokemon.push(
        {Pokemon: pokemon}
    );

    // store randomly picked pokemon into the localstorage
    localStorage.setItem("Pokemon", JSON.stringify(pushedPokemon));

    // Display randomly picked pokemon to the page.
    yourPokemon.textContent = pokemon;
}

// pokemon list
const pokemonList =[
    'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon',
    'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod',
    'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto',
    'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok',
    'Pikachu', 'Raichu'
];

save.addEventListener('click', saveButton)

function saveButton(){
    page2.style.display = 'none';
    page3.style.display = 'flex';
    for(var i = 0; i < pushedPokemon.length; i++){
        var hello = pushedPokemon[i].Pokemon; // brings user initial
        var li = document.createElement('li');

        li.innerHTML = hello;
        listEl.appendChild(li);
    }
}

function init(){
    var pokemonStorage = JSON.parse(localStorage.getItem("Pokemon"));

    
    if (pokemonStorage !== null){
        pushedPokemon = pokemonStorage;
    }
}

//below add a function to clear button 
document.querySelector('#clearbutton').addEventListener('click', () => {
    localStorage.clear();
    pushedItem = [];
    listEl.innerHTML = '';
})

//BELOW A FUNCTION TO BACK BUTTON
document.querySelector('#goback').addEventListener('click', () => {
    location.reload();
})

document.querySelector('#again').addEventListener('click', () => {
    yourPokemon.innerHTML = '';
    location.reload();
    localStorage.clear();
})