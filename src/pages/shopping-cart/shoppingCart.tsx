import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../../components/cart-item/cartItem";
import { openModal } from "../../redux/features/visibleSlice";
import { getProduct, getTotalCartPrice } from "../../redux/selectors/selectors";
import { useAppDispatch } from "../../redux/store";

import styles from "./shoppingCart.module.scss";

export const ShoppingCart = () => {
  const [isOpenFormOrder, setIsOpenFormOrder] = useState(false);
  const cartProduct = useSelector(getProduct);
  const totalPrice = useSelector(getTotalCartPrice);
  console.log(cartProduct);
  const dispatch = useAppDispatch();

  function openFormOrder() {
    setIsOpenFormOrder(!isOpenFormOrder);
  }

  console.log(isOpenFormOrder);

  function signIn() {
    dispatch(openModal());
  }

  useEffect(() => {
    return () => {};
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.cart_tabs}>
        <span className={styles.cart_tittle}>
          корзина
          <span className={styles.cart_screen_counter}>
            {cartProduct.length}
          </span>
        </span>
      </div>
      <hr className={styles.list_trait} />
      {!cartProduct.length && (
        <div className={`${styles.info} `}>
          <p className={styles.message}>ваша корзина пуста</p>
          <p className={styles.mesage2}>Добавте товар из каталога</p>
          <Link to={"/catalog"}>
            <button className={styles.button}>Перейти в каталог</button>
          </Link>
        </div>
      )}

      {!!cartProduct.length && (
        <div className={styles.wrapper_item}>
          {cartProduct.map((el) => (
            <CartItem key={el.product.id} card={el} id={el.product.id} />
          ))}
          <div className={styles.total_price}>
            <span className={styles.total_price_footer}>Общая стоимость: </span>
            <span className={styles.total_price_footer_cost}>
              {totalPrice} byn
            </span>
          </div>
          {!isOpenFormOrder && (
            <div className={styles.container_btn_wrapper}>
              <div>
                <Link to={"/"}>
                  <button className={styles.btn_continue}>
                    Продолжить покупки
                  </button>
                </Link>
              </div>
              <div className={styles.container_btn_right}>
                <button onClick={signIn} className={styles.btn_sign_in}>
                  Войти
                </button>
                <button
                  className={styles.btn_add_order}
                  onClick={openFormOrder}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          )}

          {isOpenFormOrder && (
            <div>
              <form>
                <label></label>
                <input type="text" placeholder="Адрес доставки" />
              </form>
            </div>
          )}
        </div>
      )}
      <hr />
    </div>
  );
};
