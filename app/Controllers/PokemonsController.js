import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";

function _drawAll(){
    const pokemons = ProxyState.pokemons
    let template = ''
    pokemons.forEach(p => template += `<li class="action" onclick = "app.pokemonsController.getActive('${p.name}')">${p.name}</li>`)
    document.getElementById('all-pokemon').innerHTML = template
}

function _drawActive(){
    if(!ProxyState.activePokemon){
        document.getElementById('active-pokemon').innerHTML = '<div class="text-center"><em> No Active Pokemon </em></div>'
        return
    }
    document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
}

export default class PokemonsController{
    constructor(){
    ProxyState.on('pokemons', _drawAll)
    ProxyState.on('activePokemon', _drawActive)

    this.getAllPokemon()
    }

    async getAllPokemon(){
        try {
            await pokemonsService.getAllPokemon();
        } catch (error) {
            console.error('there was an issue accessing the pokemon api')
        }
    }

    async getActive(name){
        try {
            await pokemonsService.getActive(name)
        } catch (error) {
            console.error('there was an issue setting the Pokemon to Active')
        }
    }
}