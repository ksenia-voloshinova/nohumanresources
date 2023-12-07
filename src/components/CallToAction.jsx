import React from 'react';
import styles from "../styles/CallToAction.module.css"
import Image from "next/image";
import ActionCard1 from "..//static/sectionActionCard1.png"
import ActionCard2 from "..//static/sectionActionCard2.png"

const CallToAction = ({t}) => {
    return (
        <section className={styles.section}>
            <div className={`${styles.wrapp__content} container`}>
                <h1 className="heading">{t("CallToActionH1")}</h1>
                <p className={styles.description}>{t("CallToActionDescription")}</p>
                <button className={ `${styles.button} button`}>{t("CallToActionButton")}</button>
                <div className={styles.wrapp__cards }>
                    <div className={styles.wrapp__card}>
                        <Image  src={ActionCard1}  loading="lazy" alt="picture"/>
                    </div>
                    <div className={styles.wrapp__card}>
                        <Image  src={ActionCard2}  loading="lazy" alt="picture"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;