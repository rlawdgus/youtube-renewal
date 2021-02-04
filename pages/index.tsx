import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getRecentlyVideos } from "../api/youtube";

import categoryList from "../lib/category";

import CategorySwiper from "../components/swiper/CategorySwiper";
import Videos from "../components/list/Videos";

const Index: NextPage<any> = ({ data }) => {
    const category = useSelector((state: any) => state.category.category);
    const [categoryVideos, setCategoryVideos] = useState<any[]>(
        data.items.filter(
            (item: any) => item.snippet.categoryId === categoryList[category].id
        )
    );

    useEffect(
        () =>
            setCategoryVideos(
                data.items.filter(
                    (item: any) =>
                        item.snippet.categoryId === categoryList[category].id
                )
            ),
        [category]
    );

    return (
        <>
            <CategorySwiper videos={categoryVideos} category={category} />
            <Videos videos={data.items} />
        </>
    );
};

Index.getInitialProps = async () => {
    const response = await getRecentlyVideos();
    const { data } = response;

    return { data };
};

export default Index;
