import styles from "./shoppingCart.module.scss";
export const ShoppingCart = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.tittle}>Моя корзина</h3>
      <hr className={styles.list_trait} />
      {/* <div className={styles.container}> */}
        <div className={`${styles.info} `}>
        <p className={styles.message}>ваша корзина пуста</p>
      
        <p className={styles.mesage2}>Добавте товар из каталога</p> 
        <button className={styles.button}>Перейти в каталог</button>
        </div>
      {/* </div> */}
    </div>
  );
};
