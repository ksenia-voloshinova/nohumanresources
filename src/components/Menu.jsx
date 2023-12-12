import React from 'react';
import styles from "../styles/Menu.module.scss"
import InputBurger from "./InputBurger";
import SwitchThemes from "./SwitchThemes";

const Menu = ({t}) => {


    return (
        <div>
            <InputBurger/>
            <ul className={`whiteLink ${styles.menu__box}`}>
                <li><a className={styles.menu__item} href="#callToAction">{t('headerMenu.linkMain')}</a></li>
                <li><a className={styles.menu__item} href="#rates">{t('headerMenu.linkRates')}</a></li>
                <li><a className={styles.menu__item} href="#articles">{t('headerMenu.linkArticles')}</a></li>
                <li><a className={styles.menu__item} href="#feedback">{t('headerMenu.linkFeedBack')}</a></li>
                <li><SwitchThemes/></li>


            </ul>
        </div>
    );
}

export default Menu;
