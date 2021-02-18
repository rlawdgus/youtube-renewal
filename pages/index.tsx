import { NextPage } from "next";
import { useState } from "react";

import CategoryDrawer from "../components/list/CategoryDrawer";

import { categoryListIndex } from "../lib/category";

const Index: NextPage<any> = ({ initCategory }) => {
    const [category, setCategory] = useState<string>(initCategory);

    return (
        <>
            <CategoryDrawer category={category} setCategory={setCategory} />
        </>
    );
};

Index.getInitialProps = async () => {
    const initCategoryIndex: number = Math.floor(Math.random() * 32);
    const initCategory: string = categoryListIndex[initCategoryIndex].name;

    return { initCategory };
};

export default Index;
