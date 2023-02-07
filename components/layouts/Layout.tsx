import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from '../ui';

export interface ILayoutProps{
    /**
     * 
     */
    children: ReactNode;
    /**
     * 
     */
    title?:string;
}

export const Layout:React.FC<ILayoutProps> = (props):JSX.Element => {

    const {children,title} = props;

  return (
   <>
    <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Ruben Velazquez"/>
        <meta name="author" content="Información sobre el pokémon XXXXXXX"/>
        <meta name="keywords" content="XXXXXXX, pokémon, pokedex"/>
    </Head>

    <Navbar/>
    <main style={{padding:"0px 20px"}}>
        {children}
    </main>
   </>
  )
}
