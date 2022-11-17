import { useState } from "react";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import styles from "./cooperation.module.scss";

export const Cooperation = () => {
  const [isShouldChoice, setIsShouldChoice] = useState(false);
  const [isUserTel, setIsUserTel] = useState("");

  const shouldChoice = () => {
    setIsShouldChoice((isShouldChoice) => !isShouldChoice);
  };

  const telChangeHandler = ({ target: { value } }: any) => {
    setIsUserTel(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_cooperation}>
        <div className={`${styles.info} margin_left`}>
          <h3 className={styles.tittle_info}>
            покупайте товары kugoo по оптовым ценам от официального дилера
          </h3>
          <span className={styles.more_info}>
            Ваша прибыль - до 25% от закупочной стоимости 1 единицы товара
          </span>
        </div>
        <div className={`${styles.get_price} margin_right`}>
          <h3 className={styles.tittle_get_price}>
            получите прайс-лист с оптовыми ценами
          </h3>
          <span className={styles.ingo_get_price}>
            а также расчитать вашу прибыль от продажи товаров Kugoo
          </span>
          <form>
            <fieldset>
              <input
                className={styles.input_get_price}
                type="tel"
                name="tel"
                value={isUserTel}
                onChange={telChangeHandler}
                autoFocus
                pattern="^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$"
                placeholder="+375(ХХ)777-77-77"
                required
              />
              <button className={styles.btn_get_price}>Скачать прайс</button>
            </fieldset>
          </form>
          <div className={styles.get_price_info_agreement}>
            <div onClick={shouldChoice}>
              {isShouldChoice ? (
                <GrCheckboxSelected
                  className={styles.get_price_info_check_box}
                />
              ) : (
                <GrCheckbox className={styles.get_price_info_check_box} />
              )}
            </div>
            <span>
              Нажимая на кнопку, вы соглашаетесь на обработку персональных
              данных и{" "}
              <i className={styles.get_price_info_important}>
                политикой конфиденциальности
              </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
