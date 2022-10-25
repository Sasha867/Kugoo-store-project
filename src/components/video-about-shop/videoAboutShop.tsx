import styles from "./videoAboutShop.module.scss";

type Props = {
  toggle(): boolean;
};

export const VideoAboutShop = ({ toggle }: Props) => {
  return (
    <div onClick={toggle} className={styles.video_wrapper}>
      <iframe
        className={styles.video}
        width="700"
        height="445"
        src="https://www.youtube.com/embed/lgSWNrF9xTc"
        title="kugoo-samokat"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
