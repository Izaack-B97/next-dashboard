import { SimplePokemon } from "../interfaces"
import { PokemonCard } from "./PokemonCard"

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 item-center justify-center">
      {
        pokemons.map(pokemon =>
          // <Image
          //   key={pokemon.id}
          //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          //   height={100}
          //   width={100}
          //   alt={pokemon.name}
          // />
          <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
        )
      }
    </div>
  )
}
