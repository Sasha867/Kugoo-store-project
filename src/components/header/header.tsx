import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { FaViber, FaTelegram, FaWhatsapp } from "react-icons/fa";
import {IoIosArrowDropup} from "react-icons/io";
import { RequestACall } from "../../pages/request-a-call/requestACall";



export const Header = ()=>{
    const [isRequestACall, setIsRequestACall] = useState(false);

      
    function toggle(){
        setIsRequestACall((prev)=>!prev);
      }
       
      return(
        <header>
         <div className={styles.nav}>
          <div className={`${styles.nav_right} margin_left`}>
            <ul>
              <li className={styles.item}>
                <Link to = "/service">Сервис</Link>
              </li>
              <li className={styles.item}>
                <a href="#">Сотрудничество</a>
              </li>
              <li  className={styles.item}>
                <a onClick={()=>{setIsRequestACall(!isRequestACall)}}  href="#">Заказать звонок</a>
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
          <div className={`${styles.nav_left} margin_right`}>
            <a className={styles.number} href="tel:+121313">+7(800)505-54-61</a>
            <IoIosArrowDropup className={styles.icon_arrow}/>
          </div>
        </div>
        
        <div className={styles.nav_center}>
          <div className={`${styles.nav_search} margin_left`}>
            <ul>
              <li>
                <Link to={"./"} className={styles.logo} >KUGOO</Link>
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
          <div className={`${styles.wrapper_cart} margin_right`}>
            <Link to={"/cart"} className={styles.cart_button}><img className={styles.cart_icon} src="./img/Vector3.svg" alt="" />Корзина</Link>
            {/* <Link to={"/cart"} className={styles.login_button}><img className={styles.cart_icon} src="./img/Vector3.svg" alt="" />Корзина</Link> */}
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
     {isRequestACall && <RequestACall toggle = {toggle} />}
      </header>
     
     
    )
}