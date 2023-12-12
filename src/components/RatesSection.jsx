import React from 'react';
import styles from "../styles/RatesSection.module.scss"
import RatesCards from "../components/RatesCards";

const RatesSection = ({t}) => {
    return (
        <section id="rates" className={styles.section}>
            <div className="container">
                <h1 className="heading">{t("RatesSectionH1")}</h1>
                <p className={styles.description}>{t("RatesSectionSubhead")}</p>
                <RatesCards t={t}/>
            </div>
        </section>
    );
}

export default RatesSection;