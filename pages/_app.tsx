
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import {darkTheme} from '../themes/darkTheme';
import { useEffect } from 'react';
import {hotjar} from 'react-hotjar';
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export default function App({ Component, pageProps }: AppProps) {  
  useEffect(()=>{
    hotjar.initialize(publicRuntimeConfig.hotjarId, publicRuntimeConfig.hotjarSv);
  },[])
  return (
    <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
    </NextUIProvider>
  );
}
