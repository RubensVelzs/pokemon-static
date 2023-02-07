  import {GetStaticProps, NextPage } from 'next';
  import {Layout} from '../components/layouts';
  import { pokeApi } from '../api';
  import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonGrid } from '../components/pokemon';

  export interface IPokemonProps{
    pokemons: SmallPokemon[];
  }

  const HomePage: NextPage<IPokemonProps> = (props) => {
    
    const {pokemons}= props;

    return (
      <Layout title="Listado de Pokemons">
        <PokemonGrid  pokemons={pokemons} />
      </Layout>
    )
  }


  /**
   * Es una funcion que se ejecuta del lado del servidor y en el build time solo se ejecuta una vez
   * Cuando estamos en desarollo, se ejecuta en cada ejecución.
   * ¡Esto solo se ejecuta en las pages!
   * 
   * Aqui podemos hacer peticiones http, file system, peticiones asincronas entre otras cosas
   * 
   * Nada de lo que se ejecute aqui llega al cliente, exceptuando las "props"
   */
  export const getStaticProps: GetStaticProps = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>("pokemon?limit=151");

    const pokemons : SmallPokemon[] = data?.results.map((pokemon, i)=>({
      ...pokemon,
      id: i+1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
    }));

    return {
      props: {
        pokemons
      }
    }
  }
  export default HomePage;