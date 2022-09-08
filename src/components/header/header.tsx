import styles from "./header.module.scss";
import {FaViber, FaTelegram, FaWhatsapp} from "react-icons/fa";

export const Header = ()=>{
    return(
        <header>
        <div className={styles.nav}>
          <div className={`${styles.nav_right} margin_left`}>
            <ul>
              <li className={styles.item}>
                <a href="">Сервис</a>
              </li>
              <li className={styles.item}>
                <a href="#">Сотрудничество</a>
              </li>
              <li className={styles.item}>
                <a href="#">Заказать звонок</a>
              </li>
              <li className={styles.networks}>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"
                  ><FaWhatsapp className={styles.whatsappIcon}/></a>
                <a href="https://www.viber.com" target="_blank" rel="noreferrer"
                  ><FaViber className={styles.viberIcon}/></a>
                <a href="https://web.telegram.org/" target="_blank" rel="noreferrer"
                  ><FaTelegram className={styles.telegramIcon}/></a>
              </li>
            </ul>
          </div>
          <div className={`${styles.nav_lef} margin_right`}>
            <a className={styles.number} href="tel:+121313">+7(800)505-54-61</a>
            <a href="#"><img src="./img/Group 1659.png" alt="" /></a>
          </div>
        </div>
  
        <div className={styles.nav_center}>
          <div className={`${styles.nav_search} margin_left`}>
            <ul>
              <li>
                <a className={styles.logo} href="#">KUGOO</a>
              </li>
              <li>
                <a className={styles.catalog} href="#">Каталог </a>
              </li>
            </ul>
          </div>
          <form className={styles.bar} action="get">
            <input
              className={styles.main_search}
              type="text"
              placeholder="Искать самокат KUGO"
            />
            <a className={styles.input_left_search} href="#">Везде</a>
  
            <a className={styles.input_right_search} href="#"
              ><img src="./img/Search.svg" alt="" />
            </a>
          </form>
          <div className={`${styles.right_bar} margin_right`}>
            <a className={styles.item_1} href="#"><img src="./img/Group1.svg" alt="" /></a>
            <a className={styles.item_1} href="#"><img src="./img/hart.png" alt="" /></a>
            <a href=""><img src="./img/Vector3.svg" alt="" /></a>
            <a className={styles.item_2} href="">Корзина</a>
          </div>
        </div>
        <div className={`${styles.nav_info} margin_left`}>
          <ul>
            <li><a className={styles.item_3} href="#">О магазине</a></li>
            <li><a className={styles.item_4} href="#">Доставка и оплата</a></li>
            <li>
              <a className={styles.item_5} href="#"
                ><img src="./img/Group 150.svg" alt="" />
              </a>
            </li>
            <li><a className={styles.item_6} href="#">Тест-драйв</a></li>
            <li><a className={styles.item_6} href="#">Блог</a></li>
            <li><a className={styles.item_6} href="#">Контакты</a></li>
            <li><a className={styles.item_6} href="#">Акции</a></li>
            <li>
              <a href=""><img src="./img/Group 151.svg" alt="" /></a>
            </li>
          </ul>
        </div>
      </header>
    )
}