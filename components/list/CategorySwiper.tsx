import React from "react";

import Card from "../card/Card";
import CardSkeleton from "../card/CardSkeleton";

import { Video } from "../../lib/interfaces";

import styles from "./CategorySwiper.module.scss";
import classnames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

const cx = classnames.bind(styles);
SwiperCore.use([Navigation]);

interface CategorySwiperProps {
    videos: any[];
}

const CategorySwiper: React.FC<CategorySwiperProps> = ({ videos }) => {
    return (
        <section className={cx("category-swiper")}>
            <Swiper
                navigation
                slidesPerView={5}
                centeredSlides
                loop
                autoHeight
                spaceBetween={-100}
            >
                {videos.length === 0 ? (
                    <>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                    </>
                ) : (
                    videos.map((item: any) => {
                        const video: Video = {
                            id: item.id,
                            title: item.snippet.title,
                            thumbnail: item.snippet.thumbnails.high.url,
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
        </section>
    );
};

export default CategorySwiper;
