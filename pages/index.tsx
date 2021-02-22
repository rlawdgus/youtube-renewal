import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryDrawer from "../components/list/CategoryDrawer";
import CategorySwiper from '../components/list/CategorySwiper'
import RecentlyVideos from "../components/list/RecentlyVideos";

import { categoryList, categoryListIndex } from "../lib/category";

import { getRecentlyVideos } from "../api/youtube";

import { storeVideo } from "../store/videos";

const Index: NextPage<any> = ({ initCategoryIndex, data }) => {
    const dispatch = useDispatch();

    const videos = useSelector((state: any) => state.videos.videos);

    const [category, setCategory] = useState<string>(
        categoryList[categoryListIndex[initCategoryIndex]]
    );
    const [categoryIndex, setCategoryIndex] = useState<number>(
        categoryListIndex[initCategoryIndex]
    );
    const [categoryVideos, setCategoryVideos] = useState<any[]>(
        data.items.filter(
            (item: any) =>
                item.snippet.categoryId ===
                categoryListIndex[initCategoryIndex].toString()
        )
    );

    useEffect(() => {
        dispatch(storeVideo(data.items));
    }, []);

    // useEffect(
    //     () =>
    //         setCategoryVideos(
    //             data.items.filter(
    //                 (item: any) =>
    //                     item.snippet.categoryId ===
    //                     categoryListIndex[categoryIndex].toString()
    //             )
    //         ),
    //     [categoryIndex]
    // );

    return (
        <>
            <CategoryDrawer
                category={category}
                setCategory={setCategory}
                setCategoryIndex={setCategoryIndex}
            />
            <CategorySwiper videos={data.items} />
            {/* <RecentlyVideos videos={data.items} /> */}
        </>
    );
};

Index.getInitialProps = async () => {
    const initCategoryIndex: number = Math.floor(
        Math.random() * categoryListIndex.length
    );

    const response = await getRecentlyVideos();
    const { data } = response;

    return { initCategoryIndex, data };
};

export default Index;
