import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";

import { initVideo } from "../store/video";

import { getRecentlyVideos } from "../api/youtube";

import useInput from "../hooks/useInput";

import RecentlySwiper from "../components/swiper/RecentlySwiper";
import InputBox from "../components/input/InputBox";
import VideoList from "../components/list/VideoList";
import { useEffect } from "react";

const Index: NextPage<any> = ({ data }) => {
    const videoList = useSelector((state: any) => state.video);
    const dispatch = useDispatch();
    const [search, onChangeSearch] = useInput("");

    useEffect(() => {
        dispatch(initVideo(data.items));
    }, []);

    return (
        <>
            {console.log(videoList)}
            <section className="genre">
                <RecentlySwiper recentlyVideos={data.items} />

                <InputBox
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={"검색"}
                />
            </section>
            <main>
                <VideoList videoList={data.items} />
            </main>
        </>
    );
};

Index.getInitialProps = async () => {
    const response = await getRecentlyVideos();
    const { data } = response;

    return { data };
};

export default Index;
