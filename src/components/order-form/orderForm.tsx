import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/selectors/selectors";

import styles from "./orderForm.module.scss";

export interface Errors {
  email?: string;
  adress?: string;
  phone?: string;
}

type Props = {
  cartOrder: Function;
};

export const OrderForm = ({ cartOrder }: Props) => {
  const user = useSelector(getUser);

  return (
    <div>
      <Formik
        initialValues={{ email: user?.email || "", adress: "", phone: "" }}
        validate={(values) => {
          const errors: Errors = {};
          if (!values.email) {
            errors.email = "Введите email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Неправильный email";
          }
          if (!values.adress) {
            errors.adress = "Введите адрес";
          }
          if (!values.phone) {
            errors.phone = "Введите телефон";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            cartOrder(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className={styles.order_form}>
            <div className={styles.field}>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="small" />
            </div>
            <div className={styles.field}>
              <label htmlFor="adress">Адрес:</label>
              <Field type="text" name="adress" id="adress" />
              <ErrorMessage name="adress" component="small" />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Телефон:</label>
              <Field type="phone" name="phone" id="phone" />
              <ErrorMessage name="phone" component="small" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !(isValid && dirty)}
            >
              Отправить заказ
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
