import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMG_NOPHOTO, URL_STORAGE } from "../constans/constans";
import styles from "./cardProduct.module.scss";
import { CardScooter } from "../constans/interfaces";

type Props = {
  specification: CardScooter;
};

export const CardProduct = ({ specification }: Props) => {
  const [isChangeImage, setIsChangeImage] = useState(false);

  const navigate = useNavigate();

  function openUserProduct() {
    navigate(`/product/${specification.id}`);
  }

  function changeCardImage() {
    if (!isChangeImage) {
      return {
        transition: ".3s ease-in-out 0s",
        backgroundImage: `url(${
          specification.images
            ? URL_STORAGE + specification?.images[0] + "?alt=media"
            : URL_STORAGE + IMG_NOPHOTO + "?alt=media"
        })`,
      };
    } else {
      return {
        transition: ".3s ease-in-out 0s",
        backgroundImage: `url(${
          specification?.images
            ? URL_STORAGE + specification?.images[1] + "?alt=media"
            : URL_STORAGE + IMG_NOPHOTO + "?alt=media"
        })`,
      };
    }
  }

  return (
    <>
      <div
        className={styles.card_scooter}
        onMouseEnter={() => setIsChangeImage(true)}
        onMouseLeave={() => setIsChangeImage(false)}
        onClick={openUserProduct}
      >
        <div className={styles.card_top} style={changeCardImage()}>
          {specification.popular && (
            <span className={styles.card_hit}>{specification.popular}</span>
          )}
        </div>

        <div className={styles.card_bottom}>
          <h3>{specification.title}</h3>
          <div className={styles.card_specification_main}>
            {specification.battery && (
              <div
                className={`${styles.card_specification} ${styles.icon_accumulator}`}
              >
                <span>{specification.battery}</span>
              </div>
            )}
            {specification.power && (
              <div
                className={`${styles.card_specification} ${styles.icon_power}`}
              >
                <span>{specification.power}</span>
              </div>
            )}
            {specification.maxSpeed && (
              <div
                className={`${styles.card_specification} ${styles.icon_speedometer}`}
              >
                <span>{specification.maxSpeed}</span>
              </div>
            )}
            {specification.charger && (
              <div
                className={`${styles.card_specification} ${styles.icon_timer}`}
              >
                <span>{specification.charger}</span>
              </div>
            )}
          </div>
          <div className={styles.card_price_main}>
            <div className={styles.card_price}>
              {/* <span className={styles.card_start_price}>
                {specification.price}
                <TbCurrencyRubel />
              </span> */}
              {/* <span className={styles.card_stock_price}>
                {specification.stockPrice}
                <TbCurrencyRubel />
              </span> */}
            </div>
            {/* <div className={styles.card_items}> */}
            {/* <Link to={"/cart"}>
                <img src="./images/shopping-cart.svg" alt="image_cart" />
              </Link> */}

            {/* <img src="./images/hart.svg" alt="" /> */}
            {/* </div> */}
          </div>
          <button className={styles.button_buy}>Узнать больше</button>
        </div>
      </div>
    </>
  );
};
