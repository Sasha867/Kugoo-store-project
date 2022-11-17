import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../../components/cart-item/cartItem";
import { getProduct } from "../../redux/selectors/selectors";
import styles from "./shoppingCart.module.scss";

export const ShoppingCart = () => {
  const product = useSelector(getProduct);
  console.log(product);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.tittle}>Моя корзина</h3>
      <hr className={styles.list_trait} />
      {!product.length && (
        <div className={`${styles.info} `}>
          <p className={styles.message}>ваша корзина пуста</p>
          <p className={styles.mesage2}>Добавте товар из каталога</p>
          <Link to={"/catalog"}>
            <button className={styles.button}>Перейти в каталог</button>
          </Link>
        </div>
      )}
      {product.length >= 0 &&
        product.map((el) => (
          <CartItem key={el.product.id} card={el.product} id={el.product.id} />
        ))}
    </div>
  );
};
