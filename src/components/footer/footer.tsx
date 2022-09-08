import React from "react";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    // <React.Fragment>
    <footer>
      <div className={styles.footer_nav}>
        <div
          className={`${styles.footer_nav_row} margin_left `}
        >
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
      <div
        className={`${styles.wrraper_lists} margin_left margin_right`}
      >
        <div className={styles.container_left_lists}>
          <div className={styles.list}>
            <h6 className={styles.tittle_h6}>Каталог тваров</h6>
            <a className={styles.list_item} href="#">
              Электросамокаты
            </a>
            <a className={styles.list_item} href="#">
              Электроскутеры
            </a>
            <a className={styles.list_item} href="#">
              Электровелосипеды
            </a>
            <a className={styles.list_item} href="#">
              Электровелосипеды
            </a>
          </div>
          <div className={styles.list}>
            <h6 className={styles.tittle_h6}>Покупателм</h6>
            <a className={styles.list_item} href="#">
              cервисный центр
            </a>
            <a className={styles.list_item} href="#">
              Доставка и оплата
            </a>
            <a className={styles.list_item} href="#">
              Рассрочка
            </a>
            <a className={styles.list_item} href="#">
              Тест-драйв
            </a>
          </div>
          <div className={`${styles.list} ${styles.margin_top}`}>
            <a className={styles.list_item} href="#">
              Блог
            </a>
            <a className={styles.list_item} href="#">
              Сотрудничество
            </a>
            <a className={styles.list_item} href="#">
              Контакты
            </a>
            <a className={styles.list_item} href="#">
              Акции
            </a>
          </div>
        </div>
        <div className={styles.container_right_lists}>
          <div className={styles.list}>
            <h6 className={styles.tittle_h6}>Контакты</h6>
            <a className={styles.list_1_tittle} href="#">
              Call-центр
            </a>
            <a className={styles.list_item_1} href="tl:+123">
              +7 (800) 505-54-61
            </a>
            <a className={styles.list_item} href="#">
              н-Вс 10:00 - 20:00
            </a>
            <div className={styles.list_1}>
              <a className={styles.list_1_tittle} href="#">
                Магазин в Москве <br />
                ул. Ткацкая, 5 стр. 16
              </a>
              <a className={styles.list_item_2} href="tl:+123">
                +7 (499) 406 15 87
              </a>
            </div>
          </div>
          <div className={`${styles.list} ${styles.margin_top}`}>
            <a className={styles.list_1_tittle} href="#">
              Сервисный центр
            </a>
            <a className={styles.list_item_1} href="tl:+123">
              +7 (499) 350-76-92
            </a>
            <a className={styles.list_item} href="#">
              н-Вс 10:00 - 20:00
            </a>
            <div className={styles.list_1}>
              <a className={styles.list_1_tittle} href="#">
                Магазин в Санкт-Петербурге <br />
                ул. Фрунзе, 2
              </a>
              <a className={styles.list_item_2} href="tl:+123">
                +7 (499) 406 15 87
              </a>
            </div>
          </div>
          <div className={styles.list}>
            <a className={styles.list_request_a_call} href="#">
              Заказать звонок
            </a>
            <div className={`${styles.list_1} ${styles.list_3}`}>
              <a className={styles.list_1_tittle} href="#">
                Магазин в Краснодаре <br />
                ул. Восточно-Кругликовская, 86
              </a>
              <a className={styles.list_item_2} href="tl:+123">
                + 7 (800) 505 54 61
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr
        className={`${styles.list_trait} margin_left margin_right`}
      />
      <div
        className={`${styles.container_label} margin_left margin_right`}
      >
        <div className={styles.container_label_left}>
          <p className={styles.container_label_tittle}>kugoo</p>
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
      <hr className={`margin_left margin_right`} />
      <div
        className={`${styles.container_pay_systems} margin_left margin_right`}
      >
        <div className={styles.container_pay_systems_left}>
          <a className={styles.container_pay_systems_info} href="#">
            Реквизиты
          </a>
          <a className={styles.container_pay_systems_info} href="#">
            Политика конфиденциальности
          </a>
        </div>
        <div className={styles.container_pay_systems_right}>
          <a className={styles.container_pay_icon} href="">
            <img src="./img/g_pay.png" alt="" />
          </a>
          <a className={styles.container_pay_icon} href="">
            <img src="./img/pay.png" alt="" />
          </a>
          <a className={styles.container_pay_icon} href="">
            <img src="./img/visa.png" alt="" />
          </a>
          <a className={styles.container_pay_icon} href="">
            <img src="./img/master.png" alt="" />
          </a>
          <a className={styles.container_pay_icon} href="">
            <img src="./img/master_1.png" alt="" />
          </a>
          <a className={styles.container_pay_icon} href="">
            <img src="./img/webmoney.png" alt="" />
          </a>
          <a className={styles.container_pay_icon} href="">
            <img src={"./img/fox.png"} alt="" />
          </a>
          <div className={styles.container_pay_systems_chats}>
            <p className={styles.container_chats_tittle}>Online чат:</p>
            <a className={styles.container_chats_icon} href="">
              <img src="./img/viber 1.png" alt="" />
            </a>
            <a className={styles.container_chats_icon} href="">
              <img src="./img/whatsapp 1.png" alt="" />
            </a>
            <a className={styles.container_chats_icon} href="">
              <img src="./img/telegram 1.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
