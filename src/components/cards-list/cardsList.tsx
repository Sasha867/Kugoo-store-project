import { CardProduct } from "../card-product/cardProduct";
import { CardScooter } from "../constans/interfaces";
import styles from "./cardsList.module.scss";

type Props = {
  collection: CardScooter[];
};

export const CardsList = ({ collection }: Props) => {
 
  return (
    <>
      {/* <div className={styles.wrapper}> */}
      {collection.map((el) => (
        <CardProduct specification={el} key={el.id} />
      ))}
      {/* </div> */}
    </>
  );
};
