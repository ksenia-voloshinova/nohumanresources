import React from 'react';
import styles from "../styles/FormEmail.module.scss";

const FormEmail = ({t}) => {
    return (
        <form action="#" className={`${styles.email__form} border-black`} method="POST">
            <div className={styles.wrapp_label}>
                <label className={styles.label} htmlFor="password">{t("changeEmail")}</label>
                <p className={styles.success}>{t("emailSaveSuccess")}</p>
                <p className={styles.error}>{t("emailSaveError")}</p>
            </div>
            <div className={styles.wrap_input}>

                <input className={`${styles.input}`} type="password" id="password"
                       name="password" placeholder={t("changeEmail")}/>
                <input className={`${styles.form__button} button`} type="submit" value={t("changeEmailButton")}/>

            </div>
        </form>


    );
}

export default FormEmail;