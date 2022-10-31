import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardsList } from "../../components/cards-list/cardsList";
import { getCardsGoods } from "../../redux/features/cardsScooters";
import { getCardsCollection } from "../../redux/selectors/selectors";
import { useAppDispatch } from "../../redux/store";
import styles from "./main.module.scss";

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const collection = useSelector(getCardsCollection);

  useEffect(() => {
    dispatch(getCardsGoods(null));
  }, []);

  return (
    <div className={`${styles.wrapper} margin_left`}>
      <div className={styles.main}>
        <div className={`${styles.main_info} margin_left`}>
          <h2 className={styles.main_tittle}>
            Электросамокаты kugoo kirin от официального дилера
          </h2>
          <span className={styles.main_more_info}>
            с бесплатной доставкой по РФ от 1 дня
          </span>
          <button className={styles.main_info_button}>Перейти в каталог</button>
        </div>
      </div>
      <div className={`${styles.line_bar_main} margin_left margin_right`}>
        <div className={styles.line_bar}>
          <span className={styles.guarantee}>
            <p> Гарантия 1 год</p>
            <p className={styles.row}>на весь ассортимент</p>
          </span>
          <span className={styles.rassrochka}>
            <p> Рассрочка</p>
            <p className={styles.row}> от 6 месяцев</p>
          </span>
          <span className={styles.presents}>
            Подарки
            <p className={styles.row}> и бонусы к покупкам</p>
          </span>
        </div>
        <div className={styles.yandex_bar}>
          <a
            className={styles.yandex_logo}
            href="https://yandex.by/maps/org/kugoo_by/141020274258/reviews/?ll=27.618339%2C53.930304&z=15"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../../images/yandex.svg" alt="yandex_logo" />
          </a>
          <span className={styles.reviews}>Яндекс отзывы</span>
          <span className={styles.rating}>4.9</span>
          <img
            className={styles.star}
            src="../../../images/star_rating.svg"
            alt="rating"
          />
        </div>
        {collection && <CardsList collection={collection} />}
      </div>
    </div>
  );
};
