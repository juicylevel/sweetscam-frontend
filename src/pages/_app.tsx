import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { EmotionCache } from '@emotion/utils';
import { createEmotionCache, theme } from 'material';
import { ScrollToTop } from 'components';
import { Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
    emotionCache: EmotionCache;
};

const MyApp: React.FC<MyAppProps> = (props) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Sweetscam.io</title>
                <meta lang="ru" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
                <ScrollToTop>
                    <Fab color="primary" size="small">
                        <KeyboardArrowUp />
                    </Fab>
                </ScrollToTop>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
