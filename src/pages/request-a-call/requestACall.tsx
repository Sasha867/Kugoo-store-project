import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { useDispatch } from "react-redux";
import styles from "./requestACall.module.scss";
import { closeRequestCall } from "../../redux/features/visibleSlice";
import { RequestCall } from "../../components/constans/interfaces";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const RequestACall = () => {
  const [isShouldChoice, setIsShouldChoice] = useState(false);
  const [isUserTel, setIsUserTel] = useState("");
 
  const dispatch = useDispatch();

  const telChangeHandler = ({ target: { value } }: any) => {
    setIsUserTel(value);
  };

  const isRequestCall = () => {
    addRequest();
    dispatch(closeRequestCall());
  };

  const shouldChoice = () => {
    setIsShouldChoice((prev: boolean) => !prev);
  };

  const clickHandler = ({ target: { id } }: any) => {
    if (id === "requestCall") {
      dispatch(closeRequestCall());
    }
  };

  async function addRequest() {
    const request: RequestCall = {
      tel: isUserTel,
    };
    await addDoc(collection(db, "RequestCall"), request);
    setIsUserTel("");
  }

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
          <form>
            <fieldset>
              <input
                className={styles.request_call_input}
                type="tel"
                name="tel"
                value={isUserTel}
                onChange={telChangeHandler}
                pattern="^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$"
                placeholder="+375(ХХ)777-77-77"
                autoFocus
              />
              <button
                disabled={!isShouldChoice}
                onClick={isRequestCall}
                className={styles.request_call_button}
              >
                Позвоните мне
              </button>
            </fieldset>
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
