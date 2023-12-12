import React from 'react';
import styles from "../styles/HistoryLog.module.scss";

function HistoryLog() {
    return (
        <div className={`${styles.card} border-red`}>
            <div className={styles.wrapp_head}>
                <h2>Логи работы ПО</h2>
                <button className={`button`}>Открыть</button>
            </div>
            <ul className={styles.list_deposits}>
                <li className={styles.deposit}>
                    <p className={styles.data_number}>
                        16 nov
                    </p>

                    <p className={styles.data_time}>
                        14.02
                    </p>
                    <p className={styles.description_deposit}>проверка работоспособности7</p>
                </li>
            </ul>
        </div>
    );
}
export default HistoryLog;