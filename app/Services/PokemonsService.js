import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"


class PokemonsService{
    async getAllPokemon(){
        let res = await pokeApi.get()
        // console.log(res.data)
        ProxyState.pokemons = res.data.results
    }

    async getActive(name){
        let res = await pokeApi.get(name)
        console.log(res.data)
        ProxyState.activePokemon = new Pokemon(res.data)
    }
}

export const pokemonsService = new PokemonsService()