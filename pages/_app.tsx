import type { AppProps } from 'next/app'
import {globalCss, theme} from "../stitches.config";
import 'react-loading-skeleton/dist/skeleton.css';

const globalStyles = globalCss({
  '*': { 
      margin: 0, 
      padding: 0,
      fontSize: theme.fontSizes.md,
      fontFamily: theme.fonts.serif,
      boxSizing: 'border-box'
    },
    body: {
      backgroundColor: theme.colors.slate2,
      color: theme.colors.slate12,
    },
    a: {
      color: 'inherit',
      textDecoration: 'none'
    },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />
}

export default MyApp
