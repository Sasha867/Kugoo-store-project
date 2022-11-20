import { collection, getDocs, query, where } from "firebase/firestore";
import { format, setDefaultOptions } from "date-fns";
import { ru } from "date-fns/locale";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../../components/cart-item/cartItem";
import { Order } from "../../components/constans/interfaces";
import { db } from "../../firebase/firebase";
import { getUser } from "../../redux/selectors/selectors";
import styles from "./purchaseHistory.module.scss";

export const PurchaseHistory = () => {
  const user = useSelector(getUser);

  const [history, setHistory] = useState<Order[]>([]);

  useEffect(() => {
    const ordersRef = collection(db, "Orders");
    setDefaultOptions({ locale: ru });
    if (user) {
      console.log(user.uid);
      let historyArray: Order[] = [];
      getDocs(
        query(collection(db, "Orders"), where("userId", "==", user.uid))
      ).then((res) => {
        // @ts-ignore
        res.forEach((el) => historyArray.push(el.data()));
        setHistory(historyArray);
      });
    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      {history.map((el: Order) => {
        return (
          <div>
            <span>
              {format(new Date(el.createdAt), "dd.MMM yyyy EEEE/kk-mm-ss ")}
            </span>
            {el.userProducts.map((product) => (
              <CartItem card={product} id={""} isHistory={true} />
            ))}
          </div>
        );
      })}
    </div>
  );
};
