import { NextPage } from "next";

import { getRecentlyVideos } from "../api/youtube";

import useInput from "../hooks/useInput";

import RecentlySwiper from "../components/swiper/RecentlySwiper";
import InputBox from "../components/input/InputBox";
import VideoList from "../components/list/VideoList";

const Index: NextPage<any> = ({ data }) => {
    console.log(data);
    const [search, onChangeSearch] = useInput("");

    return (
        <>
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
