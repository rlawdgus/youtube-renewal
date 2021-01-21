import React, { useCallback, useEffect, useState } from "react";

import { getRecentlyVideos } from "../api/youtube";

import useInput from "../hooks/useInput";

import RecentlySwiper from "../components/swiper/RecentlySwiper";
import InputBox from "../components/input/InputBox";

const Index: React.FC = () => {
    const [recentlyVideos, setRecentlyVideos] = useState<any[] | undefined>();

    const callGetRecentlyVideos = useCallback(async () => {
        //loading-on
        try {
            const response = await getRecentlyVideos();

            if (response.status === 200) {
                setRecentlyVideos(response.data.items);
            } else {
                //failure
            }
        } catch (e) {
            console.log(e);
        }
        //loading-off
    }, []);

    useEffect(() => {
        callGetRecentlyVideos(), [];
    });

    const [search, onChangeSearch] = useInput("");

    return (
        <>
            <main className="main">
                <RecentlySwiper recentlyVideos={recentlyVideos} />

                <InputBox
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={"검색"}
                />
            </main>
        </>
    );
};

export default Index;
