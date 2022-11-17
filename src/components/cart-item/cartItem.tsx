import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/features/cart";
import { useAppDispatch } from "../../redux/store";
import { IMG_NOPHOTO, URL_STORAGE } from "../constans/constans";
import { CardScooter } from "../constans/interfaces";
import styles from "./cartItem.module.scss";

type Props = {
  card: CardScooter;
  id: string;
};

export const CartItem = ({ card, id }: Props) => {
  const dispatch = useAppDispatch();
  console.log(id);

  function removeItem() {
    dispatch(deleteProduct(id));
  }

  function addOrder(){
    
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_main}>
        <div className={styles.container_right_part}>
          <div className={styles.right_part_title}>
            <h6>Наименование</h6>
            <h6>Цена за единицу</h6>
            <h6>Колличество</h6>
          </div>
          <div className={styles.right_part_specification}>
            <span>{card.title}</span>
            <span>{card.stockPrice ? card.stockPrice : card.price}</span>
            <span></span>
          </div>
        </div>

        <div className={styles.container_left_part}>
          <button onClick={removeItem} className={styles.btn_remove}>
            <AiFillCloseSquare className={styles.remove_icon} />
          </button>
          <img
            className={styles.img}
            src={`${URL_STORAGE}${
              card.images
                ? card.images[0] + "?alt=media"
                : IMG_NOPHOTO + "?alt=media"
            }`}
            alt=""
          />
        </div>
        <hr />
        <div className={styles.container_btn}>
          <Link to={"/"}><button>Продолжить покупки</button></Link>
          <button onClick={addOrder}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};
