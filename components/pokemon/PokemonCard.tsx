import { Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

export interface IPokemonCardProps{
    pokemon: SmallPokemon;
}

export const PokemonCard:React.FC<IPokemonCardProps> = (props):JSX.Element => {
    const {pokemon}= props;
    const router= useRouter();

    const onCLick=()=>{
        router.push(`/pokemon/${pokemon?.id}`)
    }
  return (
    <Card isHoverable isPressable onClick={onCLick}>
        <Card.Body css={{p:2}}>
            <Card.Image alt={pokemon?.name} height={140} src={pokemon?.img} width="100%" />
        </Card.Body>
        <Card.Footer>
            <Row align='center' justify='space-between'>
                <Text weight="bold">{pokemon?.id}</Text>
                <Text transform='capitalize' weight="bold">{pokemon?.name}</Text>
            </Row>
        </Card.Footer>
  </Card>
  )
}
