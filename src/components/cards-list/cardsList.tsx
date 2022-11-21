import { CardProduct } from "../card-product/cardProduct";
import { CardScooter } from "../constans/interfaces";

type Props = {
  collection: CardScooter[];
};

export const CardsList = ({ collection }: Props) => {
  return (
    <>
      {collection.map((el) => (
        <CardProduct specification={el} key={el.id} />
      ))}
    </>
  );
};
