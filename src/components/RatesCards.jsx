import React from 'react'
import styles from "../styles/RatesCards.module.css"
import Switch from "../components/Switch";
import Rate from "../components/Rate";

const RatesCards = ({t}) => {
    return (
        <>
            <div className={styles.wrapp}>
                <p>{t("SwitchTextMonth")}</p>
                <Switch/>
                <p>{t("SwitchTextYear")}</p>
            </div>
            <div className={styles.wrapp__cards}>
                <Rate info={{
                    name: t("RateInfo1.name"),
                    description: t("RateInfo1.description"),
                    price: t("RateInfo1.price"),
                    headList: t("RateInfo.headList"),
                    ListItems1: t("RateInfo1.listItems.compositionOfTariff1"),
                    ListItems2: t("RateInfo1.listItems.compositionOfTariff2"),
                    ListItems3: t("RateInfo1.listItems.compositionOfTariff3"),
                    ListItems4: t("RateInfo1.listItems.compositionOfTariff4"),
                    buttonText: t("RateInfo.buttonText"),
                    type: "normal"
                }} />
                <Rate info={{
                    name: t("RateInfo2.name"),
                    description: t("RateInfo2.description"),
                    price: t("RateInfo2.price"),
                    headList: t("RateInfo.headList"),
                    ListItems1: t("RateInfo2.listItems.compositionOfTariff1"),
                    ListItems2: t("RateInfo2.listItems.compositionOfTariff2"),
                    ListItems3: t("RateInfo2.listItems.compositionOfTariff3"),
                    ListItems4: t("RateInfo2.listItems.compositionOfTariff4"),
                    buttonText: t("RateInfo.buttonText"),
                    type: "active"
                }} />
                <Rate info={{
                    name: t("RateInfo3.name"),
                    description: t("RateInfo3.description"),
                    price: t("RateInfo3.price"),
                    headList: t("RateInfo.headList"),
                    ListItems1: t("RateInfo3.listItems.compositionOfTariff1"),
                    ListItems2: t("RateInfo3.listItems.compositionOfTariff2"),
                    ListItems3: t("RateInfo3.listItems.compositionOfTariff3"),
                    ListItems4: t("RateInfo3.listItems.compositionOfTariff4"),
                    buttonText: t("RateInfo.buttonText"),
                    type: "normal"
                }} />
            </div>

        </>
    );
};

export default RatesCards;