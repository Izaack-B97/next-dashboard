import Image from "next/image";

import { PokemonResponse, SimplePokemon } from "@/app/pokemons/interfaces";

const getPokemons = async ( limit = 20, offset = 0 ) : Promise<SimplePokemon[]> => {
    const data : PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`).then(resp => resp.json());

    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at( -2 )!,
        name: pokemon.name 
    }));

    return pokemons;
};

export default async function PokemonsPage() {
    const pokemons = await getPokemons( 151 ); 
    console.log( pokemons )
    return (
        <div>
            <div className="flex flex-wrap gap-10 item-center justify-center">
                { 
                    pokemons.map(pokemon => 
                        <Image
                            key={ pokemon.id }  
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`}
                            height={100}
                            width={100}
                            alt={ pokemon.name }
                        />
                    )
                }
            </div>
        </div>
    );
}