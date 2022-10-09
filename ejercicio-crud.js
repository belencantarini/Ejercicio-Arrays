let pokemons = ["Bulbasaur", "Pikachu", "Charmander", "Butterfree", "Pidgey"]

function mostrarPokedex(){
    pokemons.forEach(function(elemento, indice) {
    document.write(indice + " - " + elemento + "<br>"); 
    console.log("Asi quedo tu lista de Pokemons en tu POKEDEX")
    console.log(indice + " - " + elemento);
})}

function agregarPokemon(){
    pokemons.push(prompt("Elegiste agregar un nuevo Pokemon a tu POKEDEX. Al momento, tus pokemon son: " + pokemons.join(" - ") + ". Por favor ingresa el nombre de tu nuevo Pokemon: "));
}

function eliminarPokemon(){
    pokemons.splice(Number(pokemons.indexOf(prompt("Elegiste eliminar a uno de tus Pokemon de tu POKEDEX, por favor elige que Pokemon deseas eliminar: " + pokemons.join(" - ")))),1);
}

function modificarPokemon() {
    let pokemonModificado = Number(pokemons.indexOf(prompt("Elegiste modificar uno de los Pokemons de tu POKEDEX. Por favor elige que Pokemon deseas modificar: " + pokemons.join(" - "))));
        pokemons[pokemonModificado] = prompt("Decidiste modificar a tu pokemon " + pokemons[pokemonModificado] + ". Por favor, elige el nuevo nombre de tu pokemon.");
}

let opcion = Number(prompt("Bienvenidos a la POKEDEX!! Aqui puedes recolectar datos sobre los pokemons que te encuentras en el camino. Tu POKEDEX tiene " + pokemons.length + " pokemons. Ellos son: " + pokemons.join(" - ") + ". Por favor, elige una opcion: (1) Para agregar un nuevo pokemon, (2) Para eliminar un Pokemon, (3) Para modificar uno de los Pokemon, (4) Para mostrar la lista de tu POKEDEX."));

switch (opcion) {
    case 1:
        agregarPokemon();
        document.write("Esta es la nueva lista de Pokemons en tu POKEDEX, luego de haber agregado a un nuevo Pokemon! <br>");
        mostrarPokedex();
    break
    case 2:
        eliminarPokemon();
        document.write("Esta es la nueva lista de Pokemons en tu POKEDEX, luego de haber eliminado a uno de tus Pokemon! <br>");
        mostrarPokedex();
    break
    case 3:
        modificarPokemon();
        document.write("Esta es la nueva lista de Pokemons en tu POKEDEX <br>");
        mostrarPokedex();
    break
    case 4:
        alert("Aqui va tu POKEDEX!")
        mostrarPokedex();
    break
    default:
        document.write("No elegiste ninguna opcion. Igualmente, aqui va tu POKEDEX! <br>")
        mostrarPokedex();
    }

