import { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { FavoritePokemonsCard } from './';

interface Props {
  pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
      {
        pokemons.map( id => <FavoritePokemonsCard pokemonId={ id } key={ id }/> )
      }
    </Grid.Container>
  )
}
