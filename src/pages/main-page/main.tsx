
import { useNavigate } from "react-router-dom";
import styles from "./main.module.scss";

export const Main = ()=>{

    const navigate = useNavigate();

    return(
       <div className={`${styles.wrapper} margin_left`}>
        <div className={styles.main}>
            <div className={`${styles.main_info} margin_left`}>
               <h2 className={styles.main_tittle}>Электросамокаты kugoo kirin от официального дилера</h2>
               <span className={styles.main_more_info}>с бесплатной доставкой по РФ от 1 дня</span>
               <button className={styles.main_info_button}>Перейти в каталог</button> 
            </div>
        </div>
       </div>
    )
}