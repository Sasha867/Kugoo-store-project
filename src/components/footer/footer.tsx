import { RequestACall } from "../../pages/request-a-call/requestACall";
import { MethodsPayment } from "../payment-methods/methods-payment";
import { useDispatch, useSelector } from "react-redux";
import {
  isOpenModal,
  isOpenRequestCall,
} from "../../redux/selectors/selectors";
import { openRequestCall } from "../../redux/features/visibleSlice";
import { Modal } from "../auth-modal/auth-modal";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

export const Footer = () => {
  const visible = useSelector(isOpenRequestCall);
  const dispatch = useDispatch();
  const visibleModal = useSelector(isOpenModal);

  const toggleRequestCall = () => {
    dispatch(openRequestCall());
  };

  return (
    <footer>
      {visibleModal && <Modal />}
      {visible && <RequestACall />}
      <div className={styles.footer_nav}>
        <div className={`${styles.footer_nav_row} margin_left `}>
          <h6 className={styles.footer_nav_email_tittle}>
            оставьте свою почту и станьте первым, кто получить скидку на новые
            самокаты
          </h6>
          <form
            className={`${styles.foter_nav_right} margin_right`}
            action="get"
          >
            <input
              className={styles.input_email}
              type="email"
              placeholder="Введите Ваш email"
            />
            <button className={styles.button_subscribe}>Подписаться</button>
          </form>
        </div>
      </div>
      <div className={`${styles.wrraper_lists} margin_left margin_right`}>
        <div className={styles.container_left_lists}>
          <div className={styles.list}>
            <h6 className={styles.tittle_h6}>Каталог тваров</h6>
            <Link to={"/catalog"} className={styles.list_item} >
              Электросамокаты
            </Link>
            <a className={styles.list_item} href="#">
              Электроскутеры
            </a>
            <a className={styles.list_item} href="#">
              Электровелосипеды
            </a>
            <a className={styles.list_item} href="#">
              Пылесосы-роботы
            </a>
          </div>
          <div className={styles.list}>
            <h6 className={styles.tittle_h6}>Покупателям</h6>
            <Link to={"/service"} className={styles.list_item}>
              Cервисный центр
            </Link>
            <Link to={"/dilivery"} className={styles.list_item}>
              Доставка и оплата
            </Link>
            <a className={styles.list_item} href="#">
              Рассрочка
            </a>
            <Link to={"/test_drive"} className={styles.list_item}>
              Тест-драйв
            </Link>
          </div>
          <div className={`${styles.list} ${styles.margin_top}`}>
            <Link to={"/blog"} className={styles.list_item}>
              Блог
            </Link>
            <Link to={"/cooperation"} className={styles.list_item}>
              Сотрудничество
            </Link>
            <Link to={"/contacts"} className={styles.list_item}>
              Контакты
            </Link>
            <Link to={"/stock"} className={styles.list_item}>
              Акции
            </Link>
          </div>
        </div>
        <div className={styles.container_right_lists}>
          <div className={styles.list}>
            <h6 className={styles.tittle_h6}>Контакты</h6>
            <div className={styles.list_1_tittle}>Call-центр</div>
            <a className={styles.list_item_1} href="tel:+123">
              +375(29)777-77-77
            </a>
            <div className={styles.list_item}>Пн-Вс 10:00 - 20:00</div>
            <div className={styles.list_1}>
              <div className={styles.list_1_tittle}>
                Магазин в Москве <br />
                ул. Ткацкая, 5 стр. 16
              </div>
              <a className={styles.list_item_2} href="tel:+123">
                +375(29)777-77-77
              </a>
            </div>
          </div>
          <div className={`${styles.list} ${styles.margin_top}`}>
            <div className={styles.list_1_tittle}>Сервисный центр</div>
            <a className={styles.list_item_1} href="tel:+123">
              +375(29)777-77-77
            </a>
            <div className={styles.list_item}>Пн-Вс 10:00 - 20:00</div>
            <div className={styles.list_1}>
              <div className={styles.list_1_tittle}>
                Магазин в Санкт-Петербурге <br />
                ул. Фрунзе, 2
              </div>
              <a className={styles.list_item_2} href="tel:+123">
                +375(29)777-77-77
              </a>
            </div>
          </div>
          <div className={styles.list}>
            <div
              onClick={toggleRequestCall}
              className={`${styles.list_request_a_call} cursor_pointer`}
            >
              Заказать звонок
            </div>
            <div className={`${styles.list_1} ${styles.list_3}`}>
              <div className={styles.list_1_tittle}>
                Магазин в Краснодаре <br />
                ул. Восточно-Кругликовская, 86
              </div>
              <a className={styles.list_item_2} href="tel:123">
                +375(29)777-77-77
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.container_label} margin_left margin_right`}>
        <hr />
        <div className={styles.container_label_left}>
          <Link to={"/"} className={styles.container_label_tittle}>
            kugoo
          </Link>
          <a
            className={styles.container_label_icon}
            href="https:play.google.com/store"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/google_play.png" alt="" />
          </a>
          <a
            className={styles.container_label_icon}
            href="https://www.apple.com/by/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/app_store.png" alt="" />
          </a>
        </div>
        <div className={styles.container_label_right}>
          <a
            className={styles.container_label_icon}
            href="https://vk.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./img/VK.png" alt="" />
          </a>
          <a
            className={styles.container_label_icon}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/Inst.png" alt="" />
          </a>
          <a
            className={styles.container_label_icon}
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/YouTube.png" alt="" />
          </a>
          <a
            className={styles.container_label_icon}
            href="https://web.telegram.org/z/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/Telegram.png" alt="" />
          </a>
        </div>
      </div>
      <div
        className={`${styles.container_pay_systems} margin_left margin_right`}
      >
        <hr />
        <div className={styles.container_pay_systems_left}>
          <Link
            to={"/requisites"}
            className={styles.container_pay_systems_info}
          >
            Реквизиты
          </Link>
          <Link
            to={"/privacy_policy"}
            className={styles.container_pay_systems_info}
          >
            Политика конфиденциальности
          </Link>
        </div>
        <MethodsPayment />
        <div className={styles.container_pay_systems_chats}>
          <p className={styles.container_chats_tittle}>Online чат:</p>
          <a
            className={styles.container_chats_icon}
            href="https://www.viber.com/ru/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/viber 1.png" alt="" />
          </a>
          <a
            className={styles.container_chats_icon}
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/whatsapp 1.png" alt="" />
          </a>
          <a
            className={styles.container_chats_icon}
            href="https://web.telegram.org/z/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/telegram 1.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
