import { CardScooter } from "../constans/constans";
import styles from "./cardGood.module.scss";

type Props = {
  characteristics: CardScooter;
};

export const CardGood = ({ characteristics }: Props) => {
  console.log(characteristics);

  return (
    <>
      <div className={styles.card_scooter}>
        <div className={styles.card_top}>
          {characteristics.popular && (
            <span className={styles.card_buttom_hit}>
              {characteristics.popular}
            </span>
          )}
          {/* <button className={styles.buttom_balance_left}>
            <img src="./img/left_balance.svg" alt="" />
          </button> */}
          {/* <div className={styles.card_arrow_left}>
            <button>
              <img src="../img/arrow_lest.svg" alt="" />
          //   </button> */}
          {/* // </div> */}
          {/* <div className={styles.card_arrow_right}> */}
          {/* <button> */}
          {/* <img src="./img/arrow_right.svg" alt="" /> */}
          {/* </button> */}
          {/* </div> */}
        </div>
        <div className={styles.card_bottom}>
          <h3>{characteristics.title}</h3>
          <div className={styles.card_specification_main}>
            <div
              className={`${styles.card_specification} ${styles.icon_accumulator}`}
            >
              <span>2000 mAh</span>
            </div>
            <div
              className={`${styles.card_specification} ${styles.icon_power}`}
            >
              <span>1,2л.с.</span>
            </div>
            <div
              className={`${styles.card_specification} ${styles.icon_speedometer}`}
            >
              <span>60км/ч</span>
            </div>
            <div
              className={`${styles.card_specification} ${styles.icon_timer}`}
            >
              <span>5 часов</span>
            </div>
          </div>
          <div className={styles.card_price_main}>
            <div className={styles.card_price}>
              <span className={styles.card_big_price}>
                {characteristics.price}
              </span>
              <span className={styles.card_small_price}>
                {characteristics.stockPrice}
              </span>
            </div>
            <div className={styles.card_items}>
              <a href="#">
                <img src="./img/shopping-cart-2 1.svg" alt="" />
              </a>
              <a href="#">
                <img src="./img/hart.svg" alt="" />
              </a>
            </div>
          </div>
          <button className={styles.card_buy}>Купить в 1 клик</button>
        </div>
      </div>
    </>
  );
};
