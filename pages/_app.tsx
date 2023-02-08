
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import {darkTheme} from '../themes/darkTheme';
import { useEffect } from 'react';
import {hotjar} from 'react-hotjar';


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    hotjar.initialize(3356641,6);
    console.log('entró')
  }, [])
  
  return (
    <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
    </NextUIProvider>
  );
}
