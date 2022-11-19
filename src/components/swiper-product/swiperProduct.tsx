import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiperProduct.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { getImageUrl, URL_STORAGE } from "../constans/constans";

type Props = {
  images: string[];
};

export const SwiperProduct = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        // style={{
        //   // "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.wrapper}
      >
        {images.map((el) => (
          <SwiperSlide>
            <img src={getImageUrl(el)} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiper_tabs_wrapper}
      >
        {images.map((el) => (
          <SwiperSlide>
            <img src={getImageUrl(el)} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
