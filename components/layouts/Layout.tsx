import { FC, ReactNode, useEffect, useState } from 'react';
import Head from 'next/head'

import { Navbar } from '../ui'

interface Props {
  children?: ReactNode,
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="William Bautista" />
        <meta name="description" content={`Información sobre el Pokémon ${ title }`} />
        <meta name="keywords" content={`${ title }, pokemon, pokedex"`} />
        <meta property="og:title" content={`Información sobre el Pokémon ${ title }`} />
        <meta property="og:description" content={`Está es la información de ${ title }`} />
        <meta property="og:image" content={`${ origin }/images/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        { children }
      </main>
    </>
  )
}
