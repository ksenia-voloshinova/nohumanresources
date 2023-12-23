import React from 'react';
import styles from "../styles/FormEmail.module.scss";
import ChangeMail from "./ChangeMail";

const FormEmail = ({t, mail}) => {
    return (
        <div className={`${styles.email__form} border-black`}>
            <div className={styles.wrapp_label}>
                <h3>{t("changeEmail")}</h3>
                {/*{props.info.mail.approved ? <p className={styles.success}>{t("emailSaveSuccess")}</p> :  <p className={styles.error}>{t("emailSaveError")}</p> }*/}
                <p className={styles.success}>{t("emailSaveSuccess")}</p>
            </div>
            <form action="#" method="POST">
                <ChangeMail
                    info={{
                        changeEmail: t("changeEmail"),
                        changeEmailButton: t("changeEmailButton"),
                        openChangeEmail: t("openChangeEmail"),
                        mail: mail
                    }}
                />

            </form>
        </div>


    );
}

export default FormEmail;