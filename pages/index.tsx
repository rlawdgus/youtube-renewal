import { NextPage } from "next";
import { useState } from "react";

import CategoryDrawer from "../components/list/CategoryDrawer";
import Card from "../components/card/Card";
import CardSkeleton from '../components/card/CardSkeleton'

import { categoryListIndex } from "../lib/category";

import { getRecentlyVideos } from "../api/youtube";

const Index: NextPage<any> = ({ initCategory, data }) => {
    const [category, setCategory] = useState<string>(initCategory);

    return (
        <>
            <CategoryDrawer category={category} setCategory={setCategory} />
            <Card thumbnail={data.items[0].snippet.thumbnails.high.url} />
            <CardSkeleton />
        </>
    );
};

Index.getInitialProps = async () => {
    const initCategoryIndex: number = Math.floor(Math.random() * 32);
    const initCategory: string = categoryListIndex[initCategoryIndex].name;

    const response = await getRecentlyVideos();
    const { data } = response;

    return { initCategory, data };
};

export default Index;
