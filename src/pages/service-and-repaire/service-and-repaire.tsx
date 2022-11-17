import styles from "./service.module.scss";
import { GoLocation } from "react-icons/go";

export const ServiceAndRepaire = () => {
  return (
    <div className={`${styles.wrapper} margin_left`}>
      <div className={styles.container}>
        <div className={`${styles.container_info} margin_left`}>
          <h2 className={styles.container_tittle}>
            ремонт и обслуживание
            <br /> товаров kugoo kirin
          </h2>
          <span className={styles.container_more_info}>
            в фирменных сервисных центрах
          </span>
          <div className={styles.container_bar}>
            <div className={styles.container_location}>
              <span className={styles.container_location_icon}>
                <GoLocation className={styles.location_icon} />
              </span>
              <p>
                Сервисные центры в Москве, <br />
                Санкт-Петербурге и Краснодаре
              </p>
            </div>
            <div className={styles.container_location}>
              <span className={styles.container_location_icon}>
                <GoLocation className={styles.location_icon} />
              </span>
              <p>
                Гарантия 14 дней <br />
                на ремонт
              </p>
            </div>
            <div className={styles.container_location}>
              <span className={styles.container_location_icon}>
                <GoLocation className={styles.location_icon} />
              </span>
              <p>
                Всегда в наличии оригинальные <br />
                запчасти от производителя
              </p>
            </div>
          </div>
          <button className={styles.container_button}>Записаться</button>
        </div>
      </div>
    </div>
  );
};
