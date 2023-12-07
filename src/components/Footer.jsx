import React from 'react';
import styles from "../styles/Footer.module.css"
import ListContacts from "../components/ListContacts";

const Footer = ({t}) => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.flex}`}>
                <h2 className={styles.head}>{t("FooterSectionHead")}</h2>
                <ListContacts color="white"/>
            </div>

        </footer>
    );
}

export default Footer;