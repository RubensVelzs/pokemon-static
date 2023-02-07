import {  Grid } from '@nextui-org/react';
import { PokemonCard } from '.';
import { SmallPokemon } from '../../interfaces';

export interface IPokemonGridProps{
    pokemons: SmallPokemon[];
}
export const PokemonGrid:React.FC<IPokemonGridProps> = (props):JSX.Element => {
  const {pokemons}= props;
  return (
    <Grid.Container gap={4}>
        {pokemons.map(pokemon=>(
          <Grid justify='center' md={3} key={pokemon?.id} sm={4} xl={1} xs={12}>
            <PokemonCard pokemon={pokemon}  />
          </Grid>
        ))}
      </Grid.Container>
  )
}