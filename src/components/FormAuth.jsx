import React from 'react';

import styles from "../styles/FormAuth.module.scss";
import InputPassword from "./InputPassword";

function FormAuth({t}) {
    return (
        <>
            <div className={styles.wrap_input}>
                <label className={styles.label} htmlFor="email">{t("labelEmail")}</label>
                <div className={styles.relative_input}>
                    <input className={`${styles.input} ${styles.email} border-black-input`} type="email" id="email"
                           name="email"
                           placeholder={t("inputPlaceholderEmail")}
                    />
                    <svg className={styles.validity_icon} xmlns="http://www.w3.org/2000/svg" width="27" height="28"
                         viewBox="0 0 27 28" fill="none">
                        <path
                            d="M19.1132 11.6482L19.1132 11.6482L19.1172 11.6442C19.5661 11.1797 19.5718 10.4429 19.1132 9.9843C18.6568 9.52787 17.9057 9.52787 17.4493 9.9843L11.9025 15.5311L9.5507 13.1793C9.09428 12.7229 8.34322 12.7229 7.8868 13.1793C7.43037 13.6357 7.43037 14.3868 7.8868 14.8432L11.0705 18.027C11.2898 18.2463 11.5881 18.3721 11.9025 18.3721C12.2169 18.3721 12.5152 18.2463 12.7345 18.027L19.1132 11.6482ZM2.58333 14C2.58333 7.98535 7.48535 3.08333 13.5 3.08333C19.5147 3.08333 24.4167 7.98535 24.4167 14C24.4167 20.0147 19.5147 24.9167 13.5 24.9167C7.48535 24.9167 2.58333 20.0147 2.58333 14Z"
                            fill="#64C661" stroke="#64C661" strokeWidth="0.666667"/>
                    </svg>
                </div>

            </div>
            <div className={styles.wrap_input}>
                <label className={styles.label} htmlFor="password">{t("labelPassword")}</label>
                <div className={styles.relative_input}>

                   <InputPassword t={t("inputPlaceholderPassword")}/>
                </div>
                <a className={styles.link} href="#">{t("forgotPassword")}</a>
            </div>
        </>

    )
        ;
}

export default FormAuth;