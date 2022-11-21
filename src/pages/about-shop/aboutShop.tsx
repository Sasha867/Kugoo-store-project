import { useState } from "react";
import { CgPlayButtonO } from "react-icons/cg";
import { VideoAboutShop } from "../../components/video-about-shop/videoAboutShop";
import styles from "./aboutShop.module.scss";

export const AboutShop = () => {
  // interface isVideoShop {
  //   isVideo: boolean;
  // }
  // type ee = {
  //   toggle(): boolean;
  // };
  const [isVideo, setIsVideo] = useState(false);

  function toggle(): any {
    setIsVideo((prev) => !prev);
  }

  return (
    <>
      <div className={styles.about_shop_introduction}>
        <div className={`${styles.about_shop_info} margin_left`}>
          <h3 className={styles.title}>
            Kugoo-Russia - Первый официальный дилер Kugoo Kirin в России
          </h3>
          <div className={styles.about_shop_statistics}>
            <span className={styles.statistics}>Работаем с 2017 года</span>
            <span className={styles.statistics}>Специалистов в штате 35</span>
            <span className={styles.statistics}>
              Клиентов по России и странам СНГ 2000
            </span>
          </div>
          {isVideo && <VideoAboutShop toggle={toggle} />}
        </div>
        <div className={`${styles.wrapper_video_block} margin_right`}>
          <CgPlayButtonO onClick={toggle} className={styles.video_icon} />
          <span className={styles.video_block_title}>
            Смотреть видео о компании
          </span>
        </div>
      </div>
    </>
  );
};
