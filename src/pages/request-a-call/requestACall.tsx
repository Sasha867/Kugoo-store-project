import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import styles from "./requestACall.module.scss";

export const RequestACall = ({ toggle }: any) => {
  const [isShouldChoice, setIsShouldChoice] = useState(false);

  function shouldChoice() {
    setIsShouldChoice((isShouldChoice) => !isShouldChoice);
    console.log(isShouldChoice);
  }

 

  return (
    <>
      <div className={styles.request_call_wrapper}>
        <div className={styles.request_call_info}>
          <h2 className={styles.request_call_info_tittle}>
            менеджер позвонит вам в течении 5 минут
          </h2>
          <span className={styles.request_call_info_answer}>
            ответит на все вопросы и проконсультирует по продуктам Kugoo
          </span>
          <input
            className={styles.request_call_input}
            autoFocus
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
            placeholder="Введите номер вашего телефона:"
          />
          <button className={styles.request_call_button}>Позвоните мне</button>
          <div className={styles.request_call_info_agreement_wrapper}>
            <div onClick={shouldChoice}>
              {isShouldChoice ? (
            <GrCheckboxSelected className={styles.request_call_info_check_box}/>) : 
            (<GrCheckbox className={styles.request_call_info_check_box} />)}
            </div>
            <span className={styles.request_call_info_agreement}>
              Нажимая на кнопку, вы соглашаетесь на обработку персональных
              данных и <i className={styles.request_call_info_important}>
                политикой конфиденциальности
              </i>
            </span>
          </div>
        </div>
        <div className={styles.request_call_background}></div>
        <div>
          <AiOutlineClose onClick={toggle} className={styles.cross_icon} />
        </div>
      </div>
    </>
  );
};
