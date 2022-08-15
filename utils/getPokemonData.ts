import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonData = async ( nameOrId: string ) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`)
  const { id, name, sprites } = data

  return {
    id,
    name,
    sprites
  }
}
