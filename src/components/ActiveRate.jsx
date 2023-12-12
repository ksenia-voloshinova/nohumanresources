import React from 'react';
import styles from "/src/styles/ActiveRate.module.scss";

const ActiveRate = ({t}) => {
    return (
        <div className={`${styles.wrapp_rate} border-red`}>
            <h2>{t("rateChangeHead")}:</h2>
            <p>базовый</p>
        </div>
    );
}

export default ActiveRate;