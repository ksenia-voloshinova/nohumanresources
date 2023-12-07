"use client"
import React, {useState} from 'react';
import styles from "../styles/Menu.module.css";

const InputBurger = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <input id="menu__toggle" className={styles.menu__toggle} type="checkbox" checked={isChecked} onChange={toggleCheckbox}  />
            <label className={styles.menu__btn} htmlFor="menu__toggle">
                <span></span>
            </label>
            <label className={styles.menu__overlay} htmlFor="menu__toggle"></label>
        </>

    );
}

export default InputBurger;