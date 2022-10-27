import { AcountButton } from "../acount-button/acountButton";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { FaViber, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropup, IoIosCart } from "react-icons/io";
import { RequestACall } from "../../pages/request-a-call/requestACall";
import { useDispatch, useSelector } from "react-redux";
import { openRequestCall } from "../../redux/features/visibleSlice";
import { isOpenRequestCall } from "../../redux/selectors/selectors";

export const Header = () => {
  const visibleState = useSelector(isOpenRequestCall);
  const dispatch = useDispatch();

  const toggleRequestCall = () => {
    dispatch(openRequestCall());
  };

  return (
    <header>
      <div className={styles.nav}>
        <div className={`${styles.nav_right} margin_left`}>
          <ul>
            <li className={styles.item}>
              <Link to={"/service"}>Сервис</Link>
            </li>
            <li className={styles.item}>
              <Link to={"/cooperation"}>Сотрудничество</Link>
            </li>
            <li className={styles.item}>
              <div className={"cursor_pointer"} onClick={toggleRequestCall}>
                Заказать звонок
              </div>
            </li>
            <li className={styles.networks}>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className={styles.whatsappIcon} />
              </a>
              <a href="https://www.viber.com" target="_blank" rel="noreferrer">
                <FaViber className={styles.viberIcon} />
              </a>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className={styles.telegramIcon} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.nav_left} margin_right`}>
          <a className={styles.number} href="tel:+375(29)">
            +375(29)777-77-77
          </a>
          <IoIosArrowDropup className={styles.icon_arrow} />
        </div>
      </div>
      <div className={styles.nav_center}>
        <div className={`${styles.nav_search} margin_left`}>
          <ul>
            <li>
              <Link to={"/"} className={styles.logo}>
                KUGOO
              </Link>
            </li>
            <li>
              <Link to={"/catalog"} className={styles.catalog}>
                Каталог{" "}
              </Link>
            </li>
          </ul>
        </div>
        <form className={styles.bar} action="get">
          <input
            className={styles.main_search}
            type="text"
            // value={}
            placeholder="Искать самокат KUGOO"
          />
          <div className={styles.input_left_search}>Везде</div>
          <button className={styles.input_right_search}></button>
        </form>
        <div className={styles.wrapper_acaunt}>
          <AcountButton />
        </div>
        <div className={`${styles.wrapper_cart} margin_right`}>
          <Link to={"/cart"} className={styles.cart_button}>
            <IoIosCart className={styles.cart_icon} />
            Корзина
          </Link>
        </div>
      </div>
      <div className={`${styles.nav_info} margin_left margin_right`}>
        <ul>
          <li>
            <Link to={"/about_shop"} className={styles.nav_info_about_shop}>
              О магазине
            </Link>
          </li>
          <li>
            <Link to={"/delivery"} className={styles.nav_info_dilivery}>
              Доставка и оплата
              <img src=" ./images/payment_by_instalments.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to={"/test_drive"} className={styles.item_6}>
              Тест-драйв
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className={styles.item_6}>
              Блог
            </Link>
          </li>
          <li>
            <Link to={"/contacts"} className={styles.item_6}>
              Контакты
            </Link>
          </li>
          <li>
            <Link to={"/stock"} className={styles.item_6}>
              Акции
              <img src="./images/stock.svg" alt="" />
            </Link>
          </li>
        </ul>
      </div>
      {visibleState && <RequestACall />}
    </header>
  );
};
