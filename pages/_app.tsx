import type { AppProps } from "next/app";
import Head from "next/head";

import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'

import '../public/reset.scss'
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Youtube</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="" href="/logo734.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Header name={"YouTube"} logo={"logo734.png"} />
            <Nav />
            <Component {...pageProps} />
        </>
    );
};

export default App;
