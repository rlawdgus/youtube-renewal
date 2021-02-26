import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryDrawer from "../components/list/CategoryDrawer";
import CategorySwiper from "../components/list/CategorySwiper";
import RecentlyVideos from "../components/list/RecentlyVideos";

import { categoryItem } from "../lib/interfaces";
import { categoryItems } from "../lib/category";

import { getRecentlyVideos } from "../api/youtube";

import useWindowSize, { Window } from "../hooks/useWindowSize";

import { storeVideo } from "../store/videos";

const Index: NextPage<any> = ({ initCategoryIndex, data }) => {
    const dispatch = useDispatch();

    const videos = useSelector((state: any) => state.videos.videos);

    const [category, setCategory] = useState<categoryItem>(
        categoryItems[initCategoryIndex]
    );
    const [categoryVideos, setCategoryVideos] = useState<any[]>(
        data.items.filter(
            (item: any) =>
                item.snippet.categoryId === categoryItems[initCategoryIndex].id
        )
    );

    useEffect(() => {
        dispatch(storeVideo(data.items));
    }, []);

    useEffect(
        () =>
            setCategoryVideos(
                data.items.filter(
                    (item: any) => item.snippet.categoryId === category.id
                )
            ),
        [category]
    );

    let windowSize: Window;

    if (typeof window !== "undefined") {
        windowSize = useWindowSize();
    }

    return (
        <>
            {console.log(windowSize)}
            <CategoryDrawer category={category} setCategory={setCategory} />
            <CategorySwiper videos={categoryVideos} />
            <RecentlyVideos videos={data.items} />
        </>
    );
};

Index.getInitialProps = async () => {
    const initCategoryIndex: number = Math.floor(
        Math.random() * categoryItems.length
    );

    const response = await getRecentlyVideos();
    const { data } = response;

    return { initCategoryIndex, data };
};

export default Index;
