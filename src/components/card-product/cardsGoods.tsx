import styles from "./cardsGoods.module.scss";

export const scooterCard = {
  name: "Kugoo Kirin M4",
};

export const cardsGoods = () => {

  

  return (
    <>
    <div className={styles.cards_scooter}>
      <div className={styles.cards_top}>
        <span className={styles.cards_buttom_hit}>Хит</span>
        <button className={styles.buttom_balance_left}>
          <img src="./img/left_balance.svg" alt="" />
        </button>
        <div className={styles.cards_arrow_left}>
          <button>
            <img src="../img/arrow_lest.svg" alt="" />
          </button>
        </div>
        <div className={styles.cards_arrow_right}>
          <button>
            <img src="./img/arrow_right.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.cards_bottom}>
        <h3>Kugoo Kirin M4</h3>
        <div className={styles.cards_specification_main}>
          <div className={`${styles.cards_specification} ${styles.icon_accumulator}`}>
            <span>2000 mAh</span>
          </div>
          <div className={`${styles.cards_specification} ${styles.icon_power}`}>
            <span>1,2л.с.</span>
          </div>
          <div className={`${styles.cards_specification} ${styles.icon_speedometer}`}>
            <span>60км/ч</span>
          </div>
          <div className={`${styles.cards_specification} ${styles.icon_timer}`}>
            <span>5 часов</span>
          </div>
        </div>
        <div className={styles.cards_price_main}>
          <div className={styles.cards_price}>
            <span className={styles.cards_big_price}>39 900</span>
            <span className={styles.cards_small_price}>29 900</span>
          </div>
          <div className={styles.cards_items}>
            <a href="#">
              <img src="./img/shopping-cart-2 1.svg" alt="" />
            </a>
            <a href="#">
              <img src="./img/hart.svg" alt="" />
            </a>
          </div>
        </div>
        <button className={styles.cards_buy}>Купить в 1 клик</button>
      </div>
    </div>
    </>
  );
};
