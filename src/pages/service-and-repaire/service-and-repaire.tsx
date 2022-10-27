import styles from "./servicesVersion.module.scss";


export const ServiceAndRepaire = () => {
  return (
    <div className={`${styles.wrapper} margin_left`}>
      <div className={styles.service_main}>
        <div className={`${styles.service_info} margin_left`}>
          <h2 className={styles.service_tittle}>
            ремонт и обслуживание товаров kugoo kirin
          </h2>
          <span className={styles.service_more_info}>
            в фирменных сервисных центрах
          </span>
          <button className={styles.service_info_button}>Записаться</button>
        </div>
      </div>
    </div>
  );
};
