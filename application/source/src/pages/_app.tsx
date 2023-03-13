import "@/styles/globals.css";
import type {AppProps} from "next/app";
import createEmotionCache from "@/cache/createEmotionCache";
import {CacheProvider} from "@emotion/react";
import darkTheme from "@/styles/themes/darkTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {EmotionCache} from "@emotion/cache";

const  clientSideEmotionCache = createEmotionCache();
export default function App({Component, emotionCache = clientSideEmotionCache, pageProps}: AppProps & { emotionCache: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
