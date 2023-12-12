import React from 'react';
import styles from "../styles/HistoryDeposits.module.scss";

function HistoryDeposits() {
    return (
        <div className={`${styles.card} border-red`}>
            <div className={styles.wrapp_head}>
                <h2>История Пополнений</h2>
                <button className={`button`}>Открыть</button>
            </div>
            <ul className={styles.list_deposits}>
                <li className={styles.deposit}>
                    <div className={styles.wrapp_data}>
                        <p className={styles.data_number}>
                            16 nov
                        </p>
                        <p className={styles.data_time}>
                            14.02
                        </p>
                    </div>
                    <p className={styles.description_deposit}>mir</p>
                    <p className={styles.sum_deposit}>540 ₽</p>
                </li>
            </ul>
        </div>
    );
}
export default HistoryDeposits;