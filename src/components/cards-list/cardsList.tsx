import { CardGood } from "../card-good/cardGood";
import { CardScooter } from "../constans/constans";
import styles from "./cardsList.module.scss";

type Props = {
  collection: CardScooter[];
};

export const CardsList = ({ collection }: Props) => {
  return (
    <div className={styles.wrapper}>
      {collection.map((el) => (
        <CardGood characteristics={el} />
      ))}
    </div>
  );
};
