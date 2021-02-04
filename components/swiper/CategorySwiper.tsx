import React from "react";

import Card from "../card/Card";
import CardSkeleton from "../card/CardSkeleton";

import useDialog from "../../hooks/useDialog";

import { Video } from "../../lib/interfaces";
import categoryList from '../../lib/category'

import styles from "./CategorySwiper.module.scss";
import classnames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { ButtonBase } from "@material-ui/core";

const cx = classnames.bind(styles);
SwiperCore.use([Navigation]);

interface CategorySwiperProps {
    videos: any[];
    category: number
}

const CategorySwiper: React.FC<CategorySwiperProps> = ({ videos, category }) => {
    const openDialog = useDialog();
    const testDialog = () => {
        openDialog("test", "test");
    };

    return (
        <section className={cx("category-wrapper")}>
            <ButtonBase className={cx("category")} onClick={testDialog}>
                {videos.length === 0 ? `No filtered in ${categoryList[category].name}` : `${categoryList[category].name}` }
            </ButtonBase>
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
