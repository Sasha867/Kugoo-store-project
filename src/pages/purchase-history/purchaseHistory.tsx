import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { getUser } from "../../redux/selectors/selectors";
import styles from "./purchaseHistory.module.scss";

export const PurchaseHistory = () => {
  const user = useSelector(getUser);

  useEffect(() => {
    // getDocs(collection(db, "Orders")).then((res) => console.log(res));
    // query(collection(db, "cities"), where("capital", "==", true));
    const ordersRef = collection(db, "Orders");

    if(user?.uid){
        console.log(user.uid);
        
        getDocs(
          query(collection(db, "Orders", "userInformation"), where("email", "==", user.email))
        ).then((res) => {
          res.forEach((el) => console.log(el.data()));
        });

    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      <h1>hi</h1>
    </div>
  );
};
