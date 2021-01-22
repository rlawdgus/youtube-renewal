import React from "react";

import Card from "../card/Card";
import CardSkeleton from "../card/CardSkeleton";

import { Video } from "../../lib/interfaces";

import styles from "./RecentlySwiper.module.scss";
import classnames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

const cx = classnames.bind(styles);
SwiperCore.use([Navigation]);

interface RecentlySwiperProps {
    recentlyVideos: any[] | undefined;
}

const RecentlySwiper: React.FC<RecentlySwiperProps> = ({ recentlyVideos }) => {
    return (
        <>
            <p className={cx("recently")}>최신동영상</p>
            <Swiper
                navigation
                slidesPerView={5}
                centeredSlides
                loop
                autoHeight
                spaceBetween={-100}
            >
                {recentlyVideos === undefined ? (
                    <>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                    </>
                ) : (
                    recentlyVideos.map((item: any) => {
                        const video: Video = {
                            id: item.id,
                            title: item.snippet.title,
                            thumbnail: item.snippet.thumbnails.standard.url,
                            duration: item.contentDetails.duration,
                            channelId: item.snippet.channelId,
                            channelTitle: item.snippet.channelTitle,
                            viewCount: item.statistics.viewCount,
                            publishedAt: item.snippet.publishedAt,
                        };
                        return (
                            <SwiperSlide key={video.id}>
                                <Card video={video} />
                            </SwiperSlide>
                        );
                    })
                )}
            </Swiper>
        </>
    );
};

export default RecentlySwiper;
