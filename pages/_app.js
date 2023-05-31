import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
            <Analytics />
        </>
    );
}

export default MyApp;
