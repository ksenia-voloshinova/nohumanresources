import React from 'react';
import styles from "../styles/PasswordForm.module.scss";

const PasswordForm = ({t}) => {
    return (
        <>
            <form action="#" className={`${styles.password__form} border-black`} method="POST">
                <h2>{t("changePassword")}</h2>
                <div className={styles.wrap_input}>
                    <label className={styles.label} htmlFor="password">{t("oldPassword")}</label>
                    <input className={`${styles.input}`} type="password" id="password"
                           name="password" placeholder={t("oldPasswordInput")}/>
                </div>
                <div className={styles.wrap_input}>
                    <label className={styles.label} htmlFor="password">{t("newPassword")}</label>
                    <input className={`${styles.input}`} type="password" id="password"
                           name="password" placeholder={t("newPasswordInput")}/>
                </div>
                <div className={styles.wrap_input}>
                    <label className={styles.label} htmlFor="password">{t("newRepeatPassword")}</label>
                    <input className={`${styles.input}`} type="password" id="password"
                           name="password" placeholder={t("newRepeatPasswordInput")}/>
                </div>


                <input className={`${styles.form__button} button`} type="submit" value={t("changePasswordButton")}/>

            </form>

        </>
    );
}

export default PasswordForm;