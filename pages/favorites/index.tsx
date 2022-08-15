import { useState, useEffect } from 'react';
import { NextPage } from 'next';

import { localFavorites } from '../../utils';
import { Layout } from '../../components/layouts/Layout';
import { NoFavorites } from '../../components/ui';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons( localFavorites.getFavorites() )
  }, [])

  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : <FavoritePokemons pokemons={ favoritePokemons } />
      }
    </Layout>
  )
}

export default FavoritesPage
