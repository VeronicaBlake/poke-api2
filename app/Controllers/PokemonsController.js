import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";

function _drawAll(){
    const pokemons = ProxyState.pokemons
    let template = ''
    pokemons.forEach(p => template += `<li class="text-dark">${p.name}</li>`)
    document.getElementById('all-pokemon').innerHTML = template
}

export default class PokemonsController{
    constructor(){
    ProxyState.on('pokemons', _drawAll)

    this.getAllPokemon()
    }

    async getAllPokemon(){
        try {
            await pokemonsService.getAllPokemon();
        } catch (error) {
            console.error('there was an issue accessing the pokemon api')
        }
    }
}