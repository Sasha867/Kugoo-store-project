import { useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOutUser } from "../../redux/features/user";

import {
  closeAcaunt,
  openAcaunt,
  openModal,
} from "../../redux/features/visibleSlice";
import { getUser } from "../../redux/selectors/selectors";
import { useAppDispatch } from "../../redux/store";
import styles from "./acountBar.module.scss";

export const AcountBar = () => {
  const dispatch = useAppDispatch();

  const user = useSelector(getUser);

  const userEmailDisplay: string = user?.email
    ? user?.email
    : "Вы не авторизованы";

  const toggleisOpenModal = () => {
    dispatch(openModal());
  };

  const logoutHandler = () => {
    dispatch(signOutUser(null));
  };

  useEffect(() => {
    window.addEventListener("click", onClickCloseToolsAuth);

    return () => {
      window.removeEventListener("click", onClickCloseToolsAuth);
    };
  });

  const onClickCloseToolsAuth = ({ target: { id } }: any) => {
    if (
      id === "toolsAuth" ||
      id === "acaunt" ||
      id === "user_bar" ||
      id === "userIcon"
    ) {
      dispatch(openAcaunt());
    } else {
      dispatch(closeAcaunt());
    }
  };

  return (
    <div
      onClick={onClickCloseToolsAuth}
      id="toolsAuth"
      className={styles.wrapper}
    >
      <div className={styles.user_bar} id="user_bar">
        <FaRegUser id="userIcon" className={styles.user_icon} />
        <span className={styles.user_email}>{userEmailDisplay}</span>
        <div>{}</div>
        {!user && (
          <button className={styles.userToolsBtn} onClick={toggleisOpenModal}>
            Войти
          </button>
        )}
      </div>
      <Link to={"/cart"}>
        <div className={styles.profile_cart}>
          <IoIosCart className={styles.cart_icon} />
          <span>Корзина</span>
        </div>
      </Link>
      <hr className={styles.hr} />
      <div className={styles.user_select}>
        <span>Просомтренные</span>
        <span>Избранные товары</span>
      </div>

      <hr className={styles.hr} />
      <div className={styles.user_select}>
        <span>Личные данные</span>
        <Link to={"/history"}>
          <span>История покупок</span>
        </Link>
        <hr className={styles.hr} />
        {user && (
          <button onClick={logoutHandler} className={styles.userSignOutBtn}>
            Выход
          </button>
        )}
      </div>
    </div>
  );
};
