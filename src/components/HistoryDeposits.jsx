"use client"
import React, {useState} from 'react';
import styles from "../styles/HistoryDeposits.module.scss";
import {getListDeposits} from "../../app/api/admin/adminApi";

const HistoryDeposits = (props) => {
    const [deposits, setDeposits] = useState([]);
    const listDeposits = async () => {
        const newDeposits = await getListDeposits();
        setDeposits(newDeposits);
    }
    return (
        <div className={`${styles.card} border-red`}>
            <div className={styles.wrapp_head}>
                <h2>{props.text.historyDeposits}</h2>
                <button onClick={listDeposits} className={`button`}>{props.text.depositButton}</button>
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

            {/*Расскментировать и подправить когда будут норм данные с апишки*/}
            {/*{deposits.length > 0 &&*/}
            {/*    <ul className={styles.list_deposits}>*/}
            {/*        {deposits.map((deposit, index) => (*/}
            {/*            <li className={styles.deposit} key={index}>*/}
            {/*                <div className={styles.wrapp_data}>*/}
            {/*                    <p className={styles.data_number}>*/}
            {/*                        {deposit.date}*/}
            {/*                    </p>*/}
            {/*                    <p className={styles.data_time}>*/}
            {/*                        {deposit.time}*/}
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
export default HistoryDeposits;