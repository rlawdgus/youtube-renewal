import { NextPage } from "next";

import { getRecentlyVideos } from "../api/youtube";

import CategorySwiper from "../components/swiper/CategorySwiper";
import Videos from "../components/list/Videos";

const Index: NextPage<any> = ({ data }) => {
    return (
        <>
            <CategorySwiper videos={data.items} />
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
