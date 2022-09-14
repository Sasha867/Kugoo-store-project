import { methodsPayIcons } from "../constans/constans";
import styles from "./payment.module.scss";

export const MethodsPayment = () => {
 
  return (
    <div className={styles.container_pay_systems_right}>
      {methodsPayIcons.map((el) => (
        <img
          className={styles.container_pay_icon}
          src={el}
          alt={"icon payment method"}
        />
      ))}
    </div>
  );
};
