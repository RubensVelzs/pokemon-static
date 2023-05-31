import NextLink from 'next/link';
import {Image,Link,Spacer,Text,useTheme} from '@nextui-org/react';

export const Navbar:React.FC = ():JSX.Element => {

    const {theme}= useTheme();
  return (
    <div style={{
        display: "flex",
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"start",
        padding:"0px 20px",
        backgroundColor:theme?.colors.gray100.value
    }}>
       {/*  <Image alt="App icon" height={70} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" width={70}/> */}

  
          <Link href="/">
         
         
           {/*  <Text color='white' h2>P</Text>
            <Text color='white' h3>okémons</Text> */}
          </Link>

          <Spacer>spacer 5</Spacer>
      
      <Link href="/favorites">
        <Text color='white'>Favoritos</Text>
      </Link>
       

     
    </div>
  )
}
