
/*----- constants -----*/
const baseURL = "https://pokeapi.co/api/v2/pokemon";

/*----- app's state (variables) -----*/
let pokemon, pokemonDetail;

/*----- cached element references -----*/
const $ulEl = $('.collection');


/*----- event listeners -----*/
$ulEl.on('click', handleClick);
/*----- functions -----*/
function handleClick(event) {

}

getPokemon();

function getPokemon() {
    $.ajax(baseURL).then(
        function(data){
            console.log(data);
        }, 
        function(error){
            console.log(error);
        });
}


//git push -u origin master at the end