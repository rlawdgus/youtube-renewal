import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Youtube</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="" href="/logo734.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel='stylesheet' href="/reset.css" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
