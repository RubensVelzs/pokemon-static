import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import {GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon, PokemonListResponse } from '../../interfaces';

export interface IPokemonPageProps{
 pokemon:Pokemon;
}

const PokemonPage:NextPage<IPokemonPageProps> = (props):JSX.Element => {
  const {pokemon}= props;

  return (
    <Layout title="Algún pokemon">
        <Grid.Container css={{marginTop:"4px"}} gap={2}>
          <Grid xs={12} sm={4}>
            <Card isHoverable css={{padding:"30px"}}>
              <Card.Body>
                <Card.Image 
                alt={pokemon?.name} 
                height={200}
                src={pokemon?.sprites?.other?.dream_world?.front_default || "/no-image.png"}
                width="100%"
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={8}>
            <Card css={{padding:"12px"}}>
              <Card.Header css={{display:"flex", justifyContent:"space-between"}}>
                <Text h1 transform='capitalize'>
                  {pokemon?.name}
                </Text>
                <Button color="gradient" ghost>
                  Guardar en Favoritos
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>
                  Sprites:
                </Text>
                <Container display='flex' direction='row' gap={0}>
                  <Image 
                  alt={pokemon?.name} 
                  height={100} 
                  src={pokemon?.sprites?.front_default} 
                  width={100}/>
                   <Image 
                  alt={pokemon?.name} 
                  height={100} 
                  src={pokemon?.sprites?.back_default} 
                  width={100}/>
                   <Image 
                  alt={pokemon?.name} 
                  height={100} 
                  src={pokemon?.sprites?.front_shiny} 
                  width={100}/>
                   <Image 
                  alt={pokemon?.name} 
                  height={100} 
                  src={pokemon?.sprites?.back_shiny} 
                  width={100}/>
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
    </Layout>
  )
}

//primero se ejecutan los paths
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons=[...Array(151)].map((value, index)=>`${index+1}`);

  return {
    paths: pokemons.map(id=>({
      params:{id}
    })),
    fallback: false
  }
}

/**
 * Despues de que se ejecutan los getStaticPaths (argumentos) se ejecutan las getStaticProps
 */

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {id} = ctx?.params as {id:string};
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`)

  return {
    props: {
      pokemon:data,
    }
  }
}



export default PokemonPage;