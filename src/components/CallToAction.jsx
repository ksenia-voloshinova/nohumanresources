import React from 'react';
import styles from "../styles/CallToAction.module.scss"
import Image from "next/image";
import ActionCard1 from "..//static/sectionActionCard1.png"
import ActionCard1White from "..//static/sectionActionCard1White.png"
import ActionCard2 from "..//static/sectionActionCard2.png"

const CallToAction = ({t}) => {
    return (
        <section id="callToAction" className={styles.section}>
            <div className={`${styles.wrapp__content} container`}>
                <h1 className={`${styles.heading} heading`}>{t("CallToActionH1")}</h1>
                <p className={styles.description}>{t("CallToActionDescription")}</p>
                <button className={ `${styles.button} button`}>{t("CallToActionButton")}</button>
                <div className={styles.wrapp__cards }>
                    <div >
                        <Image className={styles.imgWhite} src={ActionCard1White}  loading="lazy" alt="picture"/>
                        <Image className={styles.imgBlack} src={ActionCard1}  loading="lazy" alt="picture"/>
                    </div>
                    <div >
                        <Image  src={ActionCard2}  loading="lazy" alt="picture"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;