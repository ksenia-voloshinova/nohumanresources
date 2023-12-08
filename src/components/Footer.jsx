import React from 'react';
import styles from "../styles/Footer.module.css"
import ListContacts from "../components/ListContacts";

const Footer = ({t}) => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.flex}`}>
                <h2 className={styles.head}>{t("FooterSectionHead")}</h2>
                <ListContacts color="white" head1={t("FeedBackMethod1.heading")}
                              content1={t("FeedBackMethod1.content")}
                              head2={t("FeedBackMethod2.heading")}
                              content2={t("FeedBackMethod2.content")}
                              head3={t("FeedBackMethod3.heading")}
                              content3={t("FeedBackMethod3.content")}/>
            </div>

        </footer>
    );
}

export default Footer;