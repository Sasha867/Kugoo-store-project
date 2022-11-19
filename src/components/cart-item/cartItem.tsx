import { AiFillCloseSquare } from "react-icons/ai";
import {
  addProduct,
  CartObject,
  decreaseAmount,
  deleteProduct,
} from "../../redux/features/cart";
import { useAppDispatch } from "../../redux/store";
import { IMG_NOPHOTO, URL_STORAGE } from "../constans/constans";
import { FcPlus } from "react-icons/fc";
import { ImMinus } from "react-icons/im";
import styles from "./cartItem.module.scss";
import { useNavigate } from "react-router-dom";
import { getProductUser } from "../../redux/features/userProduct";

type Props = {
  card: CartObject;
  id: string;
};

export const CartItem = ({ card, id }: Props) => {
  const dispatch = useAppDispatch();
  console.log(id);

  function removeItem() {
    dispatch(deleteProduct(id));
  }

  function increaseAmount() {
    dispatch(addProduct(card.product));
  }

  function cartdecreaseAmount() {
    dispatch(decreaseAmount(card.product));
  }

  const navigate = useNavigate();

  function addOrder() {
    // dispatch(addOrder())
  }

  function showProduct() {
    navigate(`/product/${card.product.id}`);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_main}>
        <div className={styles.container_left_part}>
          <button onClick={removeItem} className={styles.btn_remove}>
            <AiFillCloseSquare className={styles.remove_icon} />
          </button>
          <img
            className={styles.img}
            src={`${URL_STORAGE}${
              card.product.images
                ? card.product.images[0] + "?alt=media"
                : IMG_NOPHOTO + "?alt=media"
            }`}
            alt=""
          />
        </div>
        <div className={styles.container_right_part}>
          <div className={styles.right_part_title}>
            <span>Товар</span>
            <span>Стоимость</span>
            <span>Колличество</span>
          </div>
          <div className={styles.right_part_specification}>
            <span
              onClick={showProduct}
              className={styles.right_part_product_title}
            >
              {card.product.title}
            </span>
            <span className={styles.right_part_product_price}>
              {card.product.stockPrice
                ? card.product.stockPrice
                : card.product.price}{" "}
              byn
            </span>
            <div className={styles.counter_wrapper}>
              <div className={styles.counter}>
                <button className={styles.btn_plus} onClick={increaseAmount}>
                  <FcPlus />
                </button>
                <span className={styles.count}>{card.count}</span>
                <button
                  className={styles.btn_minus}
                  onClick={cartdecreaseAmount}
                >
                  <ImMinus style={{ color: "white" }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <hr /> */}
        {/* <div className={styles.container_btn}>
          <Link to={"/"}><button>Продолжить покупки</button></Link>
          <button onClick={addOrder}>Оформить заказ</button>
        </div> */}
      </div>
    </div>
  );
};
