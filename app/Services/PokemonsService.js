import { ProxyState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"


class PokemonsService{
    async getAllPokemon(){
        let res = await pokeApi.get()
        // console.log(res.data)
        ProxyState.pokemons = res.data.results
    }
}

export const pokemonsService = new PokemonsService()