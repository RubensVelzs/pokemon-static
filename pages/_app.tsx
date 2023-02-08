
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import {darkTheme} from '../themes/darkTheme';
import Script from 'next/script';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
        <Script src="../api/hotjar"/>
        <Component {...pageProps} />
    </NextUIProvider>
  );
}
