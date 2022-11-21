import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SwiperProduct } from "../../components/swiper-product/swiperProduct";
import { addProduct } from "../../redux/features/cart";
import { getProductUser } from "../../redux/features/userProduct";
import { getUserProduct } from "../../redux/selectors/selectors";
import { useAppDispatch } from "../../redux/store";
import styles from "./product.module.scss";

export const Product = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const userProduct = useSelector(getUserProduct);

  useEffect(() => {
    if (id) {
      dispatch(getProductUser(id));
    }
  }, [dispatch, id]);

  function addToCartProduct() {
    if (userProduct) {
      //null
      dispatch(addProduct(userProduct));
    }
  }

  return (
    <div className={`${styles.wrapper} margin_right margin_left`}>
      <div className={styles.container_product}>
        <div className={styles.left_bar_img}>
          <SwiperProduct images={userProduct?.images || []} />
        </div>
        <div className={styles.right_bar}>
          <div className={styles.product_info}>
            <h2>{userProduct?.title}</h2>
            <div className={styles.product_spec}>
              <span>battery: {userProduct?.battery}</span>
              <span>Время зарядки:{userProduct?.charger}</span>
              <span>Запас хода: {userProduct?.maxDistance}</span>
              <span>Максимальная скорость:{userProduct?.maxSpeed}</span>
              <span>Мощность мотора:{userProduct?.power}</span>
              <span className={styles.stock_price}>
                Стоимость:
                {userProduct?.price} byn
              </span>
            </div>
          </div>
          <Link to={"/cart"}>
            <button onClick={addToCartProduct} className={styles.button_add}>
              Добавить в корзину
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.description}>
        <span>Описание</span>
        <hr />
        <p>{userProduct?.description}</p>
      </div>
    </div>
  );
};
