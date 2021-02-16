import type { AppProps } from "next/app";
import Head from "next/head";
import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux";
import createSagaMiddleware from "redux-saga";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer, { rootSaga } from "../store";

import Header from "../components/header/Header";
import Dialog from "../components/dialog/Dialog";
import Drawer from "../components/drawer/Drawer";

import "../public/reset.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== "production") {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const makeStore: MakeStore<{}> = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const store = createStore(
        rootReducer,
        {},
        bindMiddleware([...middlewares])
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

const YoutubeRenewal = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Youtube</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="" href="/logo734.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Header name={"YouTube"} logo={"logo734.png"} />
            <Component {...pageProps} />
            <Dialog />
            <Drawer />
        </>
    );
};

export default createWrapper<{}>(makeStore, { debug: true }).withRedux(
    YoutubeRenewal
);
