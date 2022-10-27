import { IoIosLogIn, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AcountBar } from "../acount-bar/acountBar";
import styles from "./acountButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser, isOpenAcaunt } from "../../redux/selectors/selectors";
import { closeAcaunt, openAcaunt } from "../../redux/features/visibleSlice";
import { RiUserFollowLine } from "react-icons/ri";

export const AcountButton = () => {
  const isAcauntOpen = useSelector(isOpenAcaunt);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const toggle = () => {
    if (isAcauntOpen === true) {
      dispatch(closeAcaunt());
    } else {
      dispatch(openAcaunt());
    }
  };

  return (
    <>
      <div id="acaunt" onClick={toggle} className={styles.login_button}>
        {user ? (
          <RiUserFollowLine className={styles.login_icon} />
        ) : (
          <IoIosLogIn className={styles.login_icon} />
        )}
        Аккаунт
        {isAcauntOpen ? (
          <IoIosArrowDown className={styles.login_arow} />
        ) : (
          <IoIosArrowUp className={styles.login_arow} />
        )}
      </div>
      {isAcauntOpen && <AcountBar />}
    </>
  );
};
