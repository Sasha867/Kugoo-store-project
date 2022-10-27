import { methodsPayIcons } from "../constans/constans";
import styles from "./payment.module.scss";

export const MethodsPayment = () => {
  return (
    <div className={styles.container_pay_systems_right}>
      {methodsPayIcons &&
        methodsPayIcons.map(({ id, image }: any) => (
          <img
            key={id}
            className={styles.container_pay_icon}
            src={image}
            alt={"icon payment method"}
          />
        ))}
    </div>
  );
};
