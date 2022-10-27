import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { useDispatch } from "react-redux";
import styles from "./requestACall.module.scss";
import { closeRequestCall } from "../../redux/features/visibleSlice";

export const RequestACall = () => {
  const [isShouldChoice, setIsShouldChoice] = useState(false);
  const [isUserTel, setIsUserTel] = useState("");
  console.log(isUserTel);

  const dispatch = useDispatch();

  const telChangeHandler = ({ target: { value } }: any) => {
    setIsUserTel(value);
  };

  const isRequestCall = () => {
    dispatch(closeRequestCall());
  };

  const shouldChoice = () => {
    setIsShouldChoice((prev: boolean) => !prev);
    console.log(isShouldChoice);
  };

  const clickHandler = ({ target: { id } }: any) => {
    if (id === "requestCall") {
      dispatch(closeRequestCall());
    }
  };

  return (
    <div
      id="requestCall"
      onClick={clickHandler}
      className={styles.request_call_fon}
    >
      <div className={styles.request_call_wrapper}>
        <div className={styles.request_call_info}>
          <h2 className={styles.request_call_info_tittle}>
            менеджер позвонит вам в течении 5 минут
          </h2>
          <span className={styles.request_call_info_answer}>
            ответит на все вопросы и проконсультирует по продуктам Kugoo
          </span>
          <form action="">
            <input
              className={styles.request_call_input}
              type="tel"
              name="tel"
              value={isUserTel}
              onChange={telChangeHandler}
              autoFocus
              pattern="^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$"
              placeholder="+375(29/44/25/33)000-00-00"
            />
            <button className={styles.request_call_button}>
              Позвоните мне
            </button>
          </form>
          <div className={styles.request_call_info_agreement_wrapper}>
            <div onClick={shouldChoice}>
              {isShouldChoice ? (
                <GrCheckboxSelected
                  className={styles.request_call_info_check_box}
                />
              ) : (
                <GrCheckbox className={styles.request_call_info_check_box} />
              )}
            </div>
            <span className={styles.request_call_info_agreement}>
              Нажимая на кнопку, вы соглашаетесь на обработку персональных
              данных и{" "}
              <i className={styles.request_call_info_important}>
                политикой конфиденциальности
              </i>
            </span>
          </div>
        </div>
        <div className={styles.request_call_background}></div>
        <div>
          <AiOutlineClose
            onClick={isRequestCall}
            className={styles.cross_icon}
          />
        </div>
      </div>
    </div>
  );
};
