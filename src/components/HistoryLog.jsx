"use client"
import React, {useState} from 'react';
import styles from "../styles/HistoryLog.module.scss";
import {getListDeposits} from "../../app/api/admin/adminApi";

function HistoryLog(props) {
    const [logs, setLogs] = useState([]);
    const listLogs = async () => {
        const newDeposits = await getListDeposits();
        setLogs(newDeposits);
    }
    return (
        <div className={`${styles.card} border-red`}>
            <div className={styles.wrapp_head}>
                <h2>{props.text.historyLogs}</h2>
                <button onClick={listLogs} className={`button`}>{props.text.depositButton}</button>
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
            {/*Расскментировать и подправить когда будут норм данные с апишки*/}
            {/*{deposits.length > 0 &&*/}
            {/*    <ul className={styles.list_deposits}>*/}
            {/*        {logs.map((log, index) => (*/}
            {/*            <li className={styles.deposit} key={index}>*/}
            {/*                <div className={styles.wrapp_data}>*/}
            {/*                    <p className={styles.data_number}>*/}
            {/*                        {log.date}*/}
            {/*                    </p>*/}
            {/*                    <p className={styles.data_time}>*/}
            {/*                        {log.time}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*                <p className={styles.description_deposit}>{deposit.description}</p>*/}
            {/*                <p className={styles.sum_deposit}>{deposit.amount} ₽</p>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*}*/}
            {/*{deposits.length === 0 &&*/}
            {/*    <p>No deposits available</p>*/}
            {/*}*/}
        </div>
    );
}
export default HistoryLog;