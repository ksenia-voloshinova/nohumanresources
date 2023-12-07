import React from 'react';
import styles from "../styles/Menu.module.css"
import InputBurger from "./InputBurger";

const Menu = ({t}) => {


    return (
        <div>
            <InputBurger/>
            <ul className={styles.menu__box}>
                <li><a className={styles.menu__item} href="#">{t('headerMenu.linkMain')}</a></li>
                <li><a className={styles.menu__item} href="#">{t('headerMenu.linkRates')}</a></li>
                <li><a className={styles.menu__item} href="#">{t('headerMenu.linkArticles')}</a></li>
                <li><a className={styles.menu__item} href="#">{t('headerMenu.linkFeedBack')}</a></li>
            </ul>
        </div>
    );
}

export default Menu;
