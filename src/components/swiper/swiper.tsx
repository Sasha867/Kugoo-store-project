import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./swiper.module.scss";

import { Pagination, Navigation, Autoplay } from "swiper";
import { CardScooter } from "../constans/interfaces";
import { CardProduct } from "../card-product/cardProduct";

type Props = {
  collection: CardScooter[];
};

export default function App({ collection }: Props) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={25}
        slidesPerGroup={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {collection.map((el) => (
          <SwiperSlide className={styles.wrapper} key={el.id}>
            <CardProduct specification={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
