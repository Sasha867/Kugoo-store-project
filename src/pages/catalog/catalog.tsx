import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CardsList } from "../../components/cards-list/cardsList";
import { getCardsGoods } from "../../redux/features/cardScooter";
import { getCardsCollection } from "../../redux/selectors/selectors";
import { useAppDispatch } from "../../redux/store";
import styles from "./catalog.module.scss";

export const Catalog = () => {
  const dispatch = useAppDispatch();

  const collection = useSelector(getCardsCollection);

  useEffect(() => {
    dispatch(getCardsGoods(null));
  }, []);

  return (
    <div className={styles.wrapper}>
      {collection && <CardsList collection={collection} />}
    </div>
  );
};
